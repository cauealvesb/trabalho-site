"use client"

import Link from "next/link"
import { ShoppingCart, Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"

export default function Navbar() {
  const { itemCount } = useCart()

  return (
    <nav className="bg-green-700 shadow-lg border-b-4 border-green-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <Heart className="h-6 w-6 text-green-700 fill-current" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Loja do Palmeiras</h1>
              <p className="text-green-100 text-xs">Produtos Oficiais</p>
            </div>
          </Link>

          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-green-600 bg-transparent">
                Produtos
              </Button>
            </Link>

            <Link href="/cart">
              <Button variant="outline" className="relative bg-white text-green-700 border-white hover:bg-green-50">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Carrinho
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow-500 text-green-800 text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
