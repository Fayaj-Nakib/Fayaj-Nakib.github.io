# Fayaj Nakib — Portfolio

Personal portfolio website for **Md. Fayaj Nakib**, Full-Stack Software Engineer based in Dhaka, Bangladesh. Built with Next.js and deployed as a static site on GitHub Pages.

**Live:** [fayaj-nakib.github.io](https://fayaj-nakib.github.io)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (Pages Router, static export) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion v12 |
| Contact form | Web3Forms (no backend required) |
| Deployment | GitHub Pages |
| Icons | Font Awesome 6 · Devicon |

---

## Features

- **Dark / Light mode** — persisted to `localStorage`, FOUC-free via inline script in `_document.js`
- **Cursor glow** — subtle radial gradient follows the mouse (desktop only)
- **Animated hero** — floating profile photo with gradient ring, drifting blob orbs in the background
- **Typing effect** — role cycling in the hero
- **Scroll progress bar** — thin accent line at the bottom of the nav
- **Active section highlighting** — nav links update as you scroll using `IntersectionObserver`
- **Animated count-up stats** — numbers animate when scrolled into view
- **Expandable IBM certifications** — professional cert cards with inline course lists (PDF + Verify per course)
- **Unique project cards** — each card has a distinct gradient accent
- **Back to top button** — fades in after 400 px scroll
- **Web3Forms contact** — sends email directly from the browser, no Outlook redirect
- **Fully static** — `next export`, no server required

---

## Sections

| # | Section | Description |
|---|---|---|
| — | Hero | Name, role typing, stats, social links, profile photo |
| 01 | About | Personal narrative, engineering philosophy, quick facts |
| 02 | Projects | Featured work — FleetBook, DevBoard, IELTS App, I-SORT, and more |
| 03 | Experience | Cassetex · Eutropia IT with detailed bullet points |
| 04 | Skills | Backend, Frontend, DevOps, Databases, ML, Languages, Soft Skills |
| 05 | Education | BSc in CSE — University of Asia Pacific |
| 06 | Certifications | IBM Professional Certs (expandable) + standalone courses |
| 07 | Awards | ICPC, Dean's Award, Photography |
| 08 | Contact | Direct email, LinkedIn, GitHub, phone + Web3Forms message form |

---

## Project Structure

```
fayaj-nakib.github.io/
├── components/
│   ├── About.jsx            # Personal narrative + quick facts
│   ├── BackToTop.jsx        # Scroll-to-top button
│   ├── CallToAction.jsx     # Aurora-background CTA banner
│   ├── Certifications.jsx   # IBM expandable certs + standalone grid
│   ├── Contact.jsx          # Contact details + Web3Forms form
│   ├── CursorGlow.jsx       # Mouse-following radial gradient
│   ├── Education.jsx        # Education timeline
│   ├── Experience.jsx       # Work history timeline
│   ├── Hero.jsx             # Landing section
│   ├── Nav.jsx              # Sticky nav with scroll progress
│   ├── ProjectCard.jsx      # Individual project card
│   ├── Projects.jsx         # Project grid
│   ├── SkillsNew.jsx        # Skills category grid
│   ├── ThemeToggle.jsx      # Dark/light pill toggle
│   └── TypingEffect.jsx     # Cycling role text
├── data/
│   ├── certifications.json  # Certs, courses (with PDF + verify URLs), awards
│   ├── education.json       # Education entries
│   ├── experience.json      # Work experience with bullet points
│   ├── projects.json        # Project list
│   └── skills.json          # Skill categories
├── pages/
│   ├── _app.js              # Global styles + JSON-LD structured data
│   ├── _document.js         # Dark mode FOUC script + meta tags
│   └── index.js             # Page layout
├── public/
│   ├── Md_Fayaj_Nakib.pdf   # Resume
│   ├── profile.jpg          # Profile photo
│   └── *.pdf                # Certificate PDFs (IBM courses + standalone)
├── styles/
│   └── globals.css          # Tailwind v4 config, custom animations, dark variant
├── next.config.mjs          # Static export config for GitHub Pages
└── tailwind.config.mjs      # Content paths + darkMode (legacy — overridden by CSS)
```

---

## Content Updates

All content lives in JSON files under `data/`. Edit them directly to update the portfolio:

- **New project** → `data/projects.json`
- **New job** → `data/experience.json`
- **New certificate** → `data/certifications.json`
- **New skill** → `data/skills.json`

---

## Getting Started

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build + export
npm run build
```

Open [http://localhost:3000](http://localhost:3000).

### Contact form setup

The contact form uses [Web3Forms](https://web3forms.com) (free, 250 submissions/month).

1. Go to [web3forms.com](https://web3forms.com), enter your email → get access key instantly
2. Open `components/Contact.jsx` and replace `'YOUR_ACCESS_KEY'` on line 13

---

## Design Tokens

| Token | Value | Usage |
|---|---|---|
| `brand-primary` | `#1E3A8A` | Buttons, active states |
| `brand-accent` | `#3B82F6` | Highlights, links, badges |
| Background (light) | `#F8FAFC` | Page bg |
| Background (dark) | `#0F172A` | Page bg dark |

---

## Deployment

Deployed to GitHub Pages via `next export` (static HTML/CSS/JS, no server). Push to `main` branch to trigger deployment.

---

## License

Personal portfolio — not open-sourced.

## Author

**Md. Fayaj Nakib** · Full-Stack Software Engineer · Dhaka, Bangladesh  
[fayaj-nakib.github.io](https://fayaj-nakib.github.io) · [linkedin.com/in/fayajnakib](https://www.linkedin.com/in/fayajnakib/) · [github.com/Fayaj-Nakib](https://github.com/Fayaj-Nakib)
