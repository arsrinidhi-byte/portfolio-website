import "./globals.css";

export const metadata = {
  title: "A.R. Srinidhi — Real Estate Sales Leader & Founder of Focal Town",
  description: "Personal portfolio of A.R. Srinidhi, Founder of Focal Town with 15+ years of real estate sales and digital marketing leadership in Bengaluru, India.",
  keywords: ["Real Estate", "Bengaluru", "Focal Town", "A.R. Srinidhi", "Sales Leadership", "Digital Marketing"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,62..125,100..900;1,62..125,100..900&family=IBM+Plex+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-[100dvh] bg-[#0a0908] text-[#e8e4dc] selection:bg-[#7d1f2e] selection:text-[#e8e4dc]">
        {children}
      </body>
    </html>
  );
}
