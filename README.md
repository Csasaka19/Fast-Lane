# Fast Lane

**Turn Strategy Into Scalable Growth**

Fastlane is a modern marketing and business growth consultancy website built with Next.js, TypeScript, and Tailwind CSS. We help ambitious businesses stop guessing and start scaling through high-ROI offers, conversion systems, and predictable revenue engines.

## About Fastlane

At Fastlane, we engineer high-ROI offers, build conversion systems, and turn attention into predictable revenue. If your business is getting traffic but not enough sales, leads but not enough loyalty, or growth but not enough profit — your offer and systems just need optimization.

**Our Core Philosophy:** Marketing is value, clearly packaged and precisely delivered.

## Features

- Modern, responsive single-page marketing website
- Light/Dark theme toggle
- Smooth scroll navigation
- Interactive service cards with hover effects
- Testimonial carousel/slideshow
- Contact form with validation
- Scroll-triggered animations
- SEO-optimized with Next.js SSR/SSG
- Mobile-first responsive design

## Pages & Sections

| Section | Description |
|---------|-------------|
| **Hero** | Full-width hero with slideshow background, headline, and CTA |
| **High ROI Growth** | Value proposition with bullet points |
| **Core Growth Services** | 3 service cards: Offer Structuring, Income Optimization, Growth Optimization |
| **Why Choose Fastlane** | Checkmark list of differentiators |
| **About Us** | Company story and philosophy |
| **What Makes Us Different** | Positioning and leverage approach |
| **Our Mission** | Mission statement with goals |
| **Who We Work With** | Target audience breakdown |
| **Testimonials** | Client quotes carousel with logos |
| **Blog** | Articles on customer engagement and marketing |
| **Contact** | Contact form + location info |

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Font:** Inter (Google Fonts)
- **Icons:** Lucide React
- **Animations:** Framer Motion

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
cd fast-lane
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
fast-lane/
├── public/
│   └── images/           # Placeholder images (see below)
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Root layout with theme provider
│   │   ├── page.tsx      # Homepage (all sections)
│   │   ├── about/
│   │   │   └── page.tsx  # About Us page
│   │   ├── services/
│   │   │   └── page.tsx  # Services detail page
│   │   ├── blog/
│   │   │   └── page.tsx  # Blog listing page
│   │   └── contact/
│   │       └── page.tsx  # Contact page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── HighROIGrowth.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── WhyChoose.tsx
│   │   │   ├── AboutPreview.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── WhoWeWorkWith.tsx
│   │   │   └── CTASection.tsx
│   │   ├── ui/
│   │   │   ├── CTAButton.tsx
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── ThemeToggle.tsx
│   │   │   └── ContactForm.tsx
│   │   └── providers/
│   │       └── ThemeProvider.tsx
│   └── lib/
│       └── constants.ts  # Site content data
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

## Theme

The site includes a **light/dark theme toggle**:

- **Light mode:** White backgrounds, dark text, blue/teal accents
- **Dark mode:** Dark slate backgrounds, light text, bright accent colors

## Color Palette

| Color | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| Primary | `#0ea5e9` | `#38bdf8` | CTAs, links, accents |
| Text | `#111827` | `#f1f5f9` | Headings |
| Body | `#374151` | `#cbd5e1` | Paragraphs |
| Background | `#ffffff` | `#0f172a` | Main background |
| Surface | `#f8fafc` | `#1e293b` | Card backgrounds |
| Accent Green | `#10b981` | `#34d399` | Checkmarks, success |
| Accent Orange | `#f59e0b` | `#fbbf24` | Urgency, CTAs |

## Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

This project is private and proprietary to Fastlane.
