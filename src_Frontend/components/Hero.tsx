import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToDetection = () => {
    document.getElementById("detection")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-16 relative overflow-hidden">
      {/* Warm Interactive UI Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated HUD Rings (Warm) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-orange-500/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-amber-500/10 rounded-full border-dashed"
        />

        {/* Warm Pulse Nodes */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0 
            }}
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0, 0.25, 0],
            }}
            transition={{ 
              duration: 5 + Math.random() * 5, 
              repeat: Infinity, 
              delay: Math.random() * 5,
              ease: "easeInOut" 
            }}
            className="absolute w-40 h-40 rounded-full bg-orange-200/20 blur-3xl"
          />
        ))}
        
        {/* Animated Warm Road Paths */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.15]">
          <motion.path
            d="M -100 450 Q 400 250 900 450 T 1900 450"
            fill="none"
            stroke="url(#warmGrad)"
            strokeWidth="2"
            animate={{ strokeDashoffset: [-150, 0] }}
            strokeDasharray="15 25"
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
          <defs>
            <linearGradient id="warmGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#f97316', stopOpacity: 0 }} />
              <stop offset="50%" style={{ stopColor: '#f59e0b', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#f97316', stopOpacity: 0 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center max-w-4xl relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-strong text-sm text-orange-600 mb-8 border border-orange-200"
        >
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shadow-[0_0_8px_#f97316]" />
          Smart Navigation Vision
        </motion.div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-none">
          <span className="text-zinc-900">CO-DRIVE</span>
          <br />
          <span className="gradient-text">AI VISION</span>
        </h1>

        <p className="text-xl md:text-2xl text-zinc-600 max-w-2xl mx-auto mb-12 leading-relaxed font-normal">
          Empowering your journey with real-time autonomous perception 
          powered by advanced deep learning.
        </p>

        <motion.button
          onClick={scrollToDetection}
          whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(249, 115, 22, 0.2)" }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-primary text-white font-bold text-lg shadow-lg hover:bg-orange-600 transition-all group"
        >
          Explore System
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
