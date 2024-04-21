import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PageBackground from "@/components/page-background"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dospolov Blog",
  description: "Marat Dospolov's blog - Javscript Tech Leader",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/avatar.png" />
      </head>
      <body
        className={cn(
          inter.className,
          "bg-gray-900 text-gray-200 tracking-tight flex flex-col min-h-screen overflow-hidden"
        )}
      >
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageBackground />
        </div>
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  )
}
