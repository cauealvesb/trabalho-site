"use client"

import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from 'lucide-react'

interface ProductFiltersProps {
  searchTerm: string
  onSearchChange: (value: string) => void
  selectedCategory: string
  onCategoryChange: (value: string) => void
  categories: string[]
}

export default function ProductFilters({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
}: ProductFiltersProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-2 border-green-100 mb-8">
      <h2 className="text-lg font-bold text-green-800 mb-4 flex items-center">
        <Search className="mr-2 h-5 w-5" />
        Encontre seus produtos do Verdão
      </h2>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400 h-4 w-4" />
          <Input
            placeholder="Buscar produtos do Palmeiras..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 border-green-200 focus:border-green-500"
          />
        </div>

        <div className="w-full sm:w-64">
          <Select value={selectedCategory} onValueChange={onCategoryChange}>
            <SelectTrigger className="border-green-200 focus:border-green-500">
              <SelectValue placeholder="Todas as categorias" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as categorias</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
