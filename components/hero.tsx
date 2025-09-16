import { Button } from "@/components/ui/button";
import { UserPlus, Wrench } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="gradient-brand text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              Fix Faster. Deliver Faster. Save Lives.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              End-to-end solutions for healthcare facilities, pharmacies, and patients — all on one platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-brand hover:bg-gray-100 font-semibold"
                asChild
              >
                <a href="/contact">Register as a Facility</a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-brand font-semibold"
                asChild
              >
                <a href="/contact" className="flex items-center gap-2">
                  <Wrench className="h-4 w-4" />
                  Join as a Technician
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-brand font-semibold"
                asChild
              >
                <a href="/contact" className="flex items-center gap-2">
                  <UserPlus className="h-4 w-4" />
                  Partner with us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

