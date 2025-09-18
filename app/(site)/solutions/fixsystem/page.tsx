import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { 
  Clock, 
  Shield, 
  MessageCircle, 
  Brain, 
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  BarChart3,
  Users,
  Zap
} from "lucide-react";

export default function UbuntuMedFixPage() {
  return (
    <>
      <PageHeader
        title="Ubuntu MedFix Smart Biomedical Equipment Maintenance"
        description="Fix Faster. Save Lives"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
          { label: "Ubuntu MedFix" }
        ]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-brand/10 text-brand">Smart Maintenance Solution</Badge>
            
            <p className="text-2xl font-semibold text-brand mb-6">
              Fix Faster. Save Lives
            </p>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Keep your healthcare equipment running reliably, affordably, and without downtime.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-4">
              Ubuntu MedFix System by Ubuntu AfyaLink is a subscription-based preventive and repair service designed for hospitals, clinics, and laboratories. We ensure that your vital medical equipment stays operational, safe, and efficient, so you can focus on what matters most - saving lives.
            </p>
          </div>

          {/* The Problem */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold font-heading text-ink mb-8 text-center">
              The Problem
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              Across Africa, 40–60% of medical equipment is non-functional due to:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="card-rounded shadow-subtle border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-red-100 rounded-lg">
                      <AlertTriangle className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="font-semibold text-ink">Lack of Preventive Maintenance</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Equipment breaks down due to lack of regular maintenance schedules
                  </p>
                </CardContent>
              </Card>

              <Card className="card-rounded shadow-subtle border-l-4 border-l-orange-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Clock className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="font-semibold text-ink">Delayed Repairs</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Lack of spare parts and delayed repair services cause extended downtime
                  </p>
                </CardContent>
              </Card>

              <Card className="card-rounded shadow-subtle border-l-4 border-l-yellow-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <BarChart3 className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h3 className="font-semibold text-ink">No Performance Tracking</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    No tracking of performance issues leads to unexpected failures
                  </p>
                </CardContent>
              </Card>

              <Card className="card-rounded shadow-subtle border-l-4 border-l-purple-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-ink">Costly Emergency Breakdowns</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Emergency repairs cost significantly more than preventive maintenance
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <p className="text-lg text-gray-700 font-medium">
                This leads to service delays, patient risks, and higher costs.
              </p>
            </div>
          </div>

          {/* The Ubuntu BioFix Solution */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold font-heading text-ink mb-8 text-center">
              Ubuntu MedFix System
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="card-rounded shadow-subtle">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-brand/10 rounded-lg">
                      <Shield className="h-6 w-6 text-brand" />
                    </div>
                    <h3 className="font-semibold text-ink">Preventive Maintenance Plans</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Scheduled checks to extend equipment lifespan
                  </p>
                </CardContent>
              </Card>

              <Card className="card-rounded shadow-subtle">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-brand/10 rounded-lg">
                      <Zap className="h-6 w-6 text-brand" />
                    </div>
                    <h3 className="font-semibold text-ink">Fast Repairs</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    On-demand repair services by certified biomedical technicians
                  </p>
                </CardContent>
              </Card>

              <Card className="card-rounded shadow-subtle">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-brand/10 rounded-lg">
                      <MessageCircle className="h-6 w-6 text-brand" />
                    </div>
                    <h3 className="font-semibold text-ink">Smart Booking System</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    WhatsApp & Web widget integration for instant service requests
                  </p>
                </CardContent>
              </Card>

              <Card className="card-rounded shadow-subtle">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-brand/10 rounded-lg">
                      <Brain className="h-6 w-6 text-brand" />
                    </div>
                    <h3 className="font-semibold text-ink">AI-Powered Insights</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Analytics to predict failures before they happen
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-brand hover:bg-brand-700 text-white">
                <Link href="/contact">
                  Subscribe Now – First Month Free
                </Link>
              </Button>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold font-heading text-ink mb-8 text-center">
              How It Works
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-brand">1</span>
                </div>
                <h3 className="font-semibold text-ink mb-2">Subscribe</h3>
                <p className="text-gray-600 text-sm">
                  Pick a package that matches your facility size
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-brand">2</span>
                </div>
                <h3 className="font-semibold text-ink mb-2">Assessment</h3>
                <p className="text-gray-600 text-sm">
                  We evaluate your equipment and design a maintenance plan
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-brand">3</span>
                </div>
                <h3 className="font-semibold text-ink mb-2">Preventive Service</h3>
                <p className="text-gray-600 text-sm">
                  Regular visits, updates, and replacements before breakdowns
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-brand">4</span>
                </div>
                <h3 className="font-semibold text-ink mb-2">On-Demand Fixes</h3>
                <p className="text-gray-600 text-sm">
                  Urgent repairs booked via app/WhatsApp in minutes
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-brand">5</span>
                </div>
                <h3 className="font-semibold text-ink mb-2">Performance Reports</h3>
                <p className="text-gray-600 text-sm">
                  AI dashboard with cost savings, uptime, and efficiency scores
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Ubuntu MedFix */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold font-heading text-ink mb-8 text-center">
              Why Choose Ubuntu MedFix?
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="card-rounded shadow-subtle">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-brand/10 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-brand" />
                    </div>
                    Cost Effective
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Payment management and transparent pricing
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">Backed by biomedical engineers + healthcare experts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">Easy booking via WhatsApp & web system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">Transparent reports & AI-driven insights</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-rounded shadow-subtle">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-brand/10 rounded-lg">
                      <Users className="h-6 w-6 text-brand" />
                    </div>
                    Expert Team
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Certified biomedical technicians and healthcare experts
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">Certified biomedical engineers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">Healthcare industry experts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">Continuous training and certification</span>
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
                    Innovation Leader
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    First in Tanzania to combine maintenance + feedback in one solution
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 italic">
                      &quot;We cut equipment downtime by 65% and reduced emergency repair costs thanks to Ubuntu FixSystem.&quot; - Mtera Hospital Director, Tanga
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Get Started Today */}
          <div className="text-center">
            <h2 className="text-3xl font-bold font-heading text-ink mb-6">
              Get Started Today
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Don&apos;t wait until your equipment fails. Subscribe to Ubuntu BioFixSystem today and keep your facility running at peak performance.
            </p>
            
            <Button size="lg" className="bg-brand hover:bg-brand-700 text-white">
              <Link href="/contact">
              Contact Us Now
            </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}