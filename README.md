<div align="center"> 
  
 # 🚦 YOLO Traffic Sign Detection System 
  
 ### A Modern Computer Vision Project with a Premium Full-Stack & Streamlit Architecture 
  
 <br/> 
  
 <img src="https://img.shields.io/badge/YOLO-Object%20Detection-blue?style=for-the-badge"/> 
 <img src="https://img.shields.io/badge/FastAPI-Backend-green?style=for-the-badge"/> 
 <img src="https://img.shields.io/badge/React-Vite-61DAFB?style=for-the-badge&logo=react&logoColor=black"/> 
 <img src="https://img.shields.io/badge/PyTorch-CUDA-green?style=for-the-badge"/> 
  
 </div> 
  
 --- 
  
 ## ✨ Overview 
  
 This project is a **complete end-to-end Traffic Sign Detection system** built using **YOLO11n**. It features a high-performance **FastAPI backend** with full **GPU acceleration** and a modern **React + Vite frontend** dashboard.
  
 It allows users to: 
 - Upload **images** for instant recognition.
 - Process **videos** with real-time annotated output.
 - Use **live webcam detection** via a centralized AI feed.
  
 All detections are performed using a **custom-trained YOLO model** with a professional UI design. 
  
 --- 
  
 ## 🎯 Key Features 
  
 ### 📷 Image Detection 
 - Upload an image (JPG, PNG, JPEG).
 - Detect traffic signs with precision bounding boxes.
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
 - Modular `YOLOService` for centralized AI logic.
 - Full GPU/CUDA support for high-speed inference.
 - Location: `src_backend/`
  
 ### **Frontend (React + Vite)**
 - Responsive dashboard with Tailwind CSS & Framer Motion.
 - Seamless integration with backend via Vite Proxy.
 - Location: `src_Frontend/`
  
 --- 
  
 ## 🚀 Getting Started 
  
 ### **1. Backend Setup**
 ```bash
 conda create -n traffic_vision python=3.10 -y
 conda activate traffic_vision
 pip install -r requirements.txt
 cd src_backend
 python main.py
 ```
  
 ### **2. Frontend Setup**
 ```bash
 npm install
 npm run dev
 ```
  
 --- 
  
 ## 📂 Project Structure 
 - `src_Frontend/`: Modern React dashboard.
 - `src_backend/`: FastAPI server & YOLO integration.
 - `src_AI/`: Original training scripts, logs, and experimental Streamlit UI.
 - `requirements.txt`: Centralized dependencies.
  
 --- 
 *Developed with ❤️ by Shubham Pandey*
