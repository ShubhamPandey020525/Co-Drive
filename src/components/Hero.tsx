import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToDetection = () => {
    document.getElementById("detection")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-16 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-3xl relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-muted-foreground mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-glow" />
          Powered by YOLO Deep Learning
        </motion.div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="text-foreground">Traffic Sign Detection</span>
          <br />
          <span className="gradient-text">using AI</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Upload images, analyze videos, or use your webcam to detect traffic signs
          instantly using a YOLO deep learning model.
        </p>

        <motion.button
          onClick={scrollToDetection}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-base shadow-lg glow-blue hover:shadow-xl transition-shadow"
        >
          Start Detection
          <ArrowDown className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
