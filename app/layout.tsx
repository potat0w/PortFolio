import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { instrumentSerif, inter } from "./fonts"

export const metadata: Metadata = {
  title: "Kahon Binte Zaman, Full Stack Developer",
  description:
    "Full stack developer crafting clean, user-focused web applications.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSerif.variable} ${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
