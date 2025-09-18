import { PageHeader } from "@/components/page-header";

export default function PrivacyPage() {
  return (
    <>
      <PageHeader 
        title="Privacy Policy" 
        description="How we collect, use, and protect your information"
      />
      
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-500 mb-8">
              <strong>Last Updated:</strong> September 2025
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              Ubuntu AfyaLink ("Company", "we", "our", "us") values your trust. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our services, solutions, and website www.ubuntuafyalink.co.tz (the "Service").
            </p>
            
            <p className="text-lg text-gray-700 mb-12">
              By using our Service, you agree to the practices described in this policy.
            </p>

            <h2 className="text-2xl font-bold text-ink mb-6">1. Definitions</h2>
            <div className="space-y-4 mb-12">
              <div>
                <strong>Account:</strong> A unique profile created by you to access our Service or its features.
              </div>
              <div>
                <strong>Company:</strong> Ubuntu AfyaLink, registered in Tanzania.
              </div>
              <div>
                <strong>Cookies:</strong> Small text files stored on your device to improve browsing experience.
              </div>
              <div>
                <strong>Device:</strong> Any tool you use to access our Service (computer, tablet, phone).
              </div>
              <div>
                <strong>Personal Data:</strong> Information that identifies you as an individual (e.g. name, phone, email, NIDA/ID number).
              </div>
              <div>
                <strong>Service:</strong> Our website, applications, booking platform, and digital solutions.
              </div>
              <div>
                <strong>Usage Data:</strong> Automatically collected information (IP address, browser type, pages visited, etc.).
              </div>
              <div>
                <strong>You:</strong> The individual, clinic, hospital, or organization using our Service.
              </div>
            </div>

            <h2 className="text-2xl font-bold text-ink mb-6">2. Types of Data We Collect</h2>
            
            <h3 className="text-xl font-semibold text-ink mb-4">(a) Personal Data</h3>
            <p className="text-gray-700 mb-4">When you interact with us, we may collect:</p>
            <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Postal or physical address</li>
              <li>National ID/Passport (where required for contracts or compliance)</li>
              <li>Payment information (processed via secure third-party providers)</li>
            </ul>

            <h3 className="text-xl font-semibold text-ink mb-4">(b) Usage Data</h3>
            <p className="text-gray-700 mb-4">Automatically collected data includes:</p>
            <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
              <li>IP address, browser type, operating system</li>
              <li>Pages you visit on our website</li>
              <li>Date, time, and duration of visits</li>
              <li>Device identifiers and diagnostic data</li>
            </ul>

            <h3 className="text-xl font-semibold text-ink mb-4">(c) Cookies & Tracking</h3>
            <p className="text-gray-700 mb-4">We use Cookies to:</p>
            <ul className="list-disc list-inside space-y-2 mb-12 text-gray-700">
              <li>Keep you logged in securely</li>
              <li>Remember your preferences</li>
              <li>Analyze traffic and improve Service performance</li>
            </ul>

            <h2 className="text-2xl font-bold text-ink mb-6">3. How We Use Your Data</h2>
            <p className="text-gray-700 mb-4">We may use your information to:</p>
            <ul className="list-disc list-inside space-y-2 mb-12 text-gray-700">
              <li>Deliver and maintain our Services (AfyaSolar, MedFix System, AfyaBooking).</li>
              <li>Register and manage your Account.</li>
              <li>Process orders, payments, and contracts.</li>
              <li>Communicate with you (via email, SMS, WhatsApp, or app notifications).</li>
              <li>Share updates, promotions, or healthcare innovations (only if you opt-in).</li>
              <li>Monitor Service performance and prevent fraud.</li>
              <li>Comply with legal obligations in Tanzania and other applicable laws.</li>
            </ul>

            <h2 className="text-2xl font-bold text-ink mb-6">4. Data Sharing</h2>
            <p className="text-gray-700 mb-4">We do not sell your Personal Data. We may share it in these cases:</p>
            <ul className="list-disc list-inside space-y-2 mb-12 text-gray-700">
              <li><strong>With Service Providers:</strong> Vendors, technicians, or partners who help us deliver the Service.</li>
              <li><strong>Business Transfers:</strong> In case of merger, acquisition, or restructuring.</li>
              <li><strong>Legal Requirements:</strong> If required by law, regulation, or valid government request.</li>
              <li><strong>With Your Consent:</strong> For specific uses that you approve.</li>
            </ul>

            <h2 className="text-2xl font-bold text-ink mb-6">5. Data Retention</h2>
            <ul className="list-disc list-inside space-y-2 mb-12 text-gray-700">
              <li>Personal Data is kept only as long as needed for Service delivery, compliance, or legitimate business needs.</li>
              <li>Usage Data is usually retained for shorter periods (unless needed for security or improvements).</li>
            </ul>

            <h2 className="text-2xl font-bold text-ink mb-6">6. Data Security</h2>
            <p className="text-gray-700 mb-12">
              We use reasonable technical and organizational safeguards (encryption, secure servers, access controls) to protect your data. However, no system is 100% secure — so we encourage you to protect your login credentials.
            </p>

            <h2 className="text-2xl font-bold text-ink mb-6">7. Children's Privacy</h2>
            <p className="text-gray-700 mb-12">
              Our Service is not intended for children under 13. We do not knowingly collect data from children. If you believe a child has provided us information, please contact us to remove it.
            </p>

            <h2 className="text-2xl font-bold text-ink mb-6">8. International Transfers</h2>
            <p className="text-gray-700 mb-12">
              Although we operate in Tanzania, your information may be stored or processed in other countries by our partners or service providers. We take steps to ensure your data is protected according to this Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-ink mb-6">9. Your Rights</h2>
            <p className="text-gray-700 mb-4">You may request to:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
              <li>Access your Personal Data</li>
              <li>Correct or update your information</li>
              <li>Request deletion of your data (subject to legal obligations)</li>
              <li>Opt-out of promotional communications</li>
            </ul>
            <p className="text-gray-700 mb-12">
              To exercise your rights, contact us at <a href="mailto:info@ubuntuafyalink.co.tz" className="text-brand hover:text-brand-700">info@ubuntuafyalink.co.tz</a>.
            </p>

            <h2 className="text-2xl font-bold text-ink mb-6">10. Third-Party Links</h2>
            <p className="text-gray-700 mb-12">
              Our website may include links to other sites. We are not responsible for their content or privacy practices. Please review their policies before sharing information.
            </p>

            <h2 className="text-2xl font-bold text-ink mb-6">11. Changes to this Policy</h2>
            <p className="text-gray-700 mb-12">
              We may update this Privacy Policy from time to time. Updates will be posted on this page with a new "Last Updated" date.
            </p>

            <h2 className="text-2xl font-bold text-ink mb-6">12. Contact Us</h2>
            <p className="text-gray-700 mb-4">If you have questions or concerns about this Privacy Policy, please contact us:</p>
            <div className="space-y-2 text-gray-700">
              <div>📧 Email: <a href="mailto:info@ubuntuafyalink.co.tz" className="text-brand hover:text-brand-700">info@ubuntuafyalink.co.tz</a></div>
              <div>🌍 Website: <a href="https://www.ubuntuafyalink.co.tz" className="text-brand hover:text-brand-700">www.ubuntuafyalink.co.tz</a></div>
              <div>📞 Phone: <a href="tel:+255656721324" className="text-brand hover:text-brand-700">+255 656 721 324</a></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
