from ultralytics import YOLO
import torch
from multiprocessing import freeze_support
import os

def main():
    print("=== Training start ===", flush=True)
    print("CUDA available:", torch.cuda.is_available(), flush=True)
    if torch.cuda.is_available():
        print("GPU:", torch.cuda.get_device_name(0), flush=True)
        print(
            "VRAM (GB):",
            round(torch.cuda.get_device_properties(0).total_memory / 1024**3, 2),
            flush=True
        )

    model = YOLO("yolo11n.pt")

    model.train(
        data="C:/Users/pande/Co-Drive/dataset.yaml",
        imgsz=960,
        batch=8,
        epochs=40,
        patience=8,
        rect=True,
        cache="disk",
        workers=14,
        device=0,
        verbose=True,
        plots=True
    )

    print("=== Training finished ===", flush=True)
    print(
        "Best model saved at:",
        os.path.abspath("runs/detect/train/weights/best.pt"),
        flush=True
    )

if __name__ == "__main__":
    freeze_support()
    main()
