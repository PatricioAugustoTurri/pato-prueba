"use client"

import { useGetCategoryProduct } from "@/api/getCategoryProduct"
import { Separator } from "@/components/ui/separator"
import { ResponseType } from "@/types/response"
import { useParams, useRouter } from "next/navigation"
import FiltersControlsCategory from "../components/FiltersControlsCategory"
import FiltersOrigin from "../components/FiltersOrigin"

function CategoryPage() {

    const params = useParams()
    const categorySlug = params.categorySlug ?? "";
    const { resulte, loading }: ResponseType = useGetCategoryProduct(categorySlug)
    console.log(resulte)
    const router = useRouter()

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            {resulte !== null && !loading && (
                <h1 className="text-3xl">Fotos de {resulte[0].category.categoryName}</h1>
            )}
            <Separator className="my-2" />

            <div className="sm:flex sm:justify-between">
                <FiltersControlsCategory />
                <FiltersOrigin />
            </div>
        </div>
    )
}

export default CategoryPage