"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Minus, Plus, Trash2 } from 'lucide-react'
import type { CartItem } from "@/lib/types"
import { useCart } from "@/lib/cart-context"

interface CartItemProps {
  item: CartItem
}

export default function CartItemComponent({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart()

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(item.product.id)
    } else {
      updateQuantity(item.product.id, newQuantity)
    }
  }

  const subtotal = item.product.price * item.quantity

  return (
    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border-2 border-green-100 hover:border-green-200 transition-colors">
      <div className="relative w-20 h-20 bg-gradient-to-br from-green-50 to-white rounded-lg overflow-hidden border-2 border-green-100">
        <Image src={item.product.image || "/placeholder.svg"} alt={item.product.name} fill className="object-cover" />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-lg truncate text-green-800">{item.product.name}</h3>
        <p className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full inline-block">
          {item.product.category}
        </p>
        <p className="text-lg font-bold text-green-700 mt-1">R$ {item.product.price.toFixed(2)}</p>
      </div>

      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleQuantityChange(item.quantity - 1)}
          disabled={item.quantity <= 1}
          className="border-green-300 text-green-700 hover:bg-green-50"
        >
          <Minus className="h-4 w-4" />
        </Button>

        <span className="w-12 text-center font-bold text-lg text-green-800">{item.quantity}</span>

        <Button
          variant="outline"
          size="sm"
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className="border-green-300 text-green-700 hover:bg-green-50"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <div className="text-right">
        <p className="font-bold text-xl text-green-700">R$ {subtotal.toFixed(2)}</p>
        <Button
          variant="destructive"
          size="sm"
          onClick={() => removeItem(item.product.id)}
          className="mt-2 bg-red-600 hover:bg-red-700"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
