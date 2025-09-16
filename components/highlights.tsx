"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive healthcare technology solutions designed for the Tanzanian market
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
                  <CardDescription className="text-gray-600">
                    {highlight.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link 
                    href={`/solutions/${highlight.id}`}
                    className="inline-flex items-center text-brand hover:text-brand-700 font-medium"
                  >
                    Learn More →
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Commented out disabled highlights */}
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

