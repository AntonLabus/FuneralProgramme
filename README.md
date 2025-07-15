# Funeral Programmes Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR_BADGE_ID/deploy-status)](https://app.netlify.com/sites/YOUR_SITE_NAME/deploys)

A compassionate, elegant marketing website for a funeral programmes design service. Built with Next.js 15, TypeScript, and Tailwind CSS to honor loved ones' memories with beautiful, personalized tributes.

## 🌸 About

This website serves families during difficult times by providing:
- Custom funeral programme design services
- Professional photo editing and restoration
- Compassionate consultation and support
- Fast turnaround with 24-48 hour delivery
- Beautiful, lasting keepsakes that honor unique life stories

## 🚀 Quick Start

### Prerequisites

- Node.js 20.0.0 or higher
- npm, yarn, or pnpm

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/AntonLabus/FuneralProgramme.git
   cd FuneralProgramme
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

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run Jest unit tests
- `npm run test:watch` - Run Jest in watch mode
- `npm run test:e2e` - Run Playwright e2e tests
- `npm run test:e2e:ui` - Run Playwright with UI

## 🎨 Design System

### Colors
- **Ivory**: `#FAF9F7` - Background, soft tones
- **Navy**: `#1F2A44` - Primary text, headers
- **Lavender**: `#8D7BA7` - Accent color, buttons
- **Lavender Light**: `#B8A7D9` - Hover states, gradients

### Typography
- **Headings**: Playfair Display (serif)
- **Body Text**: Inter (sans-serif)

### Layout
- **Max Width**: 1024px
- **Mobile-first**: Responsive design
- **Accessibility**: WCAG 2.2 AA compliant

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About us page
│   ├── contact/           # Contact form page  
│   ├── gallery/           # Design gallery page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── not-found.tsx      # 404 page
│   ├── page.tsx           # Home page
│   └── sitemap.ts         # Sitemap generator
├── components/            # Reusable components
│   ├── About.tsx          # About section
│   ├── CallToAction.tsx   # CTA sections
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Site footer
│   ├── Gallery.tsx        # Image gallery
│   ├── Header.tsx         # Site header/navigation
│   ├── Hero.tsx           # Hero section
│   ├── Services.tsx       # Services showcase
│   └── __tests__/         # Component tests
public/
├── gallery/               # Sample programme images
├── robots.txt             # SEO robots file
└── site.webmanifest       # PWA manifest
tests/                     # End-to-end tests
```

## 🌐 Deployment to Netlify

### One-Click Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/AntonLabus/FuneralProgramme)

### Manual Deployment

1. **Connect Repository**
   - Log in to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Select your repository

2. **Build Settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: `20.0.0`

3. **Environment Variables** (if needed)
   ```
   NODE_VERSION=20.0.0
   ```

4. **Domain Setup**
   - Configure custom domain in Netlify dashboard
   - Update URLs in the following files:
     - `src/app/layout.tsx` (metadata URLs)
     - `src/app/sitemap.ts` (sitemap URLs)
     - `public/robots.txt` (sitemap URL)

### Netlify Forms Setup

The contact form uses Netlify Forms for handling submissions:

1. **Form Detection**: Automatic (uses `data-netlify="true"`)
2. **Notifications**: Configure in Netlify dashboard → Forms
3. **Spam Protection**: Built-in honeypot and reCAPTCHA options

## 📧 Customization

### Business Information

Update the following placeholders with your actual business details:

1. **Contact Information** (`src/components/Contact.tsx`, `src/components/Footer.tsx`, `src/components/CallToAction.tsx`):
   ```typescript
   // Replace these placeholders:
   phone: "(555) 123-4567"
   email: "info@funeralprogrammes.com"
   ```

2. **Business Name** (throughout the site):
   ```typescript
   // Replace "[Your Business Name]" with actual business name
   ```

3. **Domain URLs** (`src/app/layout.tsx`, `src/app/sitemap.ts`):
   ```typescript
   // Replace with your actual domain
   baseUrl: 'https://your-actual-domain.com'
   ```

### Sample Images

Replace placeholder images in `/public/gallery/` with actual funeral programme designs:

- `floral-1.jpg`, `floral-2.jpg`, `floral-3.jpg` - Floral designs
- `classic-1.jpg`, `classic-2.jpg` - Classic layouts  
- `religious-1.jpg`, `religious-2.jpg` - Religious themes
- `modern-1.jpg`, `modern-2.jpg` - Modern styles
- `sample-programme.jpg` - Hero section sample
- `about-image.jpg` - About page image
- `og-image.jpg` - Social media preview image

**Recommended dimensions:**
- Gallery images: 600×800px (3:4 aspect ratio)
- Hero sample: 400×533px (3:4 aspect ratio)
- About image: 800×600px (4:3 aspect ratio)
- OG image: 1200×630px

## 🧪 Testing

### Unit Tests
```bash
npm run test
```

### End-to-End Tests
```bash
# Run all e2e tests
npm run test:e2e

# Run with UI
npm run test:e2e:ui
```

### Test Coverage
- Contact form functionality
- Component rendering
- Accessibility compliance
- Mobile responsiveness

## 🔧 Tech Stack

- **Framework**: Next.js 15 (App Router, React Server Components)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom design system
- **Animations**: Framer Motion (gentle fade/slide)
- **Forms**: Netlify Forms with TypeScript functions
- **Images**: next/image with sharp optimization
- **SEO**: next-seo, sitemap generation, robots.txt
- **Testing**: Playwright (e2e), Jest (unit), ESLint
- **Deployment**: Netlify with edge adapter

## 📱 Features

- ✅ Responsive design (mobile-first)
- ✅ Fast loading with Next.js optimization
- ✅ Accessible (WCAG 2.2 AA)
- ✅ SEO optimized
- ✅ Progressive Web App ready
- ✅ Contact form with Netlify backend
- ✅ Image optimization
- ✅ TypeScript for type safety
- ✅ Comprehensive testing suite

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💖 Support

This website was built to serve families during their most difficult times. If you need immediate assistance:

- **Phone**: (555) 123-4567 <!-- Replace with actual number -->
- **Email**: info@funeralprogrammes.com <!-- Replace with actual email -->
- **Response Time**: Within 24 hours

---

*"Beautifully Crafted Programs for a Lasting Tribute."*
