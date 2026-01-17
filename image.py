import streamlit as st
from ultralytics import YOLO
from PIL import Image

MODEL_PATH = r"C:\Users\pande\Co-Drive\runs\detect\train\weights\best.pt"

def image_ui():
    st.header("Image Detection")

    model = YOLO(MODEL_PATH)

    uploaded = st.file_uploader(
        "Upload an image",
        type=["jpg", "jpeg", "png"]
    )

    if uploaded:
        image = Image.open(uploaded)
        results = model.predict(image, conf=0.25)

        st.markdown("<div id='img_result'></div>", unsafe_allow_html=True)

        if len(results[0].boxes) == 0:
            st.error("❌ Sign not found")
        else:
            output = results[0].plot()
            st.image(output, use_container_width=True)

        st.markdown("""
        <script>
        document.getElementById("img_result").scrollIntoView({behavior: "smooth"});
        </script>
        """, unsafe_allow_html=True)
