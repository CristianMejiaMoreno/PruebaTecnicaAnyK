    import { Product } from "../interfaces/products";
    import { Button } from "flowbite-react";
    import { Edit, Trash2 } from "lucide-react";

    interface TableProductsProps {
    products: Product[];
    onEdit: (product: Product) => void;
    onDelete: (product: Product) => void;
    }

    export function TableProducts({ products, onEdit, onDelete }: TableProductsProps) {
    return (
    <div className="relative overflow-x-auto">
    <table className="w-full min-w-[600px] text-sm text-left text-gray-800">
        <thead className="text-xs uppercase text-gray-800">
        <tr>
            <th scope="col" className="px-6 py-3">Producto</th>
            <th scope="col" className="px-6 py-3">Marca</th>
            <th scope="col" className="px-6 py-3">Categoría</th>
            <th scope="col" className="px-6 py-3">Precio</th>
            <th scope="col" className="px-6 py-3">Stock</th>
            <th scope="col" className="px-6 py-3 text-right">Acciones</th>
        </tr>
        </thead>
        <tbody className="divide-y divide-white/30">
        {products.map((product) => (
            <tr key={product.id} className="bg-transparent">
            <th scope="row" className="px-6 py-4 font-medium text-gray-700">{product.name}</th>
            <td className="px-6 py-4 text-gray-500">{product.brand}</td>
            <td className="px-6 py-4 text-gray-500">{product.category}</td>
            <td className="px-6 py-4 font-bold text-purple-500">${product.price}</td>
            <td className="px-6 py-4">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${product.inStock ? "bg-green-400/30 text-green-800" : "bg-red-400/30 text-gray-600"}`}>
                {product.inStock ? "En Stock" : "Agotado"}
                </span>
            </td>
            <td className="px-6 py-4 text-right">
                <div className="flex justify-end gap-2">
                <Button size="sm" className="bg-purple-500 text-white hover:bg-purple-800 border-none" onClick={() => onEdit(product)}>
                    <Edit className="h-4 w-4" />
                </Button>
                <Button size="sm" className="bg-red-400 text-white hover:bg-red-800 border-none" onClick={() => onDelete(product)}>
                    <Trash2 className="h-4 w-4" />
                </Button>
                </div>
            </td>
            </tr>
        ))}
        </tbody>
    </table>
    </div>

    );
    }
