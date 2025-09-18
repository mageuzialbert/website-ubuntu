import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Sun, 
  Battery, 
  Brain, 
  DollarSign, 
  CheckCircle,
  ArrowRight,
  Shield,
  TrendingUp,
  Wrench,
  BarChart3,
  Lightbulb
} from "lucide-react";

export default function AfyaSolarPage() {
  return (
    <>
      <PageHeader
        title="AfyaSolar - Reliable Clean Energy for Health Facilities"
        description="Clean, Affordable, and Sustainable Energy Solutions for Primary Healthcare facilities in Tanzania."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
          { label: "AfyaSolar" }
        ]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-brand/10 text-brand">Clean Energy Solution</Badge>
            
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              AfyaSolar by Ubuntu AfyaLink provides customized solar energy systems designed to power primary health facilities, hospitals, and rural clinics. We help you cut costs, stay reliable, and ensure uninterrupted care for patients - even in off-grid communities.
            </p>
          </div>

          {/* The Reality on the Ground */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold font-heading text-ink mb-8 text-center">
              The Reality on the Ground
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              Healthcare facilities in Tanzania face critical energy challenges that directly impact patient care:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="card-rounded shadow-subtle border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-red-100 rounded-lg">
                      <Zap className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="font-semibold text-ink">Unreliable Power Grid</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Frequent power outages disrupt critical medical procedures and equipment operation
                  </p>
                </CardContent>
              </Card>

              <Card className="card-rounded shadow-subtle border-l-4 border-l-orange-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <DollarSign className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="font-semibold text-ink">High Diesel Costs</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Expensive backup generators consume 40-60% of facility energy budgets and cause CO2 emissions
                  </p>
                </CardContent>
              </Card>

              <Card className="card-rounded shadow-subtle border-l-4 border-l-yellow-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <Shield className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h3 className="font-semibold text-ink">Vaccine Storage Losses</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Temperature-sensitive vaccines and medicines spoil during power outages
                  </p>
                </CardContent>
              </Card>

              <Card className="card-rounded shadow-subtle border-l-4 border-l-purple-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-ink">Upfront Investment Barrier</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    High initial costs prevent facilities from adopting renewable energy solutions
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <p className="text-lg text-gray-700 font-medium">
                AfyaSolar solves this with a sustainable, affordable, and long-term energy model.
              </p>
            </div>
          </div>

          {/* Our AfyaSolar Solution */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold font-heading text-ink mb-8 text-center">
              Our AfyaSolar Solution
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card className="card-rounded shadow-subtle">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-brand/10 rounded-lg">
                      <Sun className="h-6 w-6 text-brand" />
                    </div>
                    <h3 className="font-semibold text-ink">Customized</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Designed, supplied, and installed to fit your facility&apos;s size and energy demand
                  </p>
                </CardContent>
              </Card>

              <Card className="card-rounded shadow-subtle">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-brand/10 rounded-lg">
                      <Battery className="h-6 w-6 text-brand" />
                    </div>
                    <h3 className="font-semibold text-ink">Reliable Solar Systems</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Ensures 24/7 power for critical equipment (fridges, labs, maternity wards)
                  </p>
                </CardContent>
              </Card>

              <Card className="card-rounded shadow-subtle">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-brand/10 rounded-lg">
                      <DollarSign className="h-6 w-6 text-brand" />
                    </div>
                    <h3 className="font-semibold text-ink">Lower Costs</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Save up to 40% compared to diesel and grid reliance
                  </p>
                </CardContent>
              </Card>

              <Card className="card-rounded shadow-subtle">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-brand/10 rounded-lg">
                      <BarChart3 className="h-6 w-6 text-brand" />
                    </div>
                    <h3 className="font-semibold text-ink">Smart Monitoring Software</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Real-time system tracking for performance and predictive maintenance
                  </p>
                </CardContent>
              </Card>

              <Card className="card-rounded shadow-subtle">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-brand/10 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-brand" />
                    </div>
                    <h3 className="font-semibold text-ink">Flexible Financing</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Options for pay-as-you-use, leasing, NO UPFRONT COSTS
                  </p>
                </CardContent>
              </Card>

              <Card className="card-rounded shadow-subtle">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-brand/10 rounded-lg">
                      <Lightbulb className="h-6 w-6 text-brand" />
                    </div>
                    <h3 className="font-semibold text-ink">Carbon Tracking</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Automated carbon credit generation and trading
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-brand hover:bg-brand-700 text-white">
                Book a Free Energy Assessment/Audit
              </Button>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold font-heading text-ink mb-8 text-center">
              How It Works
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-brand">1</span>
                </div>
                <h3 className="font-semibold text-ink mb-2">Assessment</h3>
                <p className="text-gray-600 text-sm">
                  We visit your facility, study your energy needs & costs
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-brand">2</span>
                </div>
                <h3 className="font-semibold text-ink mb-2">Design & Proposal</h3>
                <p className="text-gray-600 text-sm">
                  Tailored solar + battery storage plan
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-brand">3</span>
                </div>
                <h3 className="font-semibold text-ink mb-2">Installation</h3>
                <p className="text-gray-600 text-sm">
                  Quick, professional, and minimally disruptive
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-brand">4</span>
                </div>
                <h3 className="font-semibold text-ink mb-2">Monitoring & Maintenance</h3>
                <p className="text-gray-600 text-sm">
                  AI-powered dashboards + our Ubuntu Fix System for guaranteed uptime
                </p>
              </div>
            </div>
          </div>

          {/* Case Study */}
          <div className="mb-16">
            <Card className="card-rounded shadow-subtle bg-gradient-to-r from-brand/5 to-brand/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold font-heading text-ink mb-4 text-center">
                  Case Study
                </h2>
                <blockquote className="text-lg text-gray-700 text-center italic mb-6">
                  &quot;Mtera health center in Tanga reduced power costs by 40% while ensuring uninterrupted neonatal care with AfyaSolar.&quot;
                </blockquote>
                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Why Choose AfyaSolar */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold font-heading text-ink mb-8 text-center">
              Why Choose AfyaSolar?
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="card-rounded shadow-subtle">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-brand/10 rounded-lg">
                      <BarChart3 className="h-6 w-6 text-brand" />
                    </div>
                    Full Transparency
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    The Ubuntu software module consolidates all energy-related costs into a single, transparent bill that facilities can easily understand and budget for.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">Consolidated Billing: All energy costs (generation, storage, maintenance) in one monthly bill</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">Real-time Usage: Live dashboard showing energy consumption and costs by department</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">Predictive Analytics: AI-powered forecasting to help facilities plan and budget for energy costs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">Cost Optimization: Automated recommendations to reduce energy consumption and costs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-rounded shadow-subtle">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-brand/10 rounded-lg">
                      <Brain className="h-6 w-6 text-brand" />
                    </div>
                    Ubuntu Brain
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    AI-powered controller that optimizes energy usage and predicts maintenance needs
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 italic">
                      &quot;When power is stable, care is reliable. That&apos;s what GreenPower+ guarantees.&quot;
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Get Started */}
          <div className="text-center">
            <h2 className="text-3xl font-bold font-heading text-ink mb-6">
              Get Started With AfyaSolar
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Ready to power your facility with clean, reliable energy? Contact us today for a free energy audit and discover how AfyaSolar can save you money while powering patient care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-brand hover:bg-brand-700 text-white">
                Request Your Free Audit Now
              </Button>
              <div className="text-gray-500">or</div>
              <Button variant="outline" size="lg" className="flex items-center gap-2">
                <Wrench className="h-4 w-4" />
                Get a Maintenance Plan
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              Already powered? Keep your equipment safe with Ubuntu MedFix System
            </p>
          </div>
        </div>
      </section>
    </>
  );
}