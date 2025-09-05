import { Card, Button } from "flowbite-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Product } from "../interfaces/products";

interface PaginationTableProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  ITEMS_PER_PAGE: number;
  filteredAndSortedProducts: Product[];
}

export default function PaginationTable({
  totalPages,
  currentPage,
  setCurrentPage,
  ITEMS_PER_PAGE,
  filteredAndSortedProducts,
}: PaginationTableProps) {
  return (
    <>
      {totalPages > 1 && (
          <div className="p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Mostrando {(currentPage - 1) * ITEMS_PER_PAGE + 1} a{" "}
                {Math.min(currentPage * ITEMS_PER_PAGE, filteredAndSortedProducts.length)} de{" "}
                {filteredAndSortedProducts.length} productos
              </p>
              <div className="flex items-center gap-2">
                <Button
                  color="light"
                  size="sm"
                  onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                  disabled={currentPage === 1}
                  className="bg-white/30 border-white/40 hover:bg-white/50"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm font-medium text-gray-700 px-3">
                  Página {currentPage} de {totalPages}
                </span>
                <Button
                  color="light"
                  size="sm"
                  onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="bg-white/30 border-white/40 hover:bg-white/50"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
      )}

      {filteredAndSortedProducts.length === 0 && (
        <Card className="bg-white/20 backdrop-blur-md border-white/30">
          <div className="p-12 text-center">
            <p className="text-gray-600 text-lg">No se encontraron productos</p>
          </div>
        </Card>
      )}
    </>
  );
}