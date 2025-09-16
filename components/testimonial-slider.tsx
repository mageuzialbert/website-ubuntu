"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import testimonialsData from "@/content/testimonials.json";

export function TestimonialSlider() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-ink mb-4">
            What Our Partners Say
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {testimonialsData.map((testimonial) => (
            <Card key={testimonial.id} className="card-rounded shadow-subtle">
              <CardContent className="p-8">
                <div className="text-center">
                  <Quote className="h-12 w-12 text-brand mx-auto mb-6" />
                  <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 italic">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <div className="border-t pt-6">
                    <p className="font-semibold text-ink text-lg">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

