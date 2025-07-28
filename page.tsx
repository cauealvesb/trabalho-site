"use client"

import { useState, useMemo } from "react"
import ProductCard from "@/components/product-card"
import ProductFilters from "@/components/product-filters"
import { products, categories } from "@/lib/products-data"
import { Heart, Trophy, Star } from 'lucide-react'

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-700 to-green-800 rounded-2xl p-8 mb-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2 flex items-center">
              <Heart className="mr-3 h-10 w-10 fill-current" />
              Loja do Palmeiras
            </h1>
            <p className="text-green-100 text-lg mb-4">Produtos oficiais do maior campeão do Brasil 🏆</p>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <Trophy className="mr-1 h-4 w-4" />
                <span>11x Campeão Brasileiro</span>
              </div>
              <div className="flex items-center">
                <Star className="mr-1 h-4 w-4" />
                <span>Produtos Oficiais</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
              <Heart className="h-16 w-16 text-green-700 fill-current" />
            </div>
          </div>
        </div>
      </div>

      <ProductFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categories={categories}
      />

      <div className="mb-6 flex items-center justify-between">
        <p className="text-green-700 font-semibold">
          {filteredProducts.length} produto{filteredProducts.length !== 1 ? "s" : ""} encontrado
          {filteredProducts.length !== 1 ? "s" : ""}
        </p>
        <p className="text-sm text-green-600">Avanti Palestra! 💚</p>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-green-400 text-6xl mb-4">
            <Heart className="mx-auto h-24 w-24" />
          </div>
          <h3 className="text-xl font-bold text-green-700 mb-2">Nenhum produto encontrado</h3>
          <p className="text-green-600">Tente ajustar os filtros ou buscar por outros produtos do Verdão</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="mt-16 bg-green-800 rounded-2xl p-8 text-white text-center">
        <Heart className="mx-auto h-12 w-12 mb-4 fill-current" />
        <h3 className="text-2xl font-bold mb-2">Avanti Palestra!</h3>
        <p className="text-green-100">Produtos oficiais do Palmeiras com qualidade e paixão pelo Verdão 💚</p>
      </div>
    </div>
  )
}
