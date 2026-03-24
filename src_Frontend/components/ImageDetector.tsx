import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, AlertCircle } from "lucide-react";
import DragDropZone from "./DragDropZone";

const API_BASE = "/predict";

const ImageDetector = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = (f: File) => {
    const valid = ["image/jpeg", "image/png", "image/jpg"];
    if (!valid.includes(f.type)) {
      setError("Invalid format. Please upload JPG, PNG, or JPEG.");
      return;
    }
    setError(null);
    setFile(f);
    setResult(null);
    setPreview(URL.createObjectURL(f));
  };

  const handleDetect = async () => {
    if (!file) return;
    setLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch(`${API_BASE}/image`, { method: "POST", body: formData });
      if (!res.ok) throw new Error("API request failed");
      const blob = await res.blob();
      setResult(URL.createObjectURL(blob));
    } catch {
      setError("Failed to process image. Please ensure the backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {!preview && (
        <DragDropZone
          accept="image/jpeg,image/png,image/jpg"
          label="Upload an Image"
          formats="JPG, PNG, JPEG"
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
            <div className="rounded-xl overflow-hidden border border-white/[0.08]">
              <img src={result || preview} alt="Detection" className="w-full max-h-[500px] object-contain bg-muted" />
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => { setFile(null); setPreview(null); setResult(null); setError(null); }}
                className="px-5 py-2.5 rounded-lg glass text-sm text-foreground hover:bg-white/[0.08] transition-colors"
              >
                Change Image
              </button>
              {!result && (
                <button
                  onClick={handleDetect}
                  disabled={loading}
                  className="flex-1 px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium text-sm disabled:opacity-60 transition-opacity"
                >
                  {loading ? (
                    <span className="inline-flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" /> Running AI detection...
                    </span>
                  ) : (
                    "Detect Traffic Signs"
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

export default ImageDetector;
