import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Zap, 
  Leaf, 
  Users, 
  TrendingUp 
} from "lucide-react";
import impactData from "@/content/impact.json";

export default function ImpactPage() {
  return (
    <>
      <PageHeader
  title="Our Impact"
  description="Measuring the positive change we&apos;re creating across Tanzanian healthcare"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Impact" }
        ]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Key Metrics */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold font-heading text-ink mb-8 text-center">
              Key Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactData.metrics.map((metric, index) => (
                <Card key={index} className="card-rounded shadow-subtle text-center">
                  <CardHeader>
                    <div className="text-4xl font-bold text-brand mb-2">
                      {metric.value}
                    </div>
                    <CardTitle className="text-lg">{metric.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{metric.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Case Studies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold font-heading text-ink mb-8 text-center">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="card-rounded shadow-subtle">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-brand" />
                    </div>
                    <div>
                      <CardTitle>MediKea Clinic</CardTitle>
                      <CardDescription>Dar es Salaam</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    &quot;Since implementing Ubuntu FixSystem, our equipment downtime has reduced by 75% and 
                    maintenance costs have decreased by 40%, saving us TZS 1.8M monthly. We can now serve 30% more patients daily.&quot;
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">75% less downtime</Badge>
                    <Badge variant="secondary">40% cost reduction</Badge>
                    <Badge variant="secondary">30% more patients</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-rounded shadow-subtle">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center">
                      <Zap className="h-6 w-6 text-brand" />
                    </div>
                    <div>
                      <CardTitle>Arafa Majumbasita H/C</CardTitle>
                      <CardDescription>Dar es Salaam</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    &quot;GreenPower+ 2.0 has transformed our energy infrastructure. We&apos;ve reduced our energy 
                    costs by 60%, saving TZS 3.2M monthly, and achieved 100% uptime for critical equipment.&quot;
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">60% energy savings</Badge>
                    <Badge variant="secondary">100% uptime</Badge>
                    <Badge variant="secondary">Carbon neutral</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* ESG Impact */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold font-heading text-ink mb-8 text-center">
              Environmental, Social & Governance Impact
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="card-rounded shadow-subtle">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Climate Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Our renewable energy solutions have prevented over 500 tons of CO2 emissions 
                    and reduced diesel consumption by 80% across partner facilities.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 500+ tons CO2 prevented</li>
                    <li>• 80% diesel reduction</li>
                    <li>• 100% renewable energy</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-rounded shadow-subtle">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Social Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    We&apos;ve created 150+ local jobs and trained 200+ technicians, while improving 
                    healthcare access for over 50,000 patients across Tanzania.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 150+ jobs created</li>
                    <li>• 200+ technicians trained</li>
                    <li>• 50,000+ patients served</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-rounded shadow-subtle">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Governance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    We maintain the highest standards of transparency, data security, and ethical 
                    business practices across all our operations and partnerships.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 100% data security compliance</li>
                    <li>• Transparent reporting</li>
                    <li>• Ethical partnerships</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Future Goals */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold font-heading text-ink mb-8 text-center">
              Our 2024 Goals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="card-rounded shadow-subtle">
                <CardHeader>
                  <CardTitle className="text-xl">Scale Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-brand rounded-full mt-2"></div>
                      <span className="text-gray-700">Onboard 50+ healthcare facilities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-brand rounded-full mt-2"></div>
                      <span className="text-gray-700">Expand to 5 new regions in Tanzania</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-brand rounded-full mt-2"></div>
                      <span className="text-gray-700">Train 500+ local technicians</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-brand rounded-full mt-2"></div>
                      <span className="text-gray-700">Prevent 1,000+ tons of CO2 emissions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-rounded shadow-subtle">
                <CardHeader>
                  <CardTitle className="text-xl">Innovation Goals</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-brand rounded-full mt-2"></div>
                      <span className="text-gray-700">Launch MedXpress delivery network</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-brand rounded-full mt-2"></div>
                      <span className="text-gray-700">Release AfyaLink mobile app</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-brand rounded-full mt-2"></div>
                      <span className="text-gray-700">Develop AI-powered diagnostics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-brand rounded-full mt-2"></div>
                      <span className="text-gray-700">Establish regional partnerships</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-brand/5 to-accent/5 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold font-heading text-ink mb-4">
              Be Part of Our Impact
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join us in transforming healthcare delivery across Tanzania. Together, we can create 
              a healthier, more sustainable future for all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-brand hover:bg-brand-700 text-white" asChild>
                <a href="/join">Join Our Mission</a>
              </Button>
              <Button size="lg" variant="outline" className="border-brand text-brand hover:bg-brand hover:text-white" asChild>
                <a href="/contact">Partner With Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

