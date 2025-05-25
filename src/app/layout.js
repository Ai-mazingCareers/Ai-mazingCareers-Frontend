import { Geist, Geist_Mono } from "next/font/google";
import "./style/layout.css";
import Navbar from "./components/Navbar/Navbar";
import { SharedProvider } from "./context/SharedContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ai-mazingCareers",
  description: "Unlock Your Career Potential with AimazingCareers' Tailored Job Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <SharedProvider>
        <Navbar/>
        {children}
        </SharedProvider>
      </body>
    </html>
  );
}
