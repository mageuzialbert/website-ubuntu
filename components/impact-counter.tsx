"use client";

import { useEffect, useState } from "react";

export function ImpactCounter() {
  const [count, setCount] = useState(0);
  const targetCount = 6;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let currentCount = 0;

    const increment = () => {
      currentCount += 1;
      setCount(Math.min(currentCount, targetCount));
      
      if (currentCount < targetCount) {
        timer = setTimeout(increment, 200);
      }
    };

    // Start animation after a short delay
    const startTimer = setTimeout(() => {
      increment();
    }, 500);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="py-16 bg-brand/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-6xl md:text-8xl font-bold text-brand mb-4 font-heading">
            {count}
          </div>
          <p className="text-2xl md:text-3xl text-ink font-semibold">
            facilities onboarded
          </p>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Join the growing network of healthcare facilities transforming their operations with Ubuntu AfyaLink
          </p>
        </div>
      </div>
    </section>
  );
}

