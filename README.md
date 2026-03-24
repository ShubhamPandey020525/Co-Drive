# Traffic Sign Vision

AI-powered traffic sign detection and recognition system.

## Project Structure
- `src/`: Frontend React application.
- `src_backend/`: FastAPI backend with YOLO integration.
- `src_AI/`: Original AI training and Streamlit scripts.

## Getting Started

### 1. Setup Backend (FastAPI)
Industry standard practice ke according backend ko alag terminal me run karein:
```bash
# Terminal 1
pip install -r requirements.txt
cd src_backend
python main.py
```
Backend `http://localhost:8000` par chalega.

### 2. Setup Frontend (Vite)
Frontend ko doosre terminal me run karein:
```bash
# Terminal 2
npm install
npm run dev
```
Frontend `http://localhost:8080` (ya default Vite port) par chalega.

**Note:** Vite proxy configured hai, toh frontend ki requests `/predict` par automatically backend tak pahuch jayengi.
