import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta name="title" content="Fayaj Nakib - Full-Stack Software Engineer | Portfolio" />
        <meta name="description" content="Software Engineer specializing in scalable web applications, full-stack development, and production-ready backend systems. Expertise in Next.js, Laravel, PostgreSQL, and React." />
        <meta name="keywords" content="Fayaj Nakib, Software Engineer, Full-Stack Developer, Next.js, Laravel, PostgreSQL, React, Web Development, Bangladesh" />
        <meta name="author" content="Fayaj Nakib" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fayaj-nakib.github.io/" />
        <meta property="og:title" content="Fayaj Nakib - Full-Stack Software Engineer | Portfolio" />
        <meta property="og:description" content="Software Engineer specializing in scalable web applications, full-stack development, and production-ready backend systems." />
        <meta property="og:image" content="https://fayaj-nakib.github.io/profile.jpg" />
        <meta property="og:site_name" content="Fayaj Nakib Portfolio" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://fayaj-nakib.github.io/" />
        <meta property="twitter:title" content="Fayaj Nakib - Full-Stack Software Engineer | Portfolio" />
        <meta property="twitter:description" content="Software Engineer specializing in scalable web applications, full-stack development, and production-ready backend systems." />
        <meta property="twitter:image" content="https://fayaj-nakib.github.io/profile.jpg" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Fonts and Icons */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
