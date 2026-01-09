# Portfolio - Brundha S V

A modern, professional portfolio website for Brundha S V, a Product & Strategy professional.

## Features

- Modern, responsive design
- Smooth scrolling navigation
- Professional layout optimized for business professionals
- All sections from CV: About, Experience, Skills, Education, Certifications, Projects, and Extracurricular activities

## Tech Stack

- **Next.js 14** - React framework for production
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Vercel** - Deployment platform

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment on Vercel

1. Push your code to a GitHub repository
2. Import the project in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

Alternatively, you can use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Project Structure

```
portfolio-brundha/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles
├── components/
│   ├── Navigation.tsx   # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── WorkExperience.tsx
│   ├── Skills.tsx
│   ├── Education.tsx
│   ├── Certification.tsx
│   ├── Projects.tsx
│   └── Extracurricular.tsx
├── public/              # Static assets
└── package.json
```

## Customization

You can easily customize the portfolio by:
- Updating content in the component files
- Modifying colors in `tailwind.config.js`
- Adjusting styles in component files

## License

This project is private and personal.


