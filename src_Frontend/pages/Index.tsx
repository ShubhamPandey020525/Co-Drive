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
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden selection:bg-primary/20">
      {/* Immersive Radial Contrast Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Base Gradient: Ultra-Light Center to Deeper Warm Corners */}
        <div 
          className="absolute inset-0" 
          style={{
            background: `radial-gradient(circle at center, hsl(35 60% 98%) 0%, hsl(30 25% 75%) 100%)`
          }}
        />
        
        {/* Intense Corner Vignette Shadows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(40,20,0,0.25)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(40,20,0,0.25)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(40,20,0,0.35)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(40,20,0,0.35)_0%,transparent_70%)]" />

        {/* Heavy Outer Frame Shadow for maximum corner contrast */}
        <div className="absolute inset-0 shadow-[inset_0_0_250px_rgba(60,30,0,0.2)] pointer-events-none" />

        {/* Dynamic Warm Blobs for Depth */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-orange-200/20 rounded-full blur-[120px]"
        />

        {/* Floating Warm Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                opacity: Math.random() * 0.4 
              }}
              animate={{ 
                opacity: [0.1, 0.4, 0.1],
                y: [null, "-=40"]
              }}
              transition={{ 
                duration: 6 + Math.random() * 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute w-1 h-1 bg-orange-400/20 rounded-full"
            />
          ))}
        </div>
        
        {/* Sophisticated Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="relative z-10">
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
          <p className="text-muted-foreground">Select how you want to use Co-Drive</p>
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
    </div>
  );
};

export default Index;
