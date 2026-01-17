```html

<div align="center">



\# 🚦 YOLO Traffic Sign Detection System



\### A Modern Computer Vision Project with a Premium Streamlit UI



<br/>



<img src="https://img.shields.io/badge/YOLO-Object%20Detection-blue?style=for-the-badge"/>

<img src="https://img.shields.io/badge/Streamlit-UI-red?style=for-the-badge"/>

<img src="https://img.shields.io/badge/PyTorch-CUDA-green?style=for-the-badge"/>



</div>



---



\## ✨ Overview



This project is a \*\*complete end-to-end Traffic Sign Detection system\*\* built using \*\*YOLO11n\*\* and deployed with a \*\*modern, interactive Streamlit UI\*\*.



It allows users to:

\- Upload \*\*images\*\*

\- Upload \*\*videos\*\*

\- Use \*\*live webcam detection\*\*



All detections are performed using a \*\*custom-trained YOLO model\*\* with clean architecture and professional UI design.



---



\## 🎯 Key Features



\### 📷 Image Detection

\- Upload an image

\- Detect traffic signs with bounding boxes

\- Displays \*\*“Sign not found”\*\* when no object is detected

\- Output-only view (no input preview)



---



\### 🎞 Video Detection

\- Upload a video file

\- Frame-by-frame detection

\- Real-time annotated output

\- Auto-scroll to detection results



---



\### 🎥 Live Webcam Detection

\- Webcam starts \*\*automatically\*\*

\- Real-time detection

\- Clean right-side camera layout

\- Smooth performance on GPU



---



\### 🎨 Premium UI Design

\- Custom CSS styling

\- Button-based navigation (no dropdowns)

\- Dark, modern, professional theme

\- Smooth transitions \& auto-scroll

\- Logic and UI cleanly separated



---



\## 🧠 Model Details



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



\*\*Best model used for inference:\*\*

```



runs/detect/train/weights/best.pt



```



The UI always uses the \*\*best validation model (`best.pt`)\*\*.



---



\## 🗂 Project Structure



```



.

├── app.py          # Main Streamlit UI

├── image.py        # Image upload logic

├── video.py        # Video upload logic

├── webcam.py       # Live webcam logic

├── requirements.txt

└── README.md



````



---



\## ⚙️ Environment Setup



\### Create and activate environment

```bash

conda create -n co-driver python=3.10 -y

conda activate co-driver

````



\### Install dependencies



```bash

pip install -r requirements.txt

```



---



\## ▶️ Run the Application



```bash

streamlit run app.py

```



The application will automatically open in your browser.



---



\## 📊 Evaluation Metric



\* \*\*Accuracy Metric Used:\*\* \*\*mAP@50 × 100\*\*



Evaluation is done on a \*\*separate labeled test set\*\* using:



```python

model.val(split="test")

```



This ensures unbiased and reliable performance measurement.



---



\## 🖥 System Requirements



\* OS: \*\*Windows\*\*

\* GPU: \*\*NVIDIA GPU\*\* (tested on RTX 4060 – 8GB VRAM)

\* CUDA enabled

\* Python 3.10



---



\## 🚀 Future Enhancements



\* Load model once globally (FPS boost)

\* Confidence threshold slider

\* FPS counter

\* Save output images/videos

\* Fullscreen webcam mode

\* Cloud deployment



---



\## 🧾 Notes



\* Training uses caching for speed optimization

\* Testing and UI inference do not use cache

\* Windows multiprocessing issues handled correctly

\* Codebase is modular, scalable, and production-ready



---



<div align="center">



\## 👤 Author



\*\*Developed by:\*\* Shubham Pandey

\*\*Domain:\*\* Computer Vision · Deep Learning · Object Detection · UI Deployment



</div>



---



```

```



