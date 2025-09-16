"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Ubuntu AfyaLink"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-brand transition-colors">
              Home
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1">
                  Solutions
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/solutions/fixsystem">FixSystem</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/solutions/greenpower">GreenPower+</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/solutions/booking-feedback">Booking & Feedback</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/about" className="text-gray-700 hover:text-brand transition-colors">
              About
            </Link>
            <Link href="/impact" className="text-gray-700 hover:text-brand transition-colors">
              Impact
            </Link>
            <Link href="/join" className="text-gray-700 hover:text-brand transition-colors">
              Join Us
            </Link>
            {/* <Link href="/resources" className="text-gray-700 hover:text-brand transition-colors">
              Resources
            </Link> */}
            <Link href="/contact" className="text-gray-700 hover:text-brand transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button asChild className="bg-brand hover:bg-brand-700 text-white">
              <Link href="/contact">Register as a Facility</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-brand"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/solutions/fixsystem"
                className="block px-3 py-2 text-gray-700 hover:text-brand"
                onClick={() => setIsOpen(false)}
              >
                FixSystem
              </Link>
              <Link
                href="/solutions/greenpower"
                className="block px-3 py-2 text-gray-700 hover:text-brand"
                onClick={() => setIsOpen(false)}
              >
                GreenPower+
              </Link>
              <Link
                href="/solutions/booking-feedback"
                className="block px-3 py-2 text-gray-700 hover:text-brand"
                onClick={() => setIsOpen(false)}
              >
                Booking & Feedback
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-brand"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/impact"
                className="block px-3 py-2 text-gray-700 hover:text-brand"
                onClick={() => setIsOpen(false)}
              >
                Impact
              </Link>
              <Link
                href="/join"
                className="block px-3 py-2 text-gray-700 hover:text-brand"
                onClick={() => setIsOpen(false)}
              >
                Join Us
              </Link>
              {/* <Link
                href="/resources"
                className="block px-3 py-2 text-gray-700 hover:text-brand"
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link> */}
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-brand"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button asChild className="w-full bg-brand hover:bg-brand-700 text-white">
                  <Link href="/contact">Register as a Facility</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

