# Ubuntu AfyaLink

A production-ready Next.js 14 + TypeScript + Tailwind + shadcn/ui application for healthcare technology solutions in Tanzania.

<!-- Force deployment update -->

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS, and shadcn/ui
- **Responsive Design**: Mobile-first approach with beautiful, accessible UI
- **Healthcare Solutions**: Comprehensive platform for medical equipment maintenance, renewable energy, and patient booking
- **WhatsApp Integration**: Direct communication and booking through WhatsApp
- **SEO Optimized**: Proper meta tags, sitemap, and robots.txt
- **Performance**: Optimized images, lazy loading, and efficient caching

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter (body), Plus Jakarta Sans (headings)
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
ubuntu-afyalink/
├── app/
│   ├── (site)/                 # Main site pages
│   │   ├── page.tsx           # Home page
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── impact/            # Impact page
│   │   ├── join/              # Join us page
│   │   ├── resources/         # Resources hub
│   │   └── solutions/         # Solutions pages
│   │       ├── fixsystem/     # FixSystem solution
│   │       ├── greenpower/    # GreenPower+ solution
│   │       └── booking-feedback/ # Booking & Feedback solution
│   ├── api/                   # API routes (empty for now)
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── sitemap.xml/           # Sitemap generation
├── components/                # Reusable components
│   ├── ui/                   # shadcn/ui components
│   ├── navbar.tsx            # Navigation component
│   ├── footer.tsx            # Footer component
│   ├── hero.tsx              # Hero section
│   ├── highlights.tsx        # Solutions highlights
│   ├── testimonial-slider.tsx # Testimonials
│   ├── impact-counter.tsx    # Impact metrics
│   ├── logo-cloud.tsx        # Partner logos
│   ├── cta-buttons.tsx       # Call-to-action sections
│   ├── page-header.tsx       # Page headers
│   └── whatsapp-float.tsx    # Floating WhatsApp button
├── content/                  # Static content (JSON files)
│   ├── highlights.json       # Solutions data
│   ├── testimonials.json     # Customer testimonials
│   ├── impact.json          # Impact metrics
│   ├── team.json            # Team members
│   ├── faqs.json            # Frequently asked questions
│   ├── blog.json            # Blog posts
│   ├── press.json           # Press coverage
│   └── whitepapers.json     # Whitepapers and reports
├── public/
│   ├── images/placeholders/  # Placeholder images
│   └── logos/               # Partner logos
└── ...config files
```

## 🎨 Design System

### Colors
- **Brand**: #16A34A (green)
- **Ink**: #0B1020 (dark blue)
- **Paper**: #F8FAFC (light gray)
- **Accent**: #0EA5E9 (blue)

### Typography
- **Headings**: Plus Jakarta Sans
- **Body**: Inter

### Components
- Rounded corners (rounded-2xl for cards)
- Subtle shadows
- Focus-visible rings for accessibility
- Gradient backgrounds for CTAs

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ubuntu-afyalink
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Pages Overview

### Home Page (`/`)
- Hero section with main value proposition
- Solutions highlights (FixSystem, GreenPower+, Booking & Feedback)
- Customer testimonial
- Impact counter (6 facilities onboarded)
- Partner logos
- Call-to-action section

### Solutions Pages

#### FixSystem (`/solutions/fixsystem`)
- Problem statement (equipment downtime)
- Comprehensive solution overview
- Unique features (WhatsApp booking, online tracking)
- Call-to-action for maintenance plans

#### GreenPower+ (`/solutions/greenpower`)
- Detailed solution with accordion sections:
  - Problem in Tanzania
  - Innovative Localized King Energy Model
  - Dynamic Energy Optimization
  - Circular Economy & Recycling
  - AI-Powered Carbon Footprinting
  - Revenue Model
  - OneBill™ Module
- Call-to-action for energy assessment

#### Booking & Feedback (`/solutions/booking-feedback`)
- Features for healthcare facilities
- Integration options (web, WhatsApp, social media)
- Value proposition and benefits
- Call-to-action for free trial

### Other Pages
- **About** (`/about`): Mission, vision, team, partners
- **Impact** (`/impact`): Metrics, case studies, ESG impact
- **Join** (`/join`): Career opportunities (technicians, riders, partners)
- **Resources** (`/resources`): Blog, FAQs, whitepapers, press
- **Contact** (`/contact`): Contact form, contact information

## 🔧 Customization

### Content Management
All static content is stored in JSON files in the `/content` directory. Update these files to modify:
- Solutions descriptions
- Team members
- FAQs
- Blog posts
- Impact metrics

### Styling
- Modify `tailwind.config.ts` for theme customization
- Update `app/globals.css` for global styles
- Component-specific styles are in individual component files

### Images
Replace placeholder images in `/public/images/placeholders/` and `/public/logos/` with actual content.

## 📞 WhatsApp Integration

The application includes WhatsApp integration for:
- Floating button (bottom-right corner)
- Direct booking links on solution pages
- Contact page integration

WhatsApp number: +255 656 721 324

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
The application is built with standard Next.js features and can be deployed to any platform that supports Node.js.

## 📈 SEO Features

- Meta tags and Open Graph data
- Sitemap generation (`/sitemap.xml`)
- Robots.txt
- Semantic HTML structure
- Image alt tags
- Proper heading hierarchy

## ♿ Accessibility

- Keyboard navigation support
- Focus-visible rings
- Alt text for all images
- Semantic HTML structure
- ARIA labels where needed
- Reduced motion support

## 🔮 Future Enhancements

- Backend API integration
- User authentication
- Admin dashboard
- Real-time notifications
- Multi-language support
- Advanced analytics

## 📝 Notes

- All CTAs currently link to "#" (placeholder)
- Contact form is disabled with a note about future integration
- Placeholder images need to be replaced with actual content
- Team member photos are placeholders
- Partner logos are placeholders

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to Ubuntu AfyaLink.

---

**Ubuntu AfyaLink** - Fix Faster. Deliver Faster. Save Lives.