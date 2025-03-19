"use client"
import { useGetAllProducts } from "@/api/getAllProducts";
import { ProductType } from "@/types/products";
import { ResponseType } from "@/types/response";
import Link from "next/link";

function CategoryPage() {
    const { resulte, loading }: ResponseType = useGetAllProducts()

    console.log(resulte)
    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24 px-10">
            <h1 className="text-3xl">Todas las Fotos</h1>
            {loading && (
                <h1 className="text-xl text-center">Cargando...</h1>
            )}
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 my-10 gap-4">
                {resulte !== null && !loading && (
                    resulte.map((foto: any) => {
                        const { id, images, productName, category, }: ProductType = foto
                        return (
                            <div key={id}>
                                <Link href={`/category/${category.slug}/${foto.documentId}`}>
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images[0].url}`}
                                        alt={productName}
                                        className="rounded-sm object-cover aspect-video hover:scale-120 transition ease-in-out duration-700" />
                                </Link>
                            </div>
                        )
                    })
                )}</div>
        </div>
    )
}

export default CategoryPage;