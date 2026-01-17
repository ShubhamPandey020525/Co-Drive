import streamlit as st
from ultralytics import YOLO
import cv2

MODEL_PATH = r"C:\Users\pande\Co-Drive\runs\detect\train\weights\best.pt"

def webcam_ui():
    st.header("Live Camera Detection")

    _, right = st.columns([1, 2])

    with right:
        model = YOLO(MODEL_PATH)
        frame_slot = st.empty()

        cap = cv2.VideoCapture(0)

        while cap.isOpened():
            ret, frame = cap.read()
            if not ret:
                st.error("Camera not accessible")
                break

            results = model.predict(frame, conf=0.25)
            annotated = results[0].plot()
            frame_slot.image(
                annotated,
                channels="BGR",
                use_container_width=True
            )

        cap.release()
