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
              With every facility powered, every machine maintained, and every patient engaged, Ubuntu AfyaLink is building the future of healthcare. Join us in making it happen.
            </p>
            <p className="text-gray-400 text-sm">
              Location: Magomeni Usalama, Chekanao Street, House No. 04, Dar es Salaam, 
               Email: info@ubuntuafyalink.co.tz | Phone: +255 656721324

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
                  Ubuntu MedFix
                </Link>
              </li>
              <li>
                <Link href="/solutions/greenpower" className="text-gray-300 hover:text-white transition-colors">
                  AfyaSolar
                </Link>
              </li>
              <li>
                <Link href="/solutions/booking-feedback" className="text-gray-300 hover:text-white transition-colors">
                  Ubuntu AfyaBooking
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect with Us */}
          <div>
            <h4 className="font-semibold mb-4">Connect with Us</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.linkedin.com/company/ubuntu-afyalink/?viewAsMember=true" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com/Ubuntu_Afyalink?t=i6VTkgsi8IZ4yueLcLwjkA&s=09" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Twitter/X
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/ubuntu_afyalink?igsh=MTZhNGh6eWZha2Jjdw==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Instagram
                </a>
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

