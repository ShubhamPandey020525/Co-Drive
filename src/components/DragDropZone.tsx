import { useCallback, useState, useRef } from "react";
import { Upload } from "lucide-react";
import { motion } from "framer-motion";

interface DragDropZoneProps {
  accept: string;
  label: string;
  formats: string;
  onFileSelect: (file: File) => void;
}

const DragDropZone = ({ accept, label, formats, onFileSelect }: DragDropZoneProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) onFileSelect(file);
    },
    [onFileSelect]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onFileSelect(file);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
      className={`relative cursor-pointer rounded-xl border-2 border-dashed p-12 text-center transition-all duration-300 ${
        isDragging
          ? "border-primary bg-primary/5"
          : "border-white/[0.1] hover:border-primary/50 hover:bg-white/[0.02]"
      }`}
    >
      <input ref={inputRef} type="file" accept={accept} className="hidden" onChange={handleChange} />
      <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-4" />
      <p className="text-foreground font-medium text-lg mb-1">{label}</p>
      <p className="text-sm text-muted-foreground">
        Drag & drop or click to browse · {formats}
      </p>
    </motion.div>
  );
};

export default DragDropZone;
