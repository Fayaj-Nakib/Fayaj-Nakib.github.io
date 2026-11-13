import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ── Dark mode FOUC prevention — runs before React hydrates ── */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t;try{t=localStorage.getItem('theme')}catch(e){}var p=window.matchMedia('(prefers-color-scheme:dark)').matches;document.documentElement.classList.toggle('dark',t==='dark'||(!t&&p))})()`,
          }}
        />

        {/* ── Google Fonts: Geist ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

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
