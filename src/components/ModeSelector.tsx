import { motion } from "framer-motion";
import { Image, Video, Camera, LucideIcon } from "lucide-react";

type DetectionMode = "image" | "video" | "camera";

interface ModeSelectorProps {
  activeMode: DetectionMode;
  onModeChange: (mode: DetectionMode) => void;
}

const modes: { id: DetectionMode; icon: LucideIcon; title: string; description: string }[] = [
  { id: "image", icon: Image, title: "Image Detection", description: "Upload a photo to detect traffic signs instantly" },
  { id: "video", icon: Video, title: "Video Detection", description: "Analyze video files frame by frame for sign detection" },
  { id: "camera", icon: Camera, title: "Live Camera", description: "Use your webcam for real-time traffic sign detection" },
];

const ModeSelector = ({ activeMode, onModeChange }: ModeSelectorProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
      {modes.map((mode, i) => {
        const isActive = activeMode === mode.id;
        return (
          <motion.button
            key={mode.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onModeChange(mode.id)}
            className={`relative p-6 rounded-xl text-left transition-all duration-300 ${
              isActive
                ? "glass-strong gradient-border glow-blue"
                : "glass hover:bg-white/[0.06]"
            }`}
          >
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                isActive
                  ? "bg-gradient-to-br from-primary to-accent"
                  : "bg-white/[0.06]"
              }`}
            >
              <mode.icon className={`w-6 h-6 ${isActive ? "text-primary-foreground" : "text-muted-foreground"}`} />
            </div>
            <h3 className="text-foreground font-semibold text-lg mb-1">{mode.title}</h3>
            <p className="text-sm text-muted-foreground">{mode.description}</p>
          </motion.button>
        );
      })}
    </div>
  );
};

export default ModeSelector;
export type { DetectionMode };
