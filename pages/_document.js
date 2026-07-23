import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ── Dark mode FOUC prevention — runs before React hydrates ── */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme'),p=window.matchMedia('(prefers-color-scheme:dark)').matches;if(t==='dark'||(t===null&&p)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />

        {/* ── Google Fonts: Geist ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* ── Primary Meta Tags ── */}
        <meta name="title"         content="Fayaj Nakib — Full-Stack Software Engineer" />
        <meta name="description"   content="Software Engineer specializing in scalable web applications, full-stack development, and production-ready backend systems. Next.js · Laravel · PostgreSQL · React." />
        <meta name="keywords"      content="Fayaj Nakib, Software Engineer, Full-Stack Developer, Next.js, Laravel, PostgreSQL, React, Web Development, Bangladesh" />
        <meta name="author"        content="Fayaj Nakib" />
        <meta name="robots"        content="index, follow" />
        <meta name="language"      content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="theme-color"   content="#064E3B" />

        {/* ── Open Graph ── */}
        <meta property="og:type"        content="website" />
        <meta property="og:url"         content="https://fayaj-nakib.github.io/" />
        <meta property="og:title"       content="Fayaj Nakib — Full-Stack Software Engineer" />
        <meta property="og:description" content="Software Engineer specializing in scalable web applications, full-stack development, and production-ready backend systems." />
        <meta property="og:image"       content="https://fayaj-nakib.github.io/profile.jpg" />
        <meta property="og:site_name"   content="Fayaj Nakib" />

        {/* ── Twitter Card ── */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:url"         content="https://fayaj-nakib.github.io/" />
        <meta name="twitter:title"       content="Fayaj Nakib — Full-Stack Software Engineer" />
        <meta name="twitter:description" content="Software Engineer specializing in scalable web applications, full-stack development, and production-ready backend systems." />
        <meta name="twitter:image"       content="https://fayaj-nakib.github.io/profile.jpg" />

        {/* ── Favicon ── */}
        <link rel="icon" href="/favicon.ico" />

        {/* ── Icon libraries ── */}
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
