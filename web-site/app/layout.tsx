import "./globals.css"
import NavigationBar from "../components/NavigationBar";
import { ReactNode } from "react";
import Footer from "../components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Page title */}
        <title>My Website</title>

        {/* Favicon */}
        <link rel="icon" href="battmo_logo_thumb.svg" />
        {/* Optional: multiple sizes */}
        {/* <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        {/* <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}

        {/* Optional: Apple touch icon */}
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /> */} 
      </head>

      <body>
        <div className="flex flex-col min-h-screen">
          <NavigationBar />
          <main className="p-6">{children}</main>
        </div>

        <Footer />
      </body>
    </html>
  );
}
