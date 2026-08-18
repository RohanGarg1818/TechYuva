# TECHYUVA — Digital Campus of USICT 🏛️

**TECHYUVA** is the official digital campus platform for the **University School of Information, Communication & Technology (USICT)**. Designed to be a comprehensive ecosystem for modern students and faculty, it unifies campus events, official notices, student societies, and academic resources into one seamless, premium web experience.

## ✨ Features

- **Cinematic & Academic Aesthetic**: A deeply institutional, premium design using an editorial layout, sophisticated typography, and a tailored color palette (Deep Navy, Royal Blue, Warm White, Academic Gold).
- **Dynamic Light & Dark Mode**: A fully configured `next-themes` setup with CSS semantic variables. Seamlessly switch between the crisp Light theme and the deep Navy Dark theme via a seamless animated toggle.
- **Physics-Based Interactions**: Powered by Framer Motion, featuring buttery smooth scrolling, `MagneticButton` physics, staggered fade-ins, and sticky horizontal scroll-jacking for the university timeline.
- **Comprehensive Ecosystem**:
  - **Events Hub**: Cinematic event cards, perspective reveals, and detailed event itineraries.
  - **Notice Board**: High-priority alert pills and categorized official announcements.
  - **Our Journey**: A highly engaging, interactive timeline of USICT's technological evolution from 1998 to present.
- **Mobile First & Responsive**: Hand-crafted layouts for all screen sizes, featuring an animated mobile drawer menu and floating navigation.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS (with fully semantic dynamic variables)
- **Animation**: Framer Motion & React Lenis (Smooth Scrolling)
- **Icons**: Google Material Symbols Outlined
- **Theming**: `next-themes`

## 📦 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Theme Configuration

The site uses a completely dynamic Semantic Color System mapped in `tailwind.config.ts` and `src/app/globals.css`.
- **Primary Colors**: Royal Blue (`#1E40AF`) & Deep Navy (`#172554`)
- **Accent**: Academic Gold (`#C89B3C`)

To modify the theme, adjust the `--background`, `--card`, `--primary`, and `--accent` RGB variables inside `src/app/globals.css`.

## 🔐 Environment Variables

Ensure you create a `.env` file in the root directory for any external integrations (e.g., Supabase). 
The `.env` file is safely ignored by `.gitignore` to prevent secret leaks.

```env
# Example .env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

## 📄 License

This project is built for the University School of Information, Communication & Technology (USICT).
