import '../styles/globals.css'
import Head from 'next/head'
import { MotionConfig } from 'framer-motion'

export default function App({ Component, pageProps }) {
  // Structured Data (JSON-LD) for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Fayaj Nakib",
    "jobTitle": "Software Engineer",
    "description": "Software engineer specializing in backend systems, REST APIs, PostgreSQL, IoT integrations, payment automation, and DevOps.",
    "url": "https://fayaj-nakib.github.io/",
    "image": "https://fayaj-nakib.github.io/profile.jpg",
    "email": "fayaj.nakib.dev@gmail.com",
    "telephone": "+8801920899997",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dhaka",
      "addressRegion": "Dhaka",
      "postalCode": "1216",
      "addressCountry": "BD"
    },
    "sameAs": [
      "https://github.com/Fayaj-Nakib",
      "https://www.linkedin.com/in/fayajnakib/"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "University of Asia Pacific",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dhaka",
        "addressCountry": "BD"
      }
    },
    "knowsAbout": [
      "Next.js",
      "Laravel",
      "PostgreSQL",
      "React",
      "JavaScript",
      "Python",
      "Full-Stack Development",
      "Web Development",
      "REST APIs",
      "Machine Learning"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Cassetex"
    }
  }

  return (
    <>
      <Head>
        <title>Fayaj Nakib | Software Engineer — Backend &amp; DevOps</title>
        <meta name="description" content="Software engineer specializing in backend systems, REST APIs, PostgreSQL, IoT integrations, payment automation, and DevOps." />
        <link rel="canonical" href="https://fayaj-nakib.github.io/" />
        <meta name="theme-color" content="#064E3B" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fayaj-nakib.github.io/" />
        <meta property="og:title" content="Fayaj Nakib | Software Engineer — Backend &amp; DevOps" />
        <meta property="og:description" content="Software engineer specializing in backend systems, REST APIs, PostgreSQL, IoT integrations, payment automation, and DevOps." />
        <meta property="og:image" content="https://fayaj-nakib.github.io/profile.jpg" />
        <meta property="og:image:alt" content="Fayaj Nakib" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Fayaj Nakib | Software Engineer — Backend &amp; DevOps" />
        <meta name="twitter:description" content="Software engineer specializing in backend systems, REST APIs, PostgreSQL, IoT integrations, payment automation, and DevOps." />
        <meta name="twitter:image" content="https://fayaj-nakib.github.io/profile.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <MotionConfig reducedMotion="user">
        <Component {...pageProps} />
      </MotionConfig>
    </>
  )
}