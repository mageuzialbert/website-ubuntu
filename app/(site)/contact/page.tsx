import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-paper">
      <PageHeader
        title="Contact Us"
        description="Get in touch with our team to learn more about Ubuntu AfyaLink solutions"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-rounded shadow-subtle">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-ink mb-2">
                    First Name
                  </label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-ink mb-2">
                    Last Name
                  </label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="Enter your email address" />
              </div>
              
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-ink mb-2">
                  Organization
                </label>
                <Input id="organization" placeholder="Enter your organization name" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your healthcare facility and how we can help..."
                  rows={5}
                />
              </div>
              
              <Button className="w-full" disabled>
                Send Message
              </Button>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Or reach out directly via WhatsApp
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a 
                    href="https://wa.me/255123456789?text=Hello%20Ubuntu%20AfyaLink%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="card-rounded shadow-subtle">
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  We're here to help transform healthcare in Tanzania.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand/10 p-3 rounded-lg">
                    <MapPin className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink">Office</h3>
                    <p className="text-muted-foreground">
                      Dar es Salaam, Tanzania<br />
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-brand/10 p-3 rounded-lg">
                    <Phone className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink">Phone</h3>
                    <p className="text-muted-foreground">
                      +255 656 721 324
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-brand/10 p-3 rounded-lg">
                    <Mail className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink">Email</h3>
                    <p className="text-muted-foreground">
                      info@ubuntuafyalink.co.tz
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-rounded shadow-subtle">
              
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
