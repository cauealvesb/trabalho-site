"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ShoppingCart, Heart } from 'lucide-react'
import type { Product } from "@/lib/types"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/hooks/use-toast"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    addItem(product)
    toast({
      title: "Produto adicionado! 🏆",
      description: `${product.name} foi adicionado ao carrinho`,
      className: "border-green-500",
    })
  }

  return (
    <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 border-2 hover:border-green-200">
      <CardContent className="p-4 flex-1">
        <div className="aspect-square relative mb-4 bg-gradient-to-br from-green-50 to-white rounded-lg overflow-hidden border-2 border-green-100">
          <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          <div className="absolute top-2 right-2">
            <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center">
              <Heart className="h-4 w-4 text-white fill-current" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-bold text-lg line-clamp-2 text-green-800">{product.name}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
          <p className="text-sm text-green-600 font-semibold bg-green-50 px-2 py-1 rounded-full inline-block">
            {product.category}
          </p>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <span className="text-2xl font-bold text-green-700">R$ {product.price.toFixed(2)}</span>
        <Button
          onClick={handleAddToCart}
          className="bg-green-700 hover:bg-green-800 text-white flex items-center gap-2"
        >
          <ShoppingCart className="h-4 w-4" />
          Comprar
        </Button>
      </CardFooter>
    </Card>
  )
}
