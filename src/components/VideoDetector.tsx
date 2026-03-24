import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, AlertCircle } from "lucide-react";
import DragDropZone from "./DragDropZone";

const API_BASE = "/predict";

const VideoDetector = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = (f: File) => {
    const valid = ["video/mp4", "video/quicktime", "video/x-msvideo"];
    if (!valid.includes(f.type)) {
      setError("Invalid format. Please upload MP4, MOV, or AVI.");
      return;
    }
    setError(null);
    setFile(f);
    setResult(null);
    setPreview(URL.createObjectURL(f));
  };

  const handleAnalyze = async () => {
    if (!file) return;
    setLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch(`${API_BASE}/video`, { method: "POST", body: formData });
      if (!res.ok) throw new Error("API request failed");
      const blob = await res.blob();
      setResult(URL.createObjectURL(blob));
    } catch {
      setError("Failed to process video. Please ensure the backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {!preview && (
        <DragDropZone
          accept="video/mp4,video/quicktime,video/x-msvideo"
          label="Upload a Video"
          formats="MP4, MOV, AVI"
          onFileSelect={handleFileSelect}
        />
      )}

      <AnimatePresence mode="wait">
        {preview && (
          <motion.div
            key="preview"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="space-y-4"
          >
            <div className="rounded-xl overflow-hidden border border-border">
              <video
                src={result || preview}
                controls
                className="w-full max-h-[500px] bg-muted"
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => { setFile(null); setPreview(null); setResult(null); setError(null); }}
                className="px-5 py-2.5 rounded-lg glass text-sm text-foreground hover:bg-white/[0.08] transition-colors"
              >
                Change Video
              </button>
              {!result && (
                <button
                  onClick={handleAnalyze}
                  disabled={loading}
                  className="flex-1 px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium text-sm disabled:opacity-60 transition-opacity"
                >
                  {loading ? (
                    <span className="inline-flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" /> Analyzing video...
                    </span>
                  ) : (
                    "Analyze Video"
                  )}
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {error && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-destructive text-sm">
          <AlertCircle className="w-4 h-4" /> {error}
        </motion.div>
      )}
    </div>
  );
};

export default VideoDetector;
