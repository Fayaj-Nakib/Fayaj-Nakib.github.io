# 📌 Fayaj Nakib — Personal Portfolio Website

## 📍 Overview

The Personal Portfolio Website is a modern, responsive web application designed to professionally present the profile of Fayaj Nakib, a full-stack software engineer specializing in Next.js, Laravel, PostgreSQL, REST APIs, CI/CD, and scalable application deployment.

It highlights professional experience, technical projects, research work, skills, and provides direct contact options for recruiters and remote job clients.

## 🎯 Purpose

The project serves to:

- Build personal branding & digital identity
- Showcase technical experience and projects
- Provide a central point to download the resume
- Improve remote job visibility
- Demonstrate front-end engineering capability
- Add credibility for graduate program admissions
- Enable professional networking outreach

## ✅ Key Features

### 🧑‍💻 Hero Section

- Clean introduction with role
- Resume download button
- Tagline & location
- Professional containers with highlights

### 🚀 Experience Timeline

- Professional experience at Cassetex and Eutropia-IT
- Bullet-point responsibilities
- Achievements delivered

### 🧪 Project Showcase

- Grid-based display
- Technology tags
- GitHub repository buttons
- Projects include:
  - IELTS Prep App (React + Firebase)
  - I-SORT IoT Sortation Robot
  - Car Dealer Web App (Django)
  - Human Disease Prediction (Python + ML)

### 📬 Contact Section

- Contact details
- Integrated contact form UI
- Email + LinkedIn access

### 🏗️ Reusability & Modularity

- Components split into individual files
- Easily extendable sections

## 🛠️ Tech Stack

| Category | Tools |
|----------|-------|
| Frontend | Next.js (Pages Router), React, JSX |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Deployment | Vercel |
| Version Control | Git + GitHub |

## 🎨 Design System

### Color Palette (Blue/Indigo)

- **Primary**: #1E3A8A
- **Accent**: #3B82F6
- **Background**: #F9FAFB
- **Text**: #111827

Chosen for:
- Trust
- Tech professionalism
- Good accessibility contrast

### Typography

- Sans-serif, bold hero text, clear readability

### Layout

- Clean white cards
- Soft shadows
- Rounded corners
- Minimalistic spacing discipline

## 📁 Folder Structure

```
fayaj-portfolio/
├─ components/
│  ├─ Nav.jsx
│  ├─ Hero.jsx
│  ├─ Projects.jsx
│  ├─ ProjectCard.jsx
│  ├─ Experience.jsx
│  └─ Contact.jsx
├─ pages/
│  ├─ _app.js
│  └─ index.js
├─ public/
│  └─ Md_Fayaj_Nakib.pdf    // resume
├─ styles/
│  └─ globals.css
├─ tailwind.config.js
├─ postcss.config.js
├─ package.json
└─ README.md
```

## ⚙️ Core Configuration

### Tailwind Extension

- Brand colors defined
- Extended theme tokens
- Added global padding system

### Global Styles

- Root variables
- Cross-browser font support
- White background space

### Reusable Components

- ProjectCard uses props
- Experience array maps data

## 📐 Component Architecture

Each UI piece is atomic:

- **Nav.jsx** → navigation logic
- **Hero.jsx** → branding & resume CTA
- **Projects.jsx** → project mapping
- **Experience.jsx** → repeating experience blocks
- **Contact.jsx** → contact UI + form

This architecture:
- Enables scalability
- Reduces future code duplication
- Improves maintainability

## 📡 Deployment

Deployed on Vercel which provides:
- Auto CI/CD
- Preview builds
- HTTPS support
- Custom domain linking

## 🔒 Security Considerations

- No sensitive API keys exposed
- Resume served from public directory
- Contact form not connected to spam-prone email endpoints yet

## ⚡ Performance Notes

- Lighthouse score ≈ 95–98
- Optimized static rendering
- Lightweight CSS compilation
- Zero blocking scripts

## 📱 Responsiveness

Designed with mobile-first breakpoints:
- XS → stacked vertical layout
- MD → grid-based sections
- LG → 3-column project grid

Works on:
- Phone
- Tablet
- Desktop
- 4K displays

## 🔄 Scalability

Future enhancements supported:
- Blog routing
- MDX articles
- Dynamic GitHub pinned repos
- Dark mode toggle
- Webhooks

## 🧩 Integration Points

Potential integrations:
- Resend API (emails)
- GitHub GraphQL API
- Vercel Analytics
- Google Tag Manager

## 🧪 Testing

Currently manual testing validated:
- Broken links
- Responsive layout
- Resume download
- Navigation scroll anchors
- External links target behavior

## 🚧 Limitations

- Contact form not yet connected to real email service
- No backend database for messaging
- No dark mode support yet

## 📌 Future Roadmap

Planned enhancements:

- ✔ MDX blog engine
- ✔ Dark mode switch
- ✔ Accessibility audit (WCAG 2.1 AA)
- ✔ Enhanced project details page
- ✔ Animations on scroll (AOS)

## 🤖 Why This Project Matters

Recruiters prefer:

- ✅ custom personal branding
- ✅ real deployment competence
- ✅ CI/CD awareness
- ✅ clean UI communication
- ✅ component-based architecture

It demonstrates:

- Frontend engineering ability
- Design sense
- Resume linking
- GitHub activity
- Hosting knowledge

## 🏁 Outcome

This project establishes:

- A professional online presence
- Technical confidence
- Remote job readiness
- Grad school attractiveness
- SEO visibility

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📄 License

Not open-sourced yet — personal portfolio.

## 👨‍💻 Developer

**Md. Fayaj Nakib**  
Full-Stack Software Engineer  
Dhaka, Bangladesh

## ✅ Summary

This portfolio is an elegant, modular, responsive web application that acts as a digital identity hub, easily extendable with blogs, metrics, and automation — aligned with modern hiring expectations.
