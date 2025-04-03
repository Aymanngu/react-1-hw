import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/ui/Navbar";  // Import Navbar
import { Footer } from "@/components/ui/Footer";  // Import Footer

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Galactica",
  description: "Your space travel agency",
};

export const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* Navbar will be displayed on every page */}
        {children} {/* This renders the content of each page */}
        <Footer /> {/* Footer will be displayed on every page */}
      </body>
    </html>
  );
};

export default RootLayout;
