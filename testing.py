from ultralytics import YOLO
from multiprocessing import freeze_support

def main():
    MODEL_PATH = r"C:\Users\pande\Co-Drive\runs\detect\train\weights\best.pt"
    DATA_YAML = r"C:\Users\pande\Co-Drive\dataset.yaml"

    model = YOLO(MODEL_PATH)

    metrics = model.val(
        data=DATA_YAML,
        split="test",
        imgsz=960,
        device=0,
        workers=0,
        cache=False
    )

    accuracy = metrics.box.map50 * 100
    print(f"Test Accuracy (mAP@50): {accuracy:.2f}%")

if __name__ == "__main__":
    freeze_support()
    main()
