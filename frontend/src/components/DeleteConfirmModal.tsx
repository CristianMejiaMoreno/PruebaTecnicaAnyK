"use client"
import { Modal } from "./ui/Modal"
import { Button } from "flowbite-react"
import type { Product } from "../interfaces/products"

interface DeleteConfirmModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  product: Product | null
}

export function DeleteConfirmModal({ isOpen, onClose, onConfirm, product }: DeleteConfirmModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Confirmar Eliminación">
      <div className="py-4">
        <p className="text-gray-700">
          ¿Estás seguro de que deseas eliminar el producto{" "}
          <span className="font-semibold text-purple-600">"{product?.name}"</span>?
        </p>
        <p className="text-sm text-gray-500 mt-2">Esta acción no se puede deshacer.</p>
      </div>

      <div className="flex justify-end space-x-2 pt-4">
        <Button onClick={onClose} className="bg-gray-500 hover:bg-gray-600 text-white border-none">
          Cancelar
        </Button>
        <Button onClick={onConfirm} className="bg-red-500 hover:bg-red-600 text-white border-none">
          Eliminar
        </Button>
      </div>
    </Modal>
  )
}
