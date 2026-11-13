# Fayaj Nakib — Portfolio

Personal portfolio website for **Md. Fayaj Nakib**, Software Engineer focused on backend development and DevOps, based in Dhaka, Bangladesh. Built with Next.js and deployed as a static site on GitHub Pages.

**Live:** [fayaj-nakib.github.io](https://fayaj-nakib.github.io)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (Pages Router, static export) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion v12 |
| Contact form | EmailJS (no backend required) |
| Deployment | GitHub Pages |
| Icons | Font Awesome 6 · Devicon |

---

## Features

- **Dark / Light mode** — persisted to `localStorage`, FOUC-free via inline script in `_document.js`
- **Animated hero** — profile photo, permanent professional title, and primary stack
- **Scroll progress bar** — thin accent line at the bottom of the nav
- **Active section highlighting** — nav links update as you scroll using `IntersectionObserver`
- **Animated count-up stats** — numbers animate when scrolled into view
- **Expandable IBM certifications** — professional cert cards with inline course lists (PDF + Verify per course)
- **Expandable project cards** — measured text overflow and accessible project links
- **Back to top button** — fades in after 400 px scroll
- **EmailJS contact** — sends email directly from the browser (owner notification + optional visitor auto-reply), no Outlook redirect
- **Fully static** — `next build` with `output: 'export'`, no server required

---

## Sections

| # | Section | Description |
|---|---|---|
| — | Hero | Name, permanent role, stats, social links, profile photo |
| 01 | About | Personal narrative, engineering philosophy, quick facts |
| 02 | Experience | Cassetex · Eutropia IT with verified metrics and detailed bullet points |
| 03 | Projects | Full-width featured DevBoard and five expandable Other Projects |
| 04 | Skills | Backend, Databases, DevOps & Cloud, Frontend, Engineering Practices, Soft Skills |
| 05 | Education | BSc in CSE — University of Asia Pacific |
| 06 | Certifications | IBM Professional Certs (expandable) + standalone courses |
| 07 | Awards | ICPC, Dean's Award, Photography |
| 08 | Contact | Direct email, LinkedIn, GitHub, phone + EmailJS message form |

---

## Project Structure

```
fayaj-nakib.github.io/
├── components/
│   ├── About.jsx            # Personal narrative + quick facts
│   ├── BackToTop.jsx        # Scroll-to-top button
│   ├── CallToAction.jsx     # Aurora-background CTA banner
│   ├── Certifications.jsx   # IBM expandable certs + standalone grid
│   ├── Contact.jsx          # Contact details + EmailJS form
│   ├── CursorGlow.jsx       # Mouse-following radial gradient
│   ├── Education.jsx        # Education timeline
│   ├── Experience.jsx       # Work history timeline
│   ├── Hero.jsx             # Landing section
│   ├── Nav.jsx              # Sticky nav with scroll progress
│   ├── ProjectCard.jsx      # Individual project card
│   ├── Projects.jsx         # Project grid
│   ├── SkillsNew.jsx        # Skills category grid
│   └── ThemeToggle.jsx      # Dark/light pill toggle
├── data/
│   ├── certifications.json  # Certs, courses (with PDF + verify URLs), awards
│   ├── education.json       # Education entries
│   ├── experience.json      # Work experience with bullet points
│   ├── projects.json        # Project list
│   └── skills.json          # Skill categories
├── pages/
│   ├── _app.js              # Global styles + JSON-LD structured data
│   ├── _document.js         # Dark mode FOUC script + fonts/icons
│   └── index.js             # Page layout
├── public/
│   ├── Fayaj_Nakib_CV_2026.pdf # Current resume (original PDF retained)
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

The contact form uses [EmailJS](https://www.emailjs.com) and sends a notification to the site owner and, when configured, a best-effort auto-reply to the visitor.

1. Create an account at [emailjs.com](https://www.emailjs.com) and add an Email Service (e.g. Gmail) — note its **Service ID**.
2. Create two Email Templates:
   - **Notification template** — sent to you. Use template variables `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`. Set the "To email" field in the template to your own address.
   - **Auto-reply template** — sent to the visitor. Set "To email" to `{{to_email}}`. Subject: `Thanks for reaching out`. Body:
     ```
     Hi {{name}}, thanks for your message — I've received it and will get back to you within 1-2 business days.

     Best,
     Fayaj Nakib.
     ```
     The form requires a nonblank name, valid email, and nonblank message. Notification variables remain `name`, `email`, `subject`, and `message`; set the notification Reply-To to `{{email}}`.
3. Copy `.env.local.example` to `.env.local` and fill in your Public Key (Account > General), Service ID, and the two Template IDs.
4. In the EmailJS dashboard, go to **Account > Security** and restrict allowed origins/domains and set a rate limit — the public key ships in the client bundle, so this is what actually stops abuse from other sites.

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

Deployed to GitHub Pages via `next build` with `output: 'export'` (static HTML/CSS/JS, no server). Push to `main` branch to trigger deployment.

The GitHub Actions build step needs the EmailJS values as repo secrets (Settings > Secrets and variables > Actions), matching the names in `.env.local.example`: `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`, `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_NOTIFY_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_REPLY_TEMPLATE_ID` — the first three are required; the reply template is optional. Missing required configuration displays an unavailable message. A reply failure does not change a successful submission. Never add private EmailJS credentials to public environment variables.

---

## License

Personal portfolio — not open-sourced.

## Author

**Md. Fayaj Nakib** · Full-Stack Software Engineer · Dhaka, Bangladesh  
[fayaj-nakib.github.io](https://fayaj-nakib.github.io) · [linkedin.com/in/fayajnakib](https://www.linkedin.com/in/fayajnakib/) · [github.com/Fayaj-Nakib](https://github.com/Fayaj-Nakib)


## Validation and content notes

Run `npm run lint` and `npm run build`; the deployable static files are in `out/`.
The workflow runs lint before building. Tailwind v4 uses `styles/globals.css`; the retained
legacy `tailwind.config.mjs` is not loaded by an `@config` directive.

Experience statistics are computed at build time from distinct months of employment,
excluding gaps and avoiding overlap. Published projects alone count toward the project total.
Rebuild to refresh date-based statistics. Framer Motion follows the system reduced-motion
preference; CSS animations and smooth scrolling are disabled under that preference.

The current CV is an unchanged copy of `Fayaj_Nakib__Copy_.pdf` supplied locally on
2026-11-13. The requested filename with ` (1)` was unavailable. The previous public PDF
is retained. No public demo credentials are included; verify an isolated demo account
before adding any dedicated access mechanism.

Before enabling contact delivery, verify the EmailJS notification destination, Reply-To,
optional reply destination, allowed domains, and service-side spam controls. The hidden
honeypot and duplicate-submit guard are lightweight client checks, not service-side protection.
See `IMPLEMENTATION_REPORT.md` for validation results and remaining manual checks.

The subsequent UI refinement audit, screenshots, and current validation results are in
[`docs/ui-audit/REPORT.md`](docs/ui-audit/REPORT.md). Open
[`docs/ui-audit/index.html`](docs/ui-audit/index.html) locally to compare before/after
screenshots by theme and viewport. The owner confirmed successful deployment and EmailJS
delivery before this refinement; the working integration was preserved.
