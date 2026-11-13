# Final portfolio UI/UX refinement

Implemented locally on 13 November 2026, starting from clean commit `d71b787`.
The owner confirmed the previous deployment and successful EmailJS delivery. This pass
preserves that integration and refines the existing JavaScript / Pages Router portfolio.
No application dependencies, credentials, CV files, or portrait pixels were changed.
Nothing was committed, pushed, or deployed.

## A. Prioritized UI/UX audit

The emerald/slate identity, readable body text, clear primary action, dark mode,
accessible disclosures, and working contact form were sound and were retained.

| Priority / classification | Before | Implemented result |
|---|---|---|
| High — confirmed hierarchy issue | At 375px, the photo and supporting card preceded the introduction; the primary action began at y=1002px. | Text and actions lead in DOM and mobile reading order. The action now starts at y=486px (528px at 320px, previously 1052px). |
| High — confirmed visual issue | The only featured project occupied 352px of a 1104px content row at 1440px. | DevBoard fills the 1104px row, with copy/actions on the left and three verified engineering highlights on the right. It stacks on mobile. |
| High — confirmed content/order issue | Experience preceded Projects but labels read 03 then 02; degree wording differed from the supplied official wording. | Labels now read 01–08 in document order. Navigation and footer follow Experience then Projects. Degree is “Bachelor of Science in Computer Science and Engineering”, period 2020–2024. |
| Medium — usability improvement | Experience dates drifted toward the middle on narrow cards; production metrics were buried in bullets. | Dates align left when stacked, right on wider screens. Five restrained metrics summarize the Cassetex record. Original bullets remain. |
| Medium — usability improvement | Certificate links were tiny text actions, with the course disclosure far from verification links. Icons consumed scarce mobile title width. | Consistent bordered controls, larger titles, nearby actions, and icons shown from small-tablet widths. Four initial IBM certificates and all expandable credentials remain. |
| Medium — usability improvement | Long contact identifiers could truncate; form padding consumed narrow-screen space. | Contact identifiers wrap and mobile form padding is reduced. Submission logic is byte-for-byte unchanged. |
| Medium — usability improvement | At 320px, skill pills made long practice names wrap into narrow columns. | A single pill column below 360px; existing two-column presentation remains above that width. Categories and proficiency wording are unchanged. |
| Low — optional aesthetic enhancement, implemented | Floating portrait, overlapping availability badge, pulsing timeline, repeating trophies, and a large second CTA competed with content. | Stable portrait with caption underneath; quiet timeline; compact award list preserving every achievement; concise closing invitation with one contact action. |

No screenshot or diagram was invented for DevBoard: no relevant verified project capture
was present in `public/`. The layout uses existing project facts. Its full original
description is retained in data, with a shorter summary plus structured highlights for
the featured presentation. The five secondary cards and unpublished GeoFence are retained.

## B. Before-and-after screenshots

Open [the comparison viewer](index.html) locally. Select theme, viewport, and section;
click a screenshot to inspect its native resolution.

| View | Before | After |
|---|---|---|
| Mobile, light hero | [375px](before/light-375-hero.jpg) | [375px](after/light-375-hero.jpg) |
| Mobile, dark hero | [375px](before/dark-375-hero.jpg) | [375px](after/dark-375-hero.jpg) |
| Desktop, light hero | [1440px](before/light-1440-hero.jpg) | [1440px](after/light-1440-hero.jpg) |
| Desktop, dark hero | [1440px](before/dark-1440-hero.jpg) | [1440px](after/dark-1440-hero.jpg) |
| Desktop featured work | [Light](before/light-1440-projects.jpg) | [Light](after/light-1440-projects.jpg) |
| Desktop featured work | [Dark](before/dark-1440-projects.jpg) | [Dark](after/dark-1440-projects.jpg) |

Full-page captures cover **320, 375, 768, 1024, and 1440px** in **both themes**, before
and after. Additional section captures cover experience, projects, skills, certifications,
and contact at 375/1440px: 68 JPEG screenshots in total. Screenshots use a 900px viewport
height and reduced motion for repeatability. The development indicator is hidden only
for screenshots; fixed navigation/skip/back-to-top overlays are hidden only in section
crops to avoid covering the captured content. They remain visible in hero/full-page views.
Normal-motion production behavior was checked separately.

## C. Modified files

| File | Purpose |
|---|---|
| `components/Hero.jsx` | Text-first mobile DOM, responsive typography/padding, stable 3:4 portrait and non-overlapping availability caption; retain count-up implementation and links. |
| `components/FeaturedProject.jsx` (new) | Responsive semantic featured article with summary, tags, GitHub/demo actions, and verified engineering highlights. |
| `components/Projects.jsx` | Full-width featured presentation, corrected 03 label, clearer Other Projects disclosure. |
| `data/projects.json` | Add DevBoard summary/highlights derived from existing facts; preserve original descriptions, URLs, and hidden project. |
| `components/Experience.jsx` | Correct 02 label, compact metric list, mobile date alignment, bullet spacing, quieter card/timeline presentation. |
| `data/experience.json` | Add five existing verified figures as structured metrics; preserve employment details and bullet text. |
| `data/education.json` | Exact supplied bachelor's degree title and 2020–2024 period; preserve CGPA, institution, other qualifications. |
| `components/Certifications.jsx` | Clearer verification/PDF/disclosure controls and titles; compact awards without repeated trophy icons. |
| `components/SkillsNew.jsx` | Avoid cramped skill columns at 320px and remove hover scaling on noninteractive pills. |
| `components/Contact.jsx` | Only two class changes: wrapped contact identifiers and narrower mobile form padding. |
| `components/CallToAction.jsx` | Replace the large repeated promotional panel with a compact, relevant invitation. |
| `components/Nav.jsx` | Order Experience before Projects, matching document order. |
| `pages/index.js` | Match footer navigation order to the page. |
| `styles/globals.css` | Remove now-unused portrait-float and timeline-ping animations. Existing reduced-motion/focus/contrast rules retained. |
| `README.md` | Correct section table and point to current audit and screenshots; acknowledge owner-tested delivery. |
| `public/README_IMAGE.md` | Correct obsolete circular-image guidance and document actual portrait presentation. |
| `docs/ui-audit/` (new) | This report, comparison viewer, 68 before/after JPEGs, before/after measurement JSON, interaction/accessibility JSON, production-verification JSON. |

About copy, secondary ProjectCard behavior, certificate data and dates, skill data,
SEO, authentication/configuration, and dependency manifests were deliberately retained.

## D. Profile image assessment

The real `public/profile.jpg` was visually inspected at source resolution and in the
rendered layouts. It is **1406 × 1874 pixels, 495,393 bytes**. It is technically suitable
for the **176 × approximately 235px mobile** and **208 × approximately 277px desktop**
presentation, including high-density displays. The face is sufficiently clear at these
sizes; the original graduation setting is preserved.

The source's near-3:4 ratio now matches the card, avoiding the previous square crop.
The subtle border and entrance transition remain, continuous floating is removed,
and the availability caption sits beneath the image. Explicit dimensions/aspect ratio
reserve space, and priority loading remains. No replacement photograph is required.

## E. Verification

- `npm run lint`: passed with no errors or warnings.
- `npm run build`: passed; Next.js generated `/`, `/404`, and static assets in `out/`.
- `git diff --check`: passed.
- Production-export browser checks passed at all five widths with normal motion: theme
  switching, mobile menu, internal asset/anchor links, profile loading, and statistics.
  The Layout Instability observer recorded **0** cumulative shift in each viewport run;
  this is a local measurement, not a field Core Web Vitals score.
- Responsive capture matrix: no horizontal overflow at any of the five widths in either
  theme. Expanded projects/certifications also passed all five widths.
- Browser interaction checks: skip-link/focus visibility, Escape and focus return, mobile
  navigation, section targets, theme persistence, secondary-project expansion/collapse,
  certificate/course disclosure, profile loading, CV HTTP response, and reduced-motion
  scrolling passed. No captured React/hydration errors or page exceptions.
- axe-core WCAG 2 A/AA and 2.1 AA scans at 375px, with secondary projects and remaining
  credentials expanded: **zero reported violations in light and dark mode**. This matches
  the previous audit's zero-violation result; automated checks do not prove full conformance.
- EmailJS requests were blocked by the audit browser and **zero email requests occurred**.
  No form submissions were sent. Working handler/configuration was not changed or retested
  against the live service; owner-confirmed delivery is accepted.
- DevBoard anchors retain the supplied GitHub/demo URLs and external-link attributes.
  Both remote HTTP probes timed out/unavailable from this environment; this does not
  establish broken links. Local navigation and CV access were verified.
- Existing photograph and CV were compared against Git and remain unchanged. Certificate
  dates/data and all original experience bullets remain unchanged; GeoFence stays unpublished.

See [interaction/accessibility evidence](verification.json), [before measurements](before/measurements.json),
[after measurements](after/measurements.json), and [production checks](production-verification.json).

## F. Remaining recommendations

- A responsive, compressed derivative of the existing portrait could reduce its roughly
  484 KiB transfer size. This is optional performance work; image quality does not require
  a replacement or retouching.
- Confirm DevBoard's two external destinations from your normal browser, since the audit
  environment could not reach them. No additional EmailJS setup is requested.

## G. Deployment readiness

Ready for review and manual deployment with the existing GitHub Pages workflow. The
application remains a static-export-compatible JavaScript Pages Router site. Screenshot
evidence is under `docs/`, not `public/`, so it is not bundled into the deployed portfolio.
No commit, push, deployment, credential change, or real message submission was performed.
