"use client";

import { Button } from "@/components/ui/button";
import { UserPlus, Wrench, BarChart3 } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Images for the carousel
  const slides = [
    {
      id: 1,
      name: "AfyaSolar",
      image: "/images/placeholder-greenpower.png",
      alt: "AfyaSolar sustainable energy solution"
    },
    {
      id: 2,
      name: "Ubuntu MedFix",
      image: "/images/medfix.jpeg",
      alt: "Ubuntu MedFix maintenance system"
    },
    {
      id: 3, 
      name: "Ubuntu AfyaBook",
      image: "/images/solutions_info.jpg",
      alt: "Ubuntu AfyaBook patient management"
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [slides.length]);
  
  return (
    <section className="relative overflow-hidden">
      <div className="gradient-brand text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <div className="order-1 text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 animate-fade-in-up">
                <span className="block">Powering Health,</span> <span className="block">Simplifying Operations</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl font-medium mb-6 animate-fade-in-up animation-delay-200">
                Clean Energy. Smart Systems. Health Resilience.
              </h2>
              
              <p className="text-lg text-white/90 mb-8 max-w-xl animate-fade-in-up animation-delay-300">
                Empowering healthcare facilities in Tanzania with reliable energy, seamless maintenance, and smarter patient engagement. Reducing costs, improving efficiency, and strengthening care delivery.
              </p>
              
              <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-400">
                <Button 
                  size="lg" 
                  className="bg-white text-brand hover:bg-gray-100 font-semibold shadow-lg"
                  asChild
                >
                  <a href="/contact" className="flex items-center gap-2">
                    <Wrench className="h-4 w-4" />
                    Get a Maintenance Plan
                  </a>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white/10 font-semibold shadow-md bg-transparent"
                  asChild
                >
                  <a href="/contact" className="flex items-center gap-2 whitespace-nowrap">
                    <BarChart3 className="h-4 w-4" />
                    Save 40% on energy costs
                  </a>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white/10 font-semibold shadow-md bg-transparent"
                  asChild
                >
                  <a href="/contact" className="flex items-center gap-2 whitespace-nowrap">
                    <UserPlus className="h-4 w-4" />
                    Manage services smarter
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Right column - Product carousel */}
            <div className="order-2 relative h-[500px] overflow-hidden">
              {slides.map((slide, index) => (
                <div 
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentSlide 
                      ? "opacity-100 translate-x-0" 
                      : "opacity-0 translate-x-full"
                  }`}
                >
                  <div className="h-full w-full flex items-center justify-center">
                    <div className="w-full h-full relative">
                      <Image 
                        src={slide.image}
                        alt={slide.alt}
                        fill
                        className="object-cover rounded-lg"
                        priority={slide.id === 1}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </section>
  );
}

