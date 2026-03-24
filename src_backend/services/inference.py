import os
import cv2
import numpy as np
import torch
from ultralytics import YOLO
from PIL import Image
import io

class YOLOService:
    def __init__(self, model_path: str):
        if not os.path.exists(model_path):
            raise FileNotFoundError(f"Model not found at {model_path}")
        
        # Determine device (GPU if available)
        self.device = "cuda" if torch.cuda.is_available() else "cpu"
        print(f"--- Using device: {self.device} for YOLO ---")
        
        self.model = YOLO(model_path)
        # Warm up the model on the device
        self.model.to(self.device)

    def predict(self, image_bytes: bytes, conf_threshold: float = 0.25):
        # Convert bytes to PIL Image
        image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
        
        # Predict using GPU if available
        # verbose=True will show device and timing info in terminal
        results = self.model.predict(image, conf=conf_threshold, device=self.device, verbose=True)
        
        # Get annotated image
        annotated_image = results[0].plot() # This returns a BGR numpy array
        
        # Convert BGR to RGB for PIL
        annotated_image_rgb = cv2.cvtColor(annotated_image, cv2.COLOR_BGR2RGB)
        
        # Convert back to bytes
        img_pil = Image.fromarray(annotated_image_rgb)
        buf = io.BytesIO()
        img_pil.save(buf, format="JPEG")
        byte_im = buf.getvalue()
        
        # Extract boxes/labels info
        detections = []
        for box in results[0].boxes:
            detections.append({
                "class": results[0].names[int(box.cls[0])],
                "confidence": float(box.conf[0]),
                "bbox": [float(x) for x in box.xyxy[0]]
            })
            
        return byte_im, detections

# Initialize singleton
MODEL_PATH = os.path.join(os.path.dirname(__file__), "..", "weights", "best.pt")
yolo_service = YOLOService(MODEL_PATH)
