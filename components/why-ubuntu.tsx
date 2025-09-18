"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Zap, Wrench, Users, TrendingUp, Heart } from "lucide-react";

export function WhyUbuntu() {
  const reasons = [
    {
      icon: TrendingUp,
      title: "Proven track record of innovation in healthcare",
      description: "Leading the digital transformation of healthcare in Tanzania with cutting-edge solutions."
    },
    {
      icon: Zap,
      title: "Integrated ecosystem (Energy + Equipment + Engagement)",
      description: "All your healthcare needs in one comprehensive platform that works seamlessly together."
    },
    {
      icon: Users,
      title: "Trusted by facilities across Tanzania",
      description: "Join the growing network of healthcare facilities that rely on our solutions daily."
    },
    {
      icon: Wrench,
      title: "Scalable solutions for your healthcare facility",
      description: "From small clinics to large hospitals, our solutions grow with your needs."
    },
    {
      icon: Heart,
      title: "Focused on impact + sustainability",
      description: "Committed to improving healthcare outcomes while building a sustainable future."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-ink mb-4">
            Why Ubuntu AfyaLink?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes us the trusted partner for healthcare facilities across Tanzania
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <Card key={index} className="card-rounded shadow-subtle hover:shadow-xl transition-shadow border-l-4 border-l-brand">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-brand/10 rounded-lg flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-brand" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-ink mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
