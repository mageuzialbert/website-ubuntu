import { PageHeader } from "@/components/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TeamMemberImage } from "@/components/team-member-image";
import Image from "next/image";
import {
  Target,
  Eye,
  Linkedin,
  Users2,
  TrendingUp,
  Hand,
  Zap,
} from "lucide-react";
import teamData from "@/content/team.json";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Redefining Healthcare Efficiency in Africa."
        description="Ubuntu AfyaLink was founded with one mission: to empower primary health facilities with reliable energy, resilient equipment, and smarter patient engagement systems, because every patient deserves quality care, every time."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission, Vision, Values */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            <Card className="card-rounded shadow-subtle">
              <CardHeader>
                <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-brand" />
                </div>
                <CardTitle className="text-xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  To solve complex healthcare delivery problems with simple,
                  affordable tech + human-powered logistics.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-rounded shadow-subtle">
              <CardHeader>
                <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-brand" />
                </div>
                <CardTitle className="text-xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Born from rural Tanzania, founded by experts in medicine,
                  public health, and finance. We&apos;ve seen the pain of
                  under-equipped clinics — and we&apos;re building the tools to
                  fix them.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Who We Are */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold font-heading text-ink mb-8 text-center">
              Our Story
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 mb-6">
                Born in Tanzania, Built for Africa.
Ubuntu AfyaLink began with a simple observation from our own lived experince, thousands of clinics across Tanzania struggle daily with unreliable power, broken biomedical equipment, and inefficient patient management. The consequences are severe - vaccines spoil, patients are turned away, and healthcare workers are overwhelmed.
We decided to change that.

              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our name &quot;Ubuntu&quot; reflects our belief in the
                interconnectedness of all people and our commitment to
                community-centered solutions. &quot;AfyaLink&quot; represents
                our mission to connect all aspects of healthcare delivery
                through technology.
              </p>
              <p className="text-lg text-gray-600">
                Founded by a team of young innovators passionate about health and technology, Ubuntu AfyaLink combines clean energy, smart maintenance, and digital engagement into one ecosystem. From powering primary health facilities to ensuring life-saving machines work when they’re needed most, we’re building resilience into healthcare, one clinic at a time.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold font-heading text-ink mb-4 text-center">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 text-center mb-8">
              Founded by medics, engineers, and finance experts
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamData.map((member, index) => (
                <Card
                  key={index}
                  className="card-rounded shadow-subtle text-center"
                >
                  <CardHeader>
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                      <TeamMemberImage
                        src={member.photo}
                        alt={`${member.name} - ${member.role}`}
                        className="w-full h-full"
                      />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-brand font-medium">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-16 bg-gradient-to-r from-brand/5 to-accent/5 py-16 px-8 rounded-2xl">
            <h2 className="text-3xl font-bold font-heading text-ink mb-12 text-center">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Ubuntu */}
              <Card className="card-rounded shadow-subtle bg-white">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users2 className="h-8 w-8 text-brand" />
                  </div>
                  <CardTitle className="text-xl text-ink">Ubuntu</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center">
                    We are because others are. We lead with compassion,
                    community, inclusivity, and collaboration.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Kaizen */}
              <Card className="card-rounded shadow-subtle bg-white">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-brand" />
                  </div>
                  <CardTitle className="text-xl text-ink">Kaizen</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center">
                    We believe in continuous improvement, however small.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Radical Ownership */}
              <Card className="card-rounded shadow-subtle bg-white">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Hand className="h-8 w-8 text-brand" />
                  </div>
                  <CardTitle className="text-xl text-ink">
                    Radical Ownership
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center">
                    Everyone is a leader. Own your outcomes.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Experiment Boldly */}
              <Card className="card-rounded shadow-subtle bg-white">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-brand" />
                  </div>
                  <CardTitle className="text-xl text-ink">
                    Experiment Boldly
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center">
                    Innovation is our duty. We try, we fail, we learn, we rise.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Our Impact */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold font-heading text-ink mb-12 text-center">
              Our Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="card-rounded shadow-subtle text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-semibold text-ink mb-2">6 Clinics Powered</h3>
                  <p className="text-gray-600">
                    with GreenPower+ clean energy systems up to date.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-rounded shadow-subtle text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">🌍</div>
                  <h3 className="text-xl font-semibold text-ink mb-2">5,000+ Patients Reached</h3>
                  <p className="text-gray-600">
                    through improved services.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-rounded shadow-subtle text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">💡</div>
                  <h3 className="text-xl font-semibold text-ink mb-2">20+ Tons CO₂ Reduced</h3>
                  <p className="text-gray-600">
                    cutting reliance on diesel generators.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-rounded shadow-subtle text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">👩‍🔧</div>
                  <h3 className="text-xl font-semibold text-ink mb-2">10+ Technicians Empowered</h3>
                  <p className="text-gray-600">
                    including women breaking barriers in STEM.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-rounded shadow-subtle text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">🏥</div>
                  <h3 className="text-xl font-semibold text-ink mb-2">95% Equipment Uptime</h3>
                  <p className="text-gray-600">
                    achieved with MedFix System.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Why Us? */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold font-heading text-ink mb-12 text-center">
              Why Us?
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="card-rounded shadow-subtle">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-brand/10 rounded-lg">
                      <Zap className="h-6 w-6 text-brand" />
                    </div>
                    Integrated Ecosystem
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Energy + Maintenance + Engagement in one platform.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-rounded shadow-subtle">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-brand/10 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-brand" />
                    </div>
                    Data + Human Stories
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We combine analytics (ROI, savings, uptime) with real impact stories (lives saved, technicians trained).
                  </p>
                </CardContent>
              </Card>

              <Card className="card-rounded shadow-subtle">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-brand/10 rounded-lg">
                      <Users2 className="h-6 w-6 text-brand" />
                    </div>
                    Scalable Model
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    From small clinics to large hospitals, our pay-as-you-go and rent-to-own systems grow with need.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-rounded shadow-subtle">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-brand/10 rounded-lg">
                      <Hand className="h-6 w-6 text-brand" />
                    </div>
                    Built in Africa, for Africa
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Local insight, local talent, global ambition.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Backed By */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold font-heading text-ink mb-8 text-center">
              Backed By
            </h2>
            <div className="flex justify-center">
              <div className="overflow-hidden w-full max-w-3xl">
                <div className="flex space-x-12 justify-center">
                  <div className="bg-gray-50 p-6 rounded-xl shadow-sm flex items-center justify-center min-w-[250px]">
                    <Image
                      src="/logos/undp.png"
                      alt="UNDP Logo"
                      width={200}
                      height={100}
                      className="opacity-90"
                    />
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl shadow-sm flex items-center justify-center min-w-[250px]">
                    <Image
                      src="/logos/ue.png"
                      alt="UE Logo"
                      width={200}
                      height={100}
                      className="opacity-90"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-brand/5 to-accent/5 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold font-heading text-ink mb-4">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Be part of the healthcare transformation in Tanzania. Whether
              you&apos;re a healthcare professional, technician, or technology
              enthusiast, there&apos;s a place for you in our mission.
            </p>
            <Button
              size="lg"
              className="bg-brand hover:bg-brand-700 text-white"
              asChild
            >
              <a href="/join">Join Our Team</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
