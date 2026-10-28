import "./globals.css";

export const metadata = {
  title: "Srinidhi A.R. — Real Estate Sales Leader & Founder of Focal Town",
  description: "Personal portfolio of Srinidhi A.R., Founder of Focal Town with 15+ years of real estate sales and marketing leadership in Bengaluru.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@700;800;900&family=Red+Hat+Text:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-[100dvh] bg-[#e6dbc7] text-[#062b8a] selection:bg-[#062b8a] selection:text-[#e6dbc7]">
        {children}
      </body>
    </html>
  );
}

