import streamlit as st
from ultralytics import YOLO
import tempfile
import cv2

MODEL_PATH = r"C:\Users\pande\Co-Drive\runs\detect\train\weights\best.pt"

def video_ui():
    st.header("Video Detection")

    model = YOLO(MODEL_PATH)

    uploaded = st.file_uploader(
        "Upload a video",
        type=["mp4", "avi", "mov"]
    )

    if uploaded:
        temp = tempfile.NamedTemporaryFile(delete=False)
        temp.write(uploaded.read())

        st.markdown("<div id='vid_result'></div>", unsafe_allow_html=True)

        cap = cv2.VideoCapture(temp.name)
        frame_slot = st.empty()

        while cap.isOpened():
            ret, frame = cap.read()
            if not ret:
                break

            results = model.predict(frame, conf=0.25)
            annotated = results[0].plot()
            frame_slot.image(
                annotated,
                channels="BGR",
                use_container_width=True
            )

        cap.release()

        st.markdown("""
        <script>
        document.getElementById("vid_result").scrollIntoView({behavior: "smooth"});
        </script>
        """, unsafe_allow_html=True)
