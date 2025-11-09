import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  // Structured Data (JSON-LD) for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Fayaj Nakib",
    "jobTitle": "Full-Stack Software Engineer",
    "description": "Software Engineer specializing in scalable web applications, full-stack development, and production-ready backend systems.",
    "url": "https://fayaj-nakib.github.io",
    "image": "https://fayaj-nakib.github.io/profile.jpg",
    "email": "nakibfayaj99@gmail.com",
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
      "https://www.linkedin.com/in/fayaj-nakib/"
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
      "name": "Cassetex",
      "jobTitle": "Associate Software Engineer"
    }
  }

  return (
    <>
      <Head>
        <title>Fayaj Nakib - Full-Stack Software Engineer | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}