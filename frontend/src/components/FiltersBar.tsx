import { Button, Select, TextInput } from "flowbite-react";
import { Search, ArrowUpDown } from "lucide-react";

interface FiltersBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  sortOrder: "asc" | "desc";
  setSortOrder: (order: "asc" | "desc") => void;
  categories: string[];
}

export function FiltersBar({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  sortOrder,
  setSortOrder,
  categories,
}: FiltersBarProps) {

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 items-center">
        {/* buscador */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
          <TextInput
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-white/50 border-white/30"
          />
        </div>

        {/* select categorias */}
        <Select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full md:w-48 bg-white/50 border-white/30"
        >
          <option value="">Todas las categorias</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Select>

        {/* button ordenar precio */}
        <Button
          color="light"
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          className="w-full md:w-auto bg-white/50 border-white/30 hover:bg-white/70"
        >
          <ArrowUpDown className="h-4 w-4 mr-2" />
          Precio {sortOrder === "asc" ? "↑" : "↓"}
        </Button>

      </div>
    </>
  );
}
