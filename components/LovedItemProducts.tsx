"use client"

import { useLovedProducts } from "@/hooks/UseLovedProdcuts";
import { ProductType } from "@/types/products";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface LovedItemProductsProps {
    product: ProductType
}


function LovedItemProducts(props: LovedItemProductsProps) {
    const { product } = props
    const router = useRouter()
    const { remuveLovedItem } = useLovedProducts()

    return (
        <li className="flex py-6 border-b">
            <div>
                <img
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`}
                    alt={product.productName}
                    className="w-24 h-24 overflow-hidden rounded-md sm:h-32 sm:w-auto"
                />
            </div>
            <div className="flex justify-between flex-1 px-6">
                <div>
                    <h2 className="text-lg font-medium">{product.productName}</h2>
                    <div className="flex items-center justify-between gap-3">
                        <p className="px-2 text-xs bg-amber-500 rounded-full text-white">{product.category.categoryName}</p>
                    </div>
                    <Button
                        className="mt-5 rounded-full cursor-pointer"
                        onClick={() => {router.push(`/category/${product.category}/${product.documentId}`)}}>
                        Saber más</Button>
                </div>
                <div>
                    <button className={cn("rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition cursor-pointer")}>
                        <X size={20} onClick={() => remuveLovedItem(product.id)} />
                    </button>
                </div>
            </div>
        </li>
    )
}

export default LovedItemProducts;