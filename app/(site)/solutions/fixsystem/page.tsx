import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Shield, Wrench, MessageCircle } from "lucide-react";

export default function FixSystemPage() {
  return (
    <>
      <PageHeader
        title="Ubuntu FixSystem"
        description="Preventive maintenance subscriptions, repair-on-demand, and certified national network for medical equipment"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
          { label: "FixSystem" }
        ]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Problem Statement */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold font-heading text-ink mb-6">
              The Problem: Equipment Downtime Costs Lives
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  When medical equipment breaks down, it&apos;s not just an inconvenience — it&apos;s a matter of life and death. 
                  Healthcare facilities in Tanzania face significant challenges with equipment maintenance, leading to:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">Lost revenue from reduced patient capacity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">Delayed or cancelled critical procedures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">High emergency repair costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">Lack of certified technicians</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-500 mb-2">72%</div>
                  <p className="text-gray-600">of facilities report equipment downtime affecting patient care</p>
                </div>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold font-heading text-ink mb-8 text-center">
              Our Comprehensive Solution
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="card-rounded shadow-subtle">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-brand" />
                  </div>
                  <CardTitle className="text-lg">Preventive Maintenance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Regular equipment checks and maintenance to prevent breakdowns before they happen
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="card-rounded shadow-subtle">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                    <Wrench className="h-6 w-6 text-brand" />
                  </div>
                  <CardTitle className="text-lg">Repair-on-Demand</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    24/7 emergency repair services with certified technicians across Tanzania
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="card-rounded shadow-subtle">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-brand" />
                  </div>
                  <CardTitle className="text-lg">Discounted Parts</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Access to genuine spare parts at discounted rates through our network
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="card-rounded shadow-subtle">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-brand" />
                  </div>
                  <CardTitle className="text-lg">Certified Network</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Nationwide network of certified technicians and service centers
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Unique Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold font-heading text-ink mb-8 text-center">
              What Makes Us Different
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-ink mb-4">Book via WhatsApp</h3>
                <p className="text-gray-600 mb-6">
                  No need for complex booking systems. Simply send us a WhatsApp message with your equipment details 
                  and we&apos;ll dispatch a technician immediately.
                </p>
                <h3 className="text-2xl font-semibold text-ink mb-4">Track Status Online</h3>
                <p className="text-gray-600">
                  Monitor repair progress in real-time through our online dashboard. Get updates on technician 
                  arrival, repair status, and completion estimates.
                </p>
              </div>
              <div className="bg-gradient-to-br from-brand/10 to-accent/10 p-8 rounded-2xl">
                <div className="text-center">
                  <MessageCircle className="h-16 w-16 text-brand mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-ink mb-2">WhatsApp Integration</h4>
                  <p className="text-gray-600">
                    Book repairs, track status, and communicate with technicians all through WhatsApp
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold font-heading text-ink mb-4">
              Ready to Transform Your Equipment Maintenance?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of healthcare facilities already using Ubuntu FixSystem to keep their equipment running smoothly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-brand hover:bg-brand-700 text-white">
                Subscribe to Maintenance Plan
              </Button>
              <Button size="lg" variant="outline" className="border-brand text-brand hover:bg-brand hover:text-white" asChild>
                <a href="https://wa.me/255656721324" target="_blank" rel="noopener noreferrer">
                  Book via WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

