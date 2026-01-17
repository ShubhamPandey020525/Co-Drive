import streamlit as st
from image import image_ui
from video import video_ui
from webcam import webcam_ui

st.set_page_config(
    page_title="YOLO Vision",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# ---------------- CSS ----------------
st.markdown("""
<style>
body {
    background-color: #0b0f19;
}

.main-title {
    font-size: 54px;
    font-weight: 800;
    text-align: center;
    background: linear-gradient(90deg, #00f5ff, #7cffc4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 10px;
}

.sub-title {
    text-align: center;
    font-size: 18px;
    color: #b8bcc6;
    margin-bottom: 60px;
}

.card {
    background: linear-gradient(145deg, #141827, #0d111c);
    border-radius: 22px;
    padding: 45px;
    text-align: center;
    box-shadow: 0px 0px 25px rgba(0,0,0,0.6);
    transition: 0.35s ease;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0px 0px 40px rgba(0,255,255,0.35);
}

.card-title {
    font-size: 26px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 15px;
}

.card-text {
    font-size: 15px;
    color: #c2c6d0;
    margin-bottom: 30px;
}

.stButton>button {
    background: linear-gradient(90deg, #00f5ff, #00ffa2);
    color: #000;
    font-weight: 700;
    padding: 14px 34px;
    border-radius: 40px;
    border: none;
    transition: 0.3s ease;
}

.stButton>button:hover {
    transform: scale(1.08);
    background: linear-gradient(90deg, #00ffa2, #00f5ff);
}
</style>
""", unsafe_allow_html=True)

# ---------------- STATE ----------------
if "page" not in st.session_state:
    st.session_state.page = "home"

# ---------------- HEADER ----------------
st.markdown('<div class="main-title">YOLO Vision System</div>', unsafe_allow_html=True)
st.markdown(
    '<div class="sub-title">Image · Video · Live Camera Object Detection</div>',
    unsafe_allow_html=True
)

# ---------------- HOME ----------------
if st.session_state.page == "home":
    c1, c2, c3 = st.columns(3)

    with c1:
        st.markdown("""
        <div class="card">
            <div class="card-title">📷 Image Detection</div>
            <div class="card-text">
                Upload an image and detect traffic signs instantly.
            </div>
        </div>
        """, unsafe_allow_html=True)
        if st.button("Use Image"):
            st.session_state.page = "image"

    with c2:
        st.markdown("""
        <div class="card">
            <div class="card-title">🎞 Video Detection</div>
            <div class="card-text">
                Analyze uploaded videos frame by frame using YOLO.
            </div>
        </div>
        """, unsafe_allow_html=True)
        if st.button("Use Video"):
            st.session_state.page = "video"

    with c3:
        st.markdown("""
        <div class="card">
            <div class="card-title">🎥 Live Camera</div>
            <div class="card-text">
                Real-time detection directly from your webcam.
            </div>
        </div>
        """, unsafe_allow_html=True)
        if st.button("Use Camera"):
            st.session_state.page = "webcam"

# ---------------- ROUTES ----------------
elif st.session_state.page == "image":
    st.button("⬅ Back", on_click=lambda: st.session_state.update(page="home"))
    image_ui()

elif st.session_state.page == "video":
    st.button("⬅ Back", on_click=lambda: st.session_state.update(page="home"))
    video_ui()

elif st.session_state.page == "webcam":
    st.button("⬅ Back", on_click=lambda: st.session_state.update(page="home"))
    webcam_ui()
