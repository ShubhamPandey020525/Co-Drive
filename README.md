<div align="center">

# 🚦 YOLO Traffic Sign Detection System

### A Modern Computer Vision Project with a Premium Streamlit UI

<br/>

<img src="https://img.shields.io/badge/YOLO-Object%20Detection-blue?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Streamlit-UI-red?style=for-the-badge"/>
<img src="https://img.shields.io/badge/PyTorch-CUDA-green?style=for-the-badge"/>

</div>

---

## ✨ Overview

This project is a **complete end-to-end Traffic Sign Detection system** built using **YOLO11n** and deployed with a **modern, interactive Streamlit UI**.

It allows users to:
- Upload **images**
- Upload **videos**
- Use **live webcam detection**

All detections are performed using a **custom-trained YOLO model** with clean architecture and professional UI design.

---

## 🎯 Key Features

### 📷 Image Detection
- Upload an image
- Detect traffic signs with bounding boxes
- Displays **“Sign not found”** when no object is detected
- Output-only view (no input preview)

---

### 🎞 Video Detection
- Upload a video file
- Frame-by-frame detection
- Real-time annotated output
- Auto-scroll to detection results

---

### 🎥 Live Webcam Detection
- Webcam starts **automatically**
- Real-time detection
- Clean right-side camera layout
- Smooth performance on GPU

---

### 🎨 Premium UI Design
- Custom CSS styling
- Button-based navigation (no dropdowns)
- Dark, modern, professional theme
- Smooth transitions & auto-scroll
- Logic and UI cleanly separated

---

## 🧠 Model Details

| Component | Value |
|----------|-------|
| Model | YOLO11n |
| Framework | Ultralytics YOLO |
| Image Size | 960 |
| Batch Size | 8 |
| Epochs | 40 |
| Patience | 8 |
| Training Mode | Rectangular |
| Device | GPU (CUDA) |



**Best model used for inference : 99.05%**  
`best.pt`
