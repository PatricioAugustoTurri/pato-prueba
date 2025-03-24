"use client"

import { useGetCategoryProduct } from "@/api/getCategoryProduct"
import { Separator } from "@/components/ui/separator"
import { ProductType } from "@/types/products"
import { ResponseType } from "@/types/response"
import { useParams, useRouter } from "next/navigation"

function CategoryPage() {

    const params = useParams()
    const categorySlug = params.categorySlug ?? "";
    const { resulte, loading }: ResponseType = useGetCategoryProduct(categorySlug)
    const router = useRouter()

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24 px-12">
            {resulte !== null && !loading && (
                <h1 className="text-3xl">Fotos de {resulte[0].category.categoryName}</h1>
            )}
            <Separator className="my-2" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 my-10 gap-4">
                {resulte !== null && !loading && (
                    resulte.map((foto: any) => {
                        const { id, images, productName, category, slug ,documentId}: ProductType = foto
                        return (
                            <div key={id}>
                                <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images[0].url}`}
                                    alt={productName}
                                    className="rounded-sm object-cover aspect-video hover:scale-120 transition ease-in-out duration-700 cursor-pointer"
                                    onClick={() => { router.push(`/category/${category.slug}/${documentId}`) }} />
                            </div>
                        )
                    })
                )}
            </div>
        </div>
    )
}

export default CategoryPage