import { Scan } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Scan className="w-5 h-5 text-primary" />
          <span className="text-foreground font-semibold">Traffic Sign Detection AI</span>
        </div>
        <p className="text-sm text-muted-foreground">Powered by YOLO Computer Vision</p>
      </div>
    </footer>
  );
};

export default Footer;
