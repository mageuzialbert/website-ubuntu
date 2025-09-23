"use client";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, MessageCircle, Loader2, CheckCircle, AlertCircle, Building2, Users, Wrench, ChevronDown, Upload, FileText } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";

type UserType = 'healthcare' | 'investor' | 'talent';

interface FormData {
  userType: UserType | '';
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organization: string;
  message: string;
  // Healthcare specific
  facilityType: string;
  location: string;
  solutionsInterested: string[];
  // Investor specific
  collaborationType: string;
  // Talent specific
  areaOfExpertise: string;
  yearsOfExperience: string;
  cvFile: File | null;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    userType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
    facilityType: '',
    location: '',
    solutionsInterested: [],
    collaborationType: '',
    areaOfExpertise: '',
    yearsOfExperience: '',
    cvFile: null
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const userTypes = [
    { value: 'healthcare', label: 'Healthcare Facility', icon: Building2, description: 'Dispensary, Health Center, Poly Clinic, Hospital, Pharmacy, Laboratory' },
    { value: 'investor', label: 'Investor / Partner', icon: Users, description: 'Investment, Strategic Partnership, Distribution' },
    { value: 'talent', label: 'Talent', icon: Wrench, description: 'Biomedical Technician / Solar Installer' }
  ];

  const facilityTypes = [
    'Dispensary', 'Health Center', 'Poly Clinic', 'Hospital', 'Pharmacy', 'Laboratory', 'Other'
  ];

  const solutions = [
    'AfyaSolar', 'MedFix System', 'AfyaBooking & Feedback', 'All'
  ];

  const collaborationTypes = [
    'Investment', 'Strategic Partnership', 'Distribution', 'Other'
  ];

  const expertiseAreas = [
    'Biomedical Technician', 'Solar Installer', 'Both'
  ];

  const calculateProgress = () => {
    const totalFields = getTotalFields();
    const filledFields = getFilledFields();
    return Math.round((filledFields / totalFields) * 100);
  };

  const getTotalFields = () => {
    const baseFields = 4; // userType, firstName, lastName, email
    switch (formData.userType) {
      case 'healthcare':
        return baseFields + 4; // phone, facilityType, location, solutionsInterested, message
      case 'investor':
        return baseFields + 3; // phone, organization, collaborationType, message
      case 'talent':
        return baseFields + 4; // phone, areaOfExpertise, yearsOfExperience, cvFile, message
      default:
        return baseFields;
    }
  };

  const getFilledFields = () => {
    let filled = 0;
    if (formData.userType) filled++;
    if (formData.firstName) filled++;
    if (formData.lastName) filled++;
    if (formData.email) filled++;
    
    switch (formData.userType) {
      case 'healthcare':
        if (formData.phone) filled++;
        if (formData.facilityType) filled++;
        if (formData.location) filled++;
        if (formData.solutionsInterested.length > 0) filled++;
        if (formData.message) filled++;
        break;
      case 'investor':
        if (formData.phone) filled++;
        if (formData.organization) filled++;
        if (formData.collaborationType) filled++;
        if (formData.message) filled++;
        break;
      case 'talent':
        if (formData.phone) filled++;
        if (formData.areaOfExpertise) filled++;
        if (formData.yearsOfExperience) filled++;
        if (formData.cvFile) filled++;
        if (formData.message) filled++;
        break;
    }
    return filled;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (solution: string) => {
    setFormData(prev => ({
      ...prev,
      solutionsInterested: prev.solutionsInterested.includes(solution)
        ? prev.solutionsInterested.filter(s => s !== solution)
        : [...prev.solutionsInterested, solution]
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      cvFile: file
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formDataToSend = new FormData();
      
      // Add all form fields
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'solutionsInterested') {
          formDataToSend.append(key, JSON.stringify(value));
        } else if (key === 'cvFile' && value) {
          formDataToSend.append(key, value as File);
        } else if (value) {
          formDataToSend.append(key, value as string);
        }
      });

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          userType: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          organization: '',
          message: '',
          facilityType: '',
          location: '',
          solutionsInterested: [],
          collaborationType: '',
          areaOfExpertise: '',
          yearsOfExperience: '',
          cvFile: null
        });
        toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');
      } else {
        const errorData = await response.json();
        setSubmitStatus('error');
        toast.error(errorData.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      toast.error('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSelectedUserType = () => {
    return userTypes.find(type => type.value === formData.userType);
  };

  const getCTAText = () => {
    switch (formData.userType) {
      case 'healthcare':
        return 'Get My Custom Solution';
      case 'investor':
        return 'Let\'s Collaborate';
      case 'talent':
        return 'Join Our Talent Pool';
      default:
        return 'Send Message';
    }
  };

  return (
    <div className="min-h-screen bg-paper">
      <PageHeader
        title="We'd love to hear from you!"
        description="Whether you're a healthcare facility seeking reliable solutions, an investor or partner exploring collaboration, or a talented professional looking to grow with us - this is your space to connect."
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
              <CardTitle>Connect with Ubuntu AfyaLink</CardTitle>
              <CardDescription>
                Tell us who you are and we'll show you the right form to get started.
              </CardDescription>
              
              {/* Progress Bar */}
              {formData.userType && (
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>Form Progress</span>
                    <span>{calculateProgress()}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-brand h-2 rounded-full transition-all duration-300 ease-out"
                      style={{ width: `${calculateProgress()}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* User Type Selection */}
                <div className="relative">
                  <label className="block text-sm font-medium text-ink mb-2">
                    I am a... *
                  </label>
                  <div className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setShowDropdown(!showDropdown)}
                      className="w-full flex items-center justify-between p-3 border border-gray-300 rounded-lg bg-white hover:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        {getSelectedUserType() ? (() => {
                          const selectedType = getSelectedUserType()!;
                          const IconComponent = selectedType.icon;
                          return (
                            <>
                              <IconComponent className="w-5 h-5 text-brand" />
                              <span className="text-ink">{selectedType.label}</span>
                            </>
                          );
                        })() : (
                          <span className="text-muted-foreground">Select your role...</span>
                        )}
                      </div>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {showDropdown && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                        {userTypes.map((type) => {
                          const IconComponent = type.icon;
                          return (
                            <button
                              key={type.value}
                              type="button"
                              onClick={() => {
                                setFormData(prev => ({ ...prev, userType: type.value as UserType }));
                                setShowDropdown(false);
                              }}
                              className="w-full flex items-start space-x-3 p-3 hover:bg-gray-50 text-left transition-colors"
                            >
                              <IconComponent className="w-5 h-5 text-brand mt-0.5" />
                              <div>
                                <div className="font-medium text-ink">{type.label}</div>
                                <div className="text-sm text-muted-foreground">{type.description}</div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>

                {/* Basic Information - Always Visible */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-ink mb-2">
                      First Name *
                    </label>
                    <Input 
                      id="firstName" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter your first name" 
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-ink mb-2">
                      Last Name *
                    </label>
                    <Input 
                      id="lastName" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter your last name" 
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                    Email Address *
                  </label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address" 
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-ink mb-2">
                    Phone Number {formData.userType === 'healthcare' ? '(WhatsApp enabled)' : ''} *
                  </label>
                  <Input 
                    id="phone" 
                    name="phone"
                    type="tel" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number" 
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Healthcare Facility Fields */}
                {formData.userType === 'healthcare' && (
                  <div className="space-y-4 animate-in slide-in-from-top-2 duration-300">
                    <div>
                      <label htmlFor="facilityType" className="block text-sm font-medium text-ink mb-2">
                        Facility Type *
                      </label>
                      <select
                        id="facilityType"
                        name="facilityType"
                        value={formData.facilityType}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-brand/20"
                      >
                        <option value="">Select facility type...</option>
                        {facilityTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-ink mb-2">
                        Organization Name *
                      </label>
                      <Input 
                        id="organization" 
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        placeholder="Enter your organization name" 
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-ink mb-2">
                        Location (Region + District) *
                      </label>
                      <Input 
                        id="location" 
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="e.g., Dar es Salaam, Kinondoni" 
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-ink mb-2">
                        Solutions Interested In *
                      </label>
                      <div className="space-y-2">
                        {solutions.map((solution) => (
                          <label key={solution} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={formData.solutionsInterested.includes(solution)}
                              onChange={() => handleCheckboxChange(solution)}
                              disabled={isSubmitting}
                              className="w-4 h-4 text-brand border-gray-300 rounded focus:ring-brand/20"
                            />
                            <span className="text-sm text-ink">{solution}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
                        Message
                      </label>
                      <Textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us how we can help your facility thrive..."
                        rows={4}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                )}

                {/* Investor/Partner Fields */}
                {formData.userType === 'investor' && (
                  <div className="space-y-4 animate-in slide-in-from-top-2 duration-300">
                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-ink mb-2">
                        Organization Name *
                      </label>
                      <Input 
                        id="organization" 
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        placeholder="Enter your organization name" 
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="collaborationType" className="block text-sm font-medium text-ink mb-2">
                        Collaboration Type *
                      </label>
                      <select
                        id="collaborationType"
                        name="collaborationType"
                        value={formData.collaborationType}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-brand/20"
                      >
                        <option value="">Select collaboration type...</option>
                        {collaborationTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
                        Message
                      </label>
                      <Textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us how you'd like to collaborate..."
                        rows={4}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                )}

                {/* Talent Fields */}
                {formData.userType === 'talent' && (
                  <div className="space-y-4 animate-in slide-in-from-top-2 duration-300">
                    <div>
                      <label htmlFor="areaOfExpertise" className="block text-sm font-medium text-ink mb-2">
                        Area of Expertise *
                      </label>
                      <select
                        id="areaOfExpertise"
                        name="areaOfExpertise"
                        value={formData.areaOfExpertise}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-brand/20"
                      >
                        <option value="">Select your expertise...</option>
                        {expertiseAreas.map((area) => (
                          <option key={area} value={area}>{area}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-ink mb-2">
                        Years of Experience *
                      </label>
                      <Input 
                        id="yearsOfExperience" 
                        name="yearsOfExperience"
                        type="number"
                        min="0"
                        value={formData.yearsOfExperience}
                        onChange={handleInputChange}
                        placeholder="Enter years of experience" 
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="cvFile" className="block text-sm font-medium text-ink mb-2">
                        Upload CV (PDF, max 5MB)
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          id="cvFile"
                          accept=".pdf"
                          onChange={handleFileChange}
                          disabled={isSubmitting}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <div className="flex items-center justify-center w-full p-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-brand transition-colors">
                          <div className="text-center">
                            <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                            <p className="text-sm text-muted-foreground">
                              {formData.cvFile ? formData.cvFile.name : 'Click to upload CV'}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">PDF only, max 5MB</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
                        Message
                      </label>
                      <Textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us why you'd like to join Ubuntu AfyaLink..."
                        rows={4}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                )}
                
                <Button 
                  type="submit" 
                  className="w-full bg-brand hover:bg-brand/90" 
                  disabled={isSubmitting || !formData.userType}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Message Sent!
                    </>
                  ) : submitStatus === 'error' ? (
                    <>
                      <AlertCircle className="w-4 h-4 mr-2" />
                      Try Again
                    </>
                  ) : (
                    getCTAText()
                  )}
                </Button>
              </form>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  We'll respond within 24 hours. Your details are safe with us.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a 
                    href="https://wa.me/255656721324?text=Hello%20Ubuntu%20AfyaLink%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Need quick help? Chat with us instantly!
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
                  We&apos;re here to help transform healthcare in Tanzania.
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
                      Magomeni Usalama, Chekanao Street, House No. 04, Dar es Salaam<br />
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
