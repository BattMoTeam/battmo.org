import "./globals.css"
import NavigationBar from "../components/NavigationBar";
import { ReactNode } from "react";
import Footer from "../components/Footer";
import Head from "next/head"; // optional, see note below

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Page title */}
        <title>My Website</title>

        {/* Favicon */}
        <link rel="icon" href="https://raw.githubusercontent.com/BattMoTeam/visual-identity/1bc87b07605d77fb3faa788c82f06ec2735ed31f/logos/battmo_logo_thumb.png" />
        {/* Optional: multiple sizes */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        {/* <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}

        {/* Optional: Apple touch icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
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
