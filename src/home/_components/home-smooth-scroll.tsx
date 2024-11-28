

import { useEffect } from "react";
import Lenis from "lenis";


export default function HomeSmoothScroll(){



  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.5, // Controls the smoothness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
    });
    
    // RAF loop for continuous smooth scroll
    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    
    // Cleanup function to destroy Lenis on unmount
    return () => lenis.destroy();
  }, []);

  return null;
    
    
}