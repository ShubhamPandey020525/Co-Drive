import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ModeSelector, { type DetectionMode } from "@/components/ModeSelector";
import ImageDetector from "@/components/ImageDetector";
import VideoDetector from "@/components/VideoDetector";
import CameraDetector from "@/components/CameraDetector";
import Footer from "@/components/Footer";

const Index = () => {
  const [mode, setMode] = useState<DetectionMode>("image");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      <section id="detection" className="container mx-auto px-6 py-20 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Choose Detection Mode</h2>
          <p className="text-muted-foreground">Select how you want to analyze traffic signs</p>
        </motion.div>

        <ModeSelector activeMode={mode} onModeChange={setMode} />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass-strong rounded-2xl p-6 md:p-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {mode === "image" && <ImageDetector />}
              {mode === "video" && <VideoDetector />}
              {mode === "camera" && <CameraDetector />}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
