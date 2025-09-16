import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Wrench, 
  Truck, 
  Users, 
  ArrowRight,
  CheckCircle,
  MapPin,
  Clock
} from "lucide-react";

export default function JoinPage() {
  return (
    <>
      <PageHeader
        title="Join Our Network"
        description="Be part of the healthcare transformation in Tanzania"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Join Us" }
        ]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-heading text-ink mb-6">
              Choose Your Path
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a healthcare facility, manufacturer, or biomedical technician,
              there&apos;s a place for you in our mission to transform healthcare in Tanzania.
            </p>
          </div>

          {/* Role Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Health Facilities */}
            <Card className="card-rounded shadow-subtle hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-brand" />
                </div>
                <CardTitle className="text-2xl">Health Facilities</CardTitle>
                <CardDescription className="text-lg">
                  Subscribe to our comprehensive healthcare solutions for your facility
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-brand mt-0.5" />
                    <span className="text-gray-700">Green energy solutions with TZS 2.1M+ monthly savings</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-brand mt-0.5" />
                    <span className="text-gray-700">Preventive maintenance reducing downtime by 75%</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-brand mt-0.5" />
                    <span className="text-gray-700">Patient feedback management system</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-brand mt-0.5" />
                    <span className="text-gray-700">Specialist scheduling and appointment management</span>
                  </div>
                </div>
                <Button className="w-full bg-brand hover:bg-brand-700 text-white" asChild>
                  <a href="/contact" className="flex items-center justify-center gap-2">
                    Subscribe Now
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Partners */}
            <Card className="card-rounded shadow-subtle hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mb-4">
                  <Truck className="h-8 w-8 text-brand" />
                </div>
                <CardTitle className="text-2xl">Partners</CardTitle>
                <CardDescription className="text-lg">
                  Join our network as a solar infrastructure or medical device manufacturer
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-brand mt-0.5" />
                    <span className="text-gray-700">Access to healthcare facilities network</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-brand mt-0.5" />
                    <span className="text-gray-700">Guaranteed client base and steady demand</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-brand mt-0.5" />
                    <span className="text-gray-700">Marketing support and brand visibility</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-brand mt-0.5" />
                    <span className="text-gray-700">Streamlined logistics and distribution</span>
                  </div>
                </div>
                <Button className="w-full bg-brand hover:bg-brand-700 text-white" asChild>
                  <a href="/contact" className="flex items-center justify-center gap-2">
                    Partner With Us
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Biomedical Technicians */}
            <Card className="card-rounded shadow-subtle hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mb-4">
                  <Wrench className="h-8 w-8 text-brand" />
                </div>
                <CardTitle className="text-2xl">Biomedical Technicians</CardTitle>
                <CardDescription className="text-lg">
                  Join our certified network of medical equipment repair specialists
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-brand mt-0.5" />
                    <span className="text-gray-700">Competitive compensation packages</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-brand mt-0.5" />
                    <span className="text-gray-700">Professional training and certification</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-brand mt-0.5" />
                    <span className="text-gray-700">Flexible work schedules</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-brand mt-0.5" />
                    <span className="text-gray-700">Latest tools and equipment</span>
                  </div>
                </div>
                <Button className="w-full bg-brand hover:bg-brand-700 text-white" asChild>
                  <a href="/contact" className="flex items-center justify-center gap-2">
                    Apply as Technician
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Requirements */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold font-heading text-ink mb-8 text-center">
              General Requirements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center card-rounded shadow-subtle">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Based in Tanzania with ability to travel to assigned regions
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center card-rounded shadow-subtle">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Availability</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Flexible schedule with some weekend and emergency availability
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center card-rounded shadow-subtle">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>Communication</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Fluent in Swahili and English with good communication skills
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold font-heading text-ink mb-8 text-center">
              Why Join Ubuntu AfyaLink?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink mb-2">Make a Real Impact</h3>
                    <p className="text-gray-600">
                      Be part of a mission that&apos;s improving healthcare access and saving lives across Tanzania
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink mb-2">Professional Growth</h3>
                    <p className="text-gray-600">
                      Access to training, certification programs, and career advancement opportunities
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink mb-2">Competitive Compensation</h3>
                    <p className="text-gray-600">
                      Fair pay, performance bonuses, and comprehensive benefits package
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink mb-2">Flexible Work</h3>
                    <p className="text-gray-600">
                      Work schedules that fit your lifestyle with remote and on-site options
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink mb-2">Technology Support</h3>
                    <p className="text-gray-600">
                      Access to latest tools, equipment, and technology to do your job effectively
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink mb-2">Community</h3>
                    <p className="text-gray-600">
                      Join a supportive community of professionals working towards a common goal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-brand/5 to-accent/5 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold font-heading text-ink mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our growing network of healthcare professionals and be part of the transformation 
              happening across Tanzania.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-brand hover:bg-brand-700 text-white" asChild>
                <a href="/contact" className="flex items-center gap-2">
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-brand text-brand hover:bg-brand hover:text-white" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

