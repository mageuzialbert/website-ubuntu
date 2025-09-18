"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function LogoCloud() {
  // Animation state
  const [position, setPosition] = useState(0);
  
  // Animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev <= -100 ? 0 : prev - 0.2)); // Slower movement
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">
            Backed By
          </h2>
        </div>
        
        <div className="flex justify-center">
          <div className="overflow-hidden w-full max-w-3xl">
            <div 
              className="flex space-x-12 justify-start" 
              style={{ 
                transform: `translateX(${position}%)`,
                transition: "transform 0.5s linear",
                width: "200%"  // Makes room for animation
              }}
            >
              {/* First set of logos */}
              <div className="flex space-x-12">
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm flex items-center justify-center min-w-[250px]">
                  <Image
                    src="/logos/undp.png"
                    alt="UNDP Logo"
                    width={200}
                    height={100}
                    className="opacity-90"
                  />
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm flex items-center justify-center min-w-[250px]">
                  <Image
                    src="/logos/ue.png"
                    alt="UE Logo"
                    width={200}
                    height={100}
                    className="opacity-90"
                  />
                </div>
              </div>
              
              {/* Duplicated for infinite scroll effect */}
              <div className="flex space-x-12">
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm flex items-center justify-center min-w-[250px]">
                  <Image
                    src="/logos/undp.png"
                    alt="UNDP Logo"
                    width={200}
                    height={100}
                    className="opacity-90"
                  />
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm flex items-center justify-center min-w-[250px]">
                  <Image
                    src="/logos/ue.png"
                    alt="UE Logo"
                    width={200}
                    height={100}
                    className="opacity-90"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

