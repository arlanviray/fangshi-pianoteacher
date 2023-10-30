import "./globals.scss"
import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "FangShi | Online Mandarin",
  description:
    "Unlock the richness of Mandarin with our personalized online courses, fostering language fluency and cultural understanding. Join us today at Online Mandarin Teacher for an immersive learning experience.",
}
// fonts
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })

// layouts
import Header from "./layouts/Header"
import Footer from "./layouts/Footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
