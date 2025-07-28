import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { CartProvider } from "@/lib/cart-context"
import Navbar from "@/components/navbar"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Loja do Palmeiras - Produtos Oficiais",
  description: "Loja oficial do Palmeiras com camisas, acessórios e produtos do Verdão. Avanti Palestra!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <CartProvider>
          <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
            <Navbar />
            <main>{children}</main>
          </div>
          <Toaster />
        </CartProvider>
      </body>
    </html>
  )
}
