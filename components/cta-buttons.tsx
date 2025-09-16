import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAButtonsProps {
  title: string;
  description?: string;
  primaryText: string;
  primaryHref: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export function CTAButtons({ 
  title, 
  description, 
  primaryText, 
  primaryHref, 
  secondaryText, 
  secondaryHref 
}: CTAButtonsProps) {
  return (
    <section className="py-16 bg-gradient-to-r from-brand to-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">
          {title}
        </h2>
        {description && (
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            {description}
          </p>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-white text-brand hover:bg-gray-100 font-semibold shadow-lg"
            asChild
          >
            <a href={primaryHref} className="flex items-center gap-2">
              {primaryText}
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          
          {secondaryText && secondaryHref && (
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-brand font-semibold shadow-lg"
              asChild
            >
              <a href={secondaryHref} className="flex items-center gap-2">
                {secondaryText}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

