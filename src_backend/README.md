# Traffic Sign Vision Backend

Modular FastAPI backend for AI-powered traffic sign detection.

## Structure
- `main.py`: Entry point for FastAPI app.
- `api/`: Endpoint definitions (Predict Image, Video, Webcam).
- `services/`: Core logic (YOLO Inference).
- `models/`: Pydantic schemas (if needed).
- `weights/`: Trained YOLO model (`best.pt`).

## Setup
1. Install dependencies:
   ```bash
   pip install -r ../requirements.txt
   ```
2. Run server:
   ```bash
   python main.py
   ```
   Or using uvicorn:
   ```bash
   uvicorn src_backend.main:app --reload
   ```

The backend runs on `http://localhost:8000`.
The frontend (Vite) is configured to proxy `/predict` requests to this backend.
