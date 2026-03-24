# 🚦 Co-Drive: AI Traffic Sign Detection System

A high-performance, real-time Traffic Sign Detection system powered by **YOLO11n**, featuring a modern **React + Vite** frontend and a robust **FastAPI** backend with full **GPU Acceleration**.

---

## ✨ Overview

**Co-Drive** is a complete end-to-end computer vision solution designed to detect and recognize traffic signs with extreme precision. Originally developed as a Streamlit app, it has now been evolved into a professional-grade full-stack application for better scalability and performance.

### **Core Capabilities:**
- 📷 **Image Detection**: Upload high-resolution photos for instant sign recognition.
- 🎞 **Video Detection**: Frame-by-frame processing with web-compatible output.
- 🎥 **Live Webcam Feed**: Real-time detection with a clean, centralized AI dashboard.
- ⚡ **GPU Accelerated**: Fully optimized to use NVIDIA CUDA for near-zero latency.

---

## 🧠 AI & Model Details

The heart of Co-Drive is a custom-trained **YOLO11n** model, optimized for traffic sign datasets.

| Component | Value |
|-----------|-------|
| **Model** | YOLO11n (Ultralytics) |
| **Input Size** | 960x960 |
| **Accuracy (mAP)** | **99.05%** (Best Model) |
| **Inference Speed** | ~19ms - 25ms (on GPU) |
| **Training Epochs** | 40 |
| **Patience** | 8 |

*The model `best.pt` is located in `src_backend/weights/`.*

---

## 🏗 Modern Architecture

Co-Drive follows an industry-standard separate Frontend/Backend architecture for maximum efficiency.

### **Backend (FastAPI)**
- **Language**: Python 3.10+
- **Framework**: FastAPI (Asynchronous)
- **AI Logic**: Modular `YOLOService` for centralized inference.
- **Acceleration**: Auto-detection of CUDA for GPU processing.
- **Location**: `src_backend/`

### **Frontend (React + Vite)**
- **Stack**: React, TypeScript, Tailwind CSS, Framer Motion.
- **Design**: Premium dark theme, responsive dashboard, real-time live-feed UI.
- **Communication**: Vite proxy configured for seamless API calls.
- **Location**: `src/` (Root)

---

## 🚀 Getting Started

### **1. Prerequisites**
- **Conda** (Recommended for environment management)
- **Node.js** (For frontend)
- **NVIDIA GPU** (Optional, but recommended for live detection)

### **2. Backend Setup**
```bash
# Create and activate environment
conda create -n traffic_vision python=3.10 -y
conda activate traffic_vision

# Install dependencies
pip install -r requirements.txt

# Start the FastAPI server
cd src_backend
python main.py
```
*Backend runs on `http://localhost:8000`.*

### **3. Frontend Setup**
Open a **new terminal**:
```bash
# Install NPM packages
npm install

# Start the Vite development server
npm run dev
```
*Frontend runs on `http://localhost:8080`.*

---

## 📂 Project Structure
- `src/`: Modern React frontend components.
- `src_backend/`: FastAPI backend (Logic, API, Weights).
- `src_AI/`: Original AI scripts, training logs, and Streamlit experiments.
- `requirements.txt`: Centralized Python dependencies.
- `package.json`: Frontend tech stack and scripts.

---

## 🎨 Professional UI Features
- **Live Indicator**: Blinking status for active webcam feeds.
- **Loading States**: Visual feedback during AI processing.
- **Single Viewport**: Clean, centralized detection output for better focus.
- **Dark Mode**: Modern, developer-friendly interface.

---
*Developed with ❤️ by Shubham Pandey*
