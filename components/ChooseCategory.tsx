"use client"

import { useGetCategories } from "@/api/getProducts"
import { CategoryType } from "@/types/category"
import { ResponseType } from "@/types/response"
import Link from "next/link"


function ChooseCategory() {

    const { resulte, loading, error }: ResponseType = useGetCategories()

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 pb-4 text-3xl sm:pb-8">Elije tu categoria favorita</h3>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-1">
                {!loading && resulte !== undefined && (
                    resulte.map((cat: CategoryType) => {
                        return (
                            <Link
                                href={`/category/${cat.slug}`}
                                key={cat.id}
                                className="relative max-w-xs mx-auto overflow-hidden rounded-lg bg-no-repeat bg-cover"
                            >
                                <img 
                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${cat.image.url}`}
                                alt={cat.categoryName}
                                className="transition duration-300 ease-in-out rounded-lg hover:scale-110 sm:aspect-square aspect-video object-cover"
                                />
                                <p className="absolute w-full py-2 text-lg text-center text-white bottom-5 backdrop-blur-lg">{cat.categoryName}</p> 
                            </Link>
                        )
                    })
                )}
            </div>
        </div>
    )
}

export default ChooseCategory

/*
  {resulte.map((category: CategoryType) => {
                    <Link
                        key={category.id}
                        href={`/category/${category.slug}`}
                        className="relative max-w-xs mx-auto overflow-hidden rounded-lg bg-no-repeat bg-cover">
                        <img
                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${category.image.url}`}
                            alt={category.categoryName}
                            className="max-w-[270px] transition duration-300 ease-in-out rounded-lg hover:scale-110"
                        />
                    </Link>
                })}
*/