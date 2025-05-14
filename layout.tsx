import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CBTIS 29 - Centro de Bachillerato Tecnológico Industrial y de Servicios",
  description: "Sitio oficial del Centro de Bachillerato Tecnológico Industrial y de Servicios No. 29",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
