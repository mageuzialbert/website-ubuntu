import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Image
                src="/images/logo.png"
                alt="Ubuntu AfyaLink"
                width={150}
                height={50}
                className="h-10 w-auto mb-2"
              />
            </div>
            <p className="text-gray-300 mb-4">
              End-to-end solutions for healthcare facilities, pharmacies, and patients — all on one platform.
            </p>
            <p className="text-gray-400 text-sm">
              Based in Tanzania 🇹🇿
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/solutions/fixsystem" className="text-gray-300 hover:text-white transition-colors">
                  FixSystem
                </Link>
              </li>
              <li>
                <Link href="/solutions/greenpower" className="text-gray-300 hover:text-white transition-colors">
                  GreenPower+
                </Link>
              </li>
              <li>
                <Link href="/solutions/booking-feedback" className="text-gray-300 hover:text-white transition-colors">
                  Booking & Feedback
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources#faqs" className="text-gray-300 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/join" className="text-gray-300 hover:text-white transition-colors">
                  Join Our Team
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-gray-300 hover:text-white transition-colors">
                  Our Impact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-gray-400 text-sm">
                © {currentYear} Ubuntu AfyaLink. All rights reserved.
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button asChild variant="outline" size="sm" className="border-gray-600 text-white hover:bg-gray-700">
                <a
                  href="https://wa.me/255656721324"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

