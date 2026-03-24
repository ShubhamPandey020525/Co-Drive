import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { AlertCircle, VideoOff, Video } from "lucide-react";

const API_BASE = "/predict";

const CameraDetector = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [annotatedFrame, setAnnotatedFrame] = useState<string | null>(null);

  const startCamera = useCallback(async () => {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      setIsRunning(true);

      // Capture frames every 500ms
      intervalRef.current = setInterval(async () => {
        if (!videoRef.current || !canvasRef.current) return;
        const canvas = canvasRef.current;
        const video = videoRef.current;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(video, 0, 0);
        canvas.toBlob(async (blob) => {
          if (!blob) return;
          try {
            const formData = new FormData();
            formData.append("file", blob, "frame.jpg");
            const res = await fetch(`${API_BASE}/webcam`, { method: "POST", body: formData });
            if (!res.ok) return;
            const resultBlob = await res.blob();
            setAnnotatedFrame(URL.createObjectURL(resultBlob));
          } catch {
            // silently skip frame errors
          }
        }, "image/jpeg", 0.8);
      }, 500);
    } catch {
      setError("Camera permission denied. Please allow camera access and try again.");
    }
  }, []);

  const stopCamera = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (streamRef.current) streamRef.current.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
    intervalRef.current = null;
    setIsRunning(false);
    setAnnotatedFrame(null);
  }, []);

  useEffect(() => {
    return () => stopCamera();
  }, [stopCamera]);

  return (
    <div className="space-y-6">
      <div className="max-w-3xl mx-auto space-y-4">
        <div className="flex items-center justify-between px-1">
          <h4 className="text-sm font-medium text-muted-foreground">
            {isRunning ? "Live AI Detection" : "Camera Preview"}
          </h4>
          {isRunning && (
            <span className="flex items-center gap-1.5 text-[10px] font-bold text-red-500 uppercase tracking-wider animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              Live
            </span>
          )}
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-border bg-muted aspect-video flex items-center justify-center shadow-2xl">
          {/* Original Hidden Video for Stream Capture */}
          <video ref={videoRef} muted playsInline className="hidden" />
          
          {/* Display logic */}
          {!isRunning ? (
            <div className="text-muted-foreground text-sm flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <VideoOff className="w-6 h-6 opacity-50" />
              </div>
              Camera is currently off
            </div>
          ) : annotatedFrame ? (
            <img 
              src={annotatedFrame} 
              alt="Annotated frame" 
              className="w-full h-full object-cover" 
            />
          ) : (
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              <p className="text-muted-foreground text-xs font-medium">Initializing AI Feed...</p>
            </div>
          )}
        </div>

        <div className="flex justify-center pt-2">
          {!isRunning ? (
            <button
              onClick={startCamera}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Video className="w-4 h-4" /> Start Live Detection
            </button>
          ) : (
            <button
              onClick={stopCamera}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-destructive/10 text-destructive border border-destructive/20 font-semibold text-sm hover:bg-destructive hover:text-white transition-all"
            >
              <VideoOff className="w-4 h-4" /> Stop Detection
            </button>
          )}
        </div>
      </div>

      <canvas ref={canvasRef} className="hidden" />

      {error && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="flex items-center justify-center gap-2 text-destructive text-sm bg-destructive/5 py-3 rounded-lg border border-destructive/10"
        >
          <AlertCircle className="w-4 h-4" /> {error}
        </motion.div>
      )}
    </div>
  );
};

export default CameraDetector;
