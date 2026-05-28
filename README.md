<div align="center"> 
  
 # 🚦  Co-Drive 
  
 ### A Modern Computer Vision Project with a Premium Full-Stack & Streamlit Architecture 
  
 <br/> 
  
 <img src="https://img.shields.io/badge/YOLO-Object%20Detection-blue?style=for-the-badge"/> 
 <img src="https://img.shields.io/badge/FastAPI-Backend-green?style=for-the-badge"/> 
 <img src="https://img.shields.io/badge/React-Vite-61DAFB?style=for-the-badge&logo=react&logoColor=black"/> 
 <img src="https://img.shields.io/badge/PyTorch-CUDA-green?style=for-the-badge"/> 
  
 </div> 
  
 --- 
  
 ## ✨ Overview 
  
 This project is a **complete end-to-end Co-Drive system** built using **YOLO11n**. It features a high-performance **FastAPI backend** with full **GPU acceleration** and a modern **React + Vite frontend** dashboard.
  
 It allows users to: 
 - Upload **images** for instant recognition.
 - Process **videos** with real-time annotated output.
 - Use **live webcam detection** via a centralized AI feed.
  
 All detections are performed using a **custom-trained YOLO model** with a professional UI design. 
  
 --- 
  
 ## 🎯 Key Features 
  
 ### 📷 Image Detection 
 - Upload an image (JPG, PNG, JPEG).
 - Run Co-Drive with precision bounding boxes.
 - Smart feedback: Displays **“Sign not found”** when no objects are detected.
  
 --- 
  
 ### 🎞 Video Detection 
 - High-speed frame-by-frame detection.
 - Browser-compatible MP4 output with `avc1` encoding.
 - Real-time progress and results display.
  
 --- 
  
 ### 🎥 Live Webcam Detection 
 - Automatic camera initialization.
 - Real-time AI processing with near-zero latency on GPU.
 - Clean, centralized viewport for a professional monitoring experience.
  
 --- 
  
 ## 🧠 Model Details 
  
 | Component | Value | 
 |----------|-------| 
 | **Model** | YOLO11n | 
 | **Framework** | Ultralytics YOLO | 
 | **Accuracy (mAP)** | **99.05%** | 
 | **Image Size** | 960x960 | 
 | **Device** | GPU (CUDA) | 
 | **Inference Speed** | ~19ms - 25ms | 
  
 **Best model used for inference: `best.pt`** (located in `src_backend/weights/`)
  
 --- 
  
 ## 🏗 Architecture & Tech Stack 
  
 ### **Backend (FastAPI)**
 - **Entry Point**: `main.py` starts the FastAPI app.
 - **API Endpoints**: Defined in `api/` for Image, Video, and Webcam predictions.
 - **Core Logic**: `services/inference.py` handles the YOLO model and GPU acceleration.
 - **Location**: `src_backend/`
  
 ### **Frontend (React + Vite)**
 - Responsive dashboard with Tailwind CSS & Framer Motion.
 - Seamless integration with backend via Vite Proxy.
 - Location: `src_Frontend/`
  
 --- 
  
 ## 📸 Proof of Work 
  
 ### **🏠 Landing Page** 
 ![Landing Page](proofs/landing%20page.png) 
 
 ---

 ### **�️ Mode 1: Image Detection** 
 > High-precision identification of traffic signs from uploaded static images.
  
 <div align="center"> 
 <img src="proofs/2nd%20page.png" width="90%" style="margin-bottom: 20px; border-radius: 10px; shadow: 10px;"/> 
 <br/>
 <img src="proofs/3rd%20page.png" width="90%" style="border-radius: 10px; shadow: 10px;"/> 
 </div> 

 ---
  
 ### **�️ Mode 2 & 3: Video & Live Demonstrations** 
 
 > [!TIP]
 > **Experience the real-time processing capabilities of Co-Drive.**
  
 | Detection Mode | Link to Demonstration |
 |----------|----------|
 | **🎥 Video File Mode** | [▶️ Watch Video Mode Demo](proofs/video%20mode.mp4) |
 | **⚡ Live Webcam Mode** | [▶️ Watch Live Mode Demo](proofs/live%20mode.mp4) |
  
 --- 
  
 ## 🚀 Getting Started 
  
 ### **1. Backend Setup**
 ```bash
 # Create and activate environment
 conda create -n co-drive python=3.10 -y
 conda activate co-drive
 
 # Install dependencies
 pip install -r requirements.txt
 
 # Run server
 cd src_backend
 python main.py
 ```
  
 ### **2. Frontend Setup**
 ```bash
 # Install dependencies
 npm install
 
 # Run development server
 npm run dev
 ```
  
 --- 
  
 ## 📂 Project Structure 
 - `src_Frontend/`: Modern React dashboard.
 - `src_backend/`: FastAPI server & YOLO integration.
   - `api/`: API endpoint definitions.
   - `services/`: Inference logic.
   - `weights/`: Trained YOLO weights.
 - `src_AI/`: Original training scripts, logs, and experimental Streamlit UI.
 - `requirements.txt`: Centralized Python dependencies.
  
 --- 
 *Developed with ❤️ by Shubham Pandey*
