import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Zap, 
  Sun, 
  Battery, 
  Brain, 
  Recycle, 
  Leaf, 
  DollarSign, 
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function GreenPowerPage() {
  return (
    <>
      <PageHeader
        title="Ubuntu GreenPower+ 2.0"
        description="Integrated Energy & Climate Resilience for Health"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
          { label: "GreenPower+" }
        ]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-brand/10 text-brand">Latest Version</Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-ink mb-6">
              Ubuntu GreenPower+ 2.0
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integrated Energy & Climate Resilience for Health — Complete end-to-end energy ecosystem 
              designed specifically for Tanzanian healthcare facilities
            </p>
          </div>

          {/* Main Content Accordion */}
          <div className="mb-16">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="problem">
                <AccordionTrigger className="text-xl font-semibold">
                  1. The Problem in Tanzania
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Healthcare facilities in Tanzania face critical energy challenges that directly impact patient care:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Zap className="h-5 w-5 text-red-500" />
                            Unreliable Power Grid
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">
                            Frequent power outages disrupt critical medical procedures and equipment operation
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <DollarSign className="h-5 w-5 text-red-500" />
                            High Diesel Costs
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">
                            Expensive backup generators consume 40-60% of facility energy budgets
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Sun className="h-5 w-5 text-red-500" />
                            Vaccine Storage Losses
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">
                            Temperature-sensitive vaccines and medicines spoil during power outages
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <DollarSign className="h-5 w-5 text-red-500" />
                            Upfront Investment Barrier
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">
                            High initial costs prevent facilities from adopting renewable energy solutions
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="model">
                <AccordionTrigger className="text-xl font-semibold">
                  2. Innovative Model: Localized King Energy Model
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6">
                    <p className="text-gray-600">
                      Our revolutionary approach combines community solar microgrids with smart billing and shared infrastructure:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <Card className="text-center">
                        <CardHeader>
                          <Sun className="h-12 w-12 text-brand mx-auto mb-4" />
                          <CardTitle>Community Solar</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">
                            Multi-facility solar installations serving 10-20 healthcare facilities per cluster
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="text-center">
                        <CardHeader>
                          <Battery className="h-12 w-12 text-brand mx-auto mb-4" />
                          <CardTitle>Smart Storage</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">
                            Intelligent battery systems with per-kWh billing and split-incentive solutions
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="text-center">
                        <CardHeader>
                          <Zap className="h-12 w-12 text-brand mx-auto mb-4" />
                          <CardTitle>Microgrids</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">
                            Localized energy networks that can operate independently from the national grid
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="optimization">
                <AccordionTrigger className="text-xl font-semibold">
                  3. Dynamic Energy Optimization (Localized Soly Features)
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Brain className="h-5 w-5 text-brand" />
                            Ubuntu Smart Contracts
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">
                            Dynamic tariff incentives based on time of day, energy demand, and grid stability
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Battery className="h-5 w-5 text-brand" />
                            Ubuntu Powercell®
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">
                            Modular battery systems that can be scaled up as facility needs grow
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Brain className="h-5 w-5 text-brand" />
                            Ubuntu Brain®
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">
                            AI-powered controller that optimizes energy usage and predicts maintenance needs
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Zap className="h-5 w-5 text-brand" />
                            Ubuntu VPP
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">
                            Virtual Power Plant that bundles clinics and sells unused capacity back to the grid
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="circular">
                <AccordionTrigger className="text-xl font-semibold">
                  4. Circular Economy & Recycling
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Our commitment to sustainability extends beyond energy generation:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Recycle className="h-5 w-5 text-brand" />
                            Local Refurbishment Units
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">
                            Local workshops that refurbish and upgrade existing equipment for energy efficiency
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Leaf className="h-5 w-5 text-brand" />
                            Zero-Waste Tracking
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">
                            Ubuntu Waste Tracker ensures all components are recycled or properly disposed of
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="carbon">
                <AccordionTrigger className="text-xl font-semibold">
                  5. AI-Powered Carbon Footprinting
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Advanced carbon tracking and ESG reporting capabilities:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-brand mt-0.5" />
                        <span className="text-gray-700">Product carbon tracking across the entire supply chain</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-brand mt-0.5" />
                        <span className="text-gray-700">Supplier Bill of Materials analysis for quick PCF calculation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-brand mt-0.5" />
                        <span className="text-gray-700">Actionable ESG data for procurement leverage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-brand mt-0.5" />
                        <span className="text-gray-700">Automated carbon credit generation and trading</span>
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="revenue">
                <AccordionTrigger className="text-xl font-semibold">
                  6. Revenue Model
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Flexible pricing designed to make renewable energy accessible:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <Card className="text-center">
                        <CardHeader>
                          <CardTitle className="text-2xl text-brand">TZS 375-500/kWh</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">Energy pricing (vs TZS 750+ for diesel)</p>
                        </CardContent>
                      </Card>
                      <Card className="text-center">
                        <CardHeader>
                          <CardTitle className="text-2xl text-brand">TZS 125,000-500,000/mo</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">Ubuntu Brain® & dashboard access</p>
                        </CardContent>
                      </Card>
                      <Card className="text-center">
                        <CardHeader>
                          <CardTitle className="text-2xl text-brand">TZS 375,000</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">Refurbished equipment kits</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="unique">
                <AccordionTrigger className="text-xl font-semibold">
                  7. Why Unique in Tanzania
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Ubuntu GreenPower+ 2.0 is the only end-to-end energy ecosystem designed specifically for 
                      Tanzanian healthcare facilities:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-brand mt-0.5" />
                        <span className="text-gray-700">Complete energy solution from generation to consumption</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-brand mt-0.5" />
                        <span className="text-gray-700">Localized technology adapted for Tanzanian conditions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-brand mt-0.5" />
                        <span className="text-gray-700">Community-based approach reducing individual facility costs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-brand mt-0.5" />
                        <span className="text-gray-700">Integrated with existing healthcare workflows</span>
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="onebill">
                <AccordionTrigger className="text-xl font-semibold">
                  🔋 OneBill™ Module
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-brand/10 to-accent/10 p-6 rounded-2xl">
                      <h3 className="text-2xl font-bold text-ink mb-2">One Bill. One Payment. Full Transparency.</h3>
                      <p className="text-gray-600">
                        The OneBill™ module consolidates all energy-related costs into a single, transparent bill 
                        that facilities can easily understand and budget for.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Consolidated Billing</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">
                            All energy costs (generation, storage, maintenance) in one monthly bill
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Real-time Usage</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">
                            Live dashboard showing energy consumption and costs by department
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Predictive Analytics</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">
                            AI-powered forecasting to help facilities plan and budget for energy costs
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Cost Optimization</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">
                            Automated recommendations to reduce energy consumption and costs
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-brand/5 to-accent/5 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold font-heading text-ink mb-4">
              Ready to Transform Your Energy Infrastructure?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get a comprehensive energy assessment for your healthcare facility and discover 
              how much you can save with Ubuntu GreenPower+ 2.0
            </p>
            <Button size="lg" className="bg-brand hover:bg-brand-700 text-white" asChild>
              <a href="#" className="flex items-center gap-2">
                Get Energy Assessment
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

