"use client"
import { useCart } from "@/hooks/UseCart"
import { ProductType } from "@/types/products"
import { useRouter } from "next/navigation"

interface CartItemsProps {
    product: ProductType
}

function CartItems(props: CartItemsProps) {
    const { product } = props
    const router = useRouter()
    const { removeItem } = useCart()

    return (
        <li className="flex py-6 border-b">
            <div onClick={() => router.push(`/product/${product.documentId}`)}>
                <img
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`}
                    alt={product.productName}
                    className="w-24 h-24 overflow-hidden rounded-sm sm:w-auto sm:h-32 object-cover" />
            </div>
        </li>
    )
}

export default CartItems