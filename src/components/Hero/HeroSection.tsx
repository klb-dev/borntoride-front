// src/components/Hero.tsx
import { useEffect, useRef } from "react";
import { setupThreeJS } from "../../utils/threeScene";
import "./HeroSection.css";
import ShapeDivider  from "../ui/ShapeDivider";


const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      setupThreeJS(canvasRef.current);
    }
  }, []);

  return (
        <main className="hero" id="home">
        <div className="canvas-container">
             <canvas id="hero-canvas" ref={canvasRef}></canvas>
        </div>
        
        <div className="hero-content">
            <h1><span>Skateboarding:</span> Enabling young people to take control.</h1>
            <p>Skateboarders have been looked at as troubled, hyper, misunderstood kids.  In reality, these kids are creative, determined, critical thinkers, coordinated, and problem solvers. There is something special about this group.</p>
            <div className="btn-3d-container">
                <a href="#donate" className=" btn-3d">Donate</a>
            </div>
            <a href="#newsletter" className="btn btn-secondary">Join Our Newsletter</a>
        </div>
        <ShapeDivider position="bottom" color="var(--light-color)" height={120} flipped={true}  />
    </main>
  );
};

export default Hero;
