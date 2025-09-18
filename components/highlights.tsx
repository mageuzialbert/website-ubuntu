"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Zap, Calendar, Truck, Smartphone } from "lucide-react";
import Link from "next/link";
import highlightsData from "@/content/highlights.json";

const iconMap = {
  wrench: Wrench,
  zap: Zap,
  calendar: Calendar,
  truck: Truck,
  smartphone: Smartphone,
};

export function Highlights() {
  const enabledHighlights = highlightsData.filter(item => item.enabled);

  return (
    <section className="py-16 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-ink mb-4">
            Our Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Ubuntu AfyaLink solutions work better together. Power your facility, keep your machines running, and delight patients - all in one ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {enabledHighlights.map((highlight) => {
            const IconComponent = iconMap[highlight.icon as keyof typeof iconMap];
            
            return (
              <Card key={highlight.id} className="card-rounded shadow-subtle hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-brand/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-brand" />
                    </div>
                    <CardTitle className="text-xl font-heading">{highlight.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 mb-4">
                    {highlight.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {highlight.features && (
                    <ul className="space-y-2 mb-6">
                      {highlight.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <span className="text-brand mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                  {highlight.cta && (
                    <Link 
                      href={`/solutions/${highlight.id}`}
                      className="block w-full bg-brand hover:bg-brand-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors"
                    >
                      {highlight.cta}
                    </Link>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
        
       {/* <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold font-heading text-ink mb-6">
            Our solutions work better together
          </h3>
          <div className="bg-white p-4 md:p-8 rounded-xl shadow-subtle inline-block">
            <img 
              src="/images/solutions.png" 
              alt="Ubuntu AfyaLink Solutions Integration Infographic" 
              className="max-w-full h-auto rounded-lg"
              style={{ maxHeight: "500px" }}
            />
          </div>
        </div>

         Commented out disabled highlights */}
        {/* 
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Coming Soon: MedXpress & AfyaLink App
          </p>
        </div>
        */}
      </div>
    </section>
  );
}

