import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Smartphone, 
  CreditCard, 
  QrCode, 
  BarChart3, 
  Heart,
  MessageCircle,
  ArrowRight
} from "lucide-react";

export default function BookingFeedbackPage() {
  return (
    <>
      <PageHeader
        title="Booking & Feedback"
        description="Patient booking widget with payments, QR feedback, and AI analytics for healthcare facilities"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
          { label: "Booking & Feedback" }
        ]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-ink mb-6">
              Transform Patient Experience
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete patient booking and feedback solution that integrates seamlessly with your existing 
              healthcare facility operations
            </p>
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold font-heading text-ink mb-8 text-center">
              For Healthcare Facilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="card-rounded shadow-subtle">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-brand" />
                  </div>
                  <CardTitle className="text-lg">Booking Widget</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Embeddable booking widget for your website with real-time availability
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="card-rounded shadow-subtle">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                    <Smartphone className="h-6 w-6 text-brand" />
                  </div>
                  <CardTitle className="text-lg">WhatsApp Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Patients can book appointments directly through WhatsApp messaging
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="card-rounded shadow-subtle">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                    <CreditCard className="h-6 w-6 text-brand" />
                  </div>
                  <CardTitle className="text-lg">Payment Processing</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Secure payment collection with multiple payment methods and mobile money
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="card-rounded shadow-subtle">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                    <QrCode className="h-6 w-6 text-brand" />
                  </div>
                  <CardTitle className="text-lg">QR Feedback</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Easy feedback collection through QR codes placed throughout your facility
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold font-heading text-ink mb-6">
                  Boost Revenue & Patient Loyalty
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center mt-1">
                      <Heart className="h-3 w-3 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink">Improved Patient Experience</h3>
                      <p className="text-gray-600">
                        Streamlined booking process reduces wait times and patient frustration
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center mt-1">
                      <BarChart3 className="h-3 w-3 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink">AI-Powered Analytics</h3>
                      <p className="text-gray-600">
                        Get insights into patient preferences, peak hours, and service quality
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center mt-1">
                      <CreditCard className="h-3 w-3 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink">Increased Revenue</h3>
                      <p className="text-gray-600">
                        Reduce no-shows, optimize scheduling, and capture more patient payments
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-brand/10 to-accent/10 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand mb-2">40%</div>
                  <p className="text-gray-600 mb-4">Average increase in patient satisfaction</p>
                  <div className="text-4xl font-bold text-brand mb-2">25%</div>
                  <p className="text-gray-600">Reduction in no-show rates</p>
                </div>
              </div>
            </div>
          </div>

          {/* Integration Options */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold font-heading text-ink mb-8 text-center">
              Multiple Integration Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center card-rounded shadow-subtle">
                <CardHeader>
                  <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-brand" />
                  </div>
                  <CardTitle>Web Widget</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Easy-to-embed booking widget for your existing website
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center card-rounded shadow-subtle">
                <CardHeader>
                  <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-brand" />
                  </div>
                  <CardTitle>WhatsApp</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Native WhatsApp integration for seamless patient communication
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center card-rounded shadow-subtle">
                <CardHeader>
                  <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="h-8 w-8 text-brand" />
                  </div>
                  <CardTitle>Social Media</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Facebook and Instagram integration for social media bookings
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-brand/5 to-accent/5 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold font-heading text-ink mb-4">
              Ready to Improve Your Patient Experience?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Start your free trial today and see how our booking and feedback solution 
              can transform your healthcare facility
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-brand hover:bg-brand-700 text-white" asChild>
                <a href="#" className="flex items-center gap-2">
                  Try Free for 1 Month
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-brand text-brand hover:bg-brand hover:text-white" asChild>
                <a href="https://wa.me/255656721324" target="_blank" rel="noopener noreferrer">
                  Book Demo via WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

