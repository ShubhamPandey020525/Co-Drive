import os
import shutil
import tempfile
from fastapi import APIRouter, UploadFile, File, HTTPException, Response
from services.inference import yolo_service
import base64

router = APIRouter()

@router.post("/predict/image")
async def predict_image(file: UploadFile = File(...)):
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="File must be an image")
    
    try:
        contents = await file.read()
        annotated_bytes, detections = yolo_service.predict(contents)
        
        # Return the annotated image as a response
        return Response(content=annotated_bytes, media_type="image/jpeg")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/predict/webcam")
async def predict_webcam(file: UploadFile = File(...)):
    # Same logic as predict_image for individual frames
    return await predict_image(file)

import cv2

@router.post("/predict/video")
async def predict_video(file: UploadFile = File(...)):
    if not file.content_type.startswith("video/"):
        raise HTTPException(status_code=400, detail="File must be a video")
    
    try:
        with tempfile.TemporaryDirectory() as temp_dir:
            input_path = os.path.join(temp_dir, "input.mp4")
            output_path = os.path.join(temp_dir, "output.mp4")
            
            with open(input_path, "wb") as f:
                shutil.copyfileobj(file.file, f)
            
            # Manual processing with OpenCV for browser compatibility
            cap = cv2.VideoCapture(input_path)
            width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH)) if cap.get(cv2.CAP_PROP_FRAME_WIDTH) else 640
            height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT)) if cap.get(cv2.CAP_PROP_FRAME_HEIGHT) else 480
            fps = cap.get(cv2.CAP_PROP_FPS) if cap.get(cv2.CAP_PROP_FPS) > 0 else 30
            
            # Use 'avc1' (H.264) for web compatibility
            fourcc = cv2.VideoWriter_fourcc(*'avc1')
            out = cv2.VideoWriter(output_path, fourcc, fps, (width, height))
            
            while cap.isOpened():
                ret, frame = cap.read()
                if not ret:
                    break
                
                # Predict frame by frame using GPU
                results = yolo_service.model.predict(
                    frame, 
                    conf=0.25, 
                    verbose=False,
                    device=yolo_service.device
                )
                annotated_frame = results[0].plot()
                out.write(annotated_frame)
            
            cap.release()
            out.release()
            
            if not os.path.exists(output_path):
                raise HTTPException(status_code=500, detail="Video processing failed to create output")
            
            with open(output_path, "rb") as f:
                processed_bytes = f.read()
            
            return Response(
                content=processed_bytes, 
                media_type="video/mp4"
            )
    except Exception as e:
        print(f"Video processing error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")

@router.get("/health")
async def health_check():
    return {"status": "ok"}
