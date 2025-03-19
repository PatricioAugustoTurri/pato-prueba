"use client"
import { useGetProdcut } from "@/api/getProduct"
import ButtonCart from "@/components/ButtonCart"
import SelectorCant from "@/components/SelectorCant"
import SelectorSize from "@/components/SelectorSize"
import { ResponseType } from "@/types/response"
import { useParams } from "next/navigation"

function ProdcutPage() {
    const params = useParams()
    const productSlug = params.productSlug ?? ""
    const { resulte, loading }: ResponseType = useGetProdcut(productSlug)
    console.log(resulte)

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24 px-12">
            {loading && <p className="text-center text-xl">Loading...</p>}
            {resulte !== null && !loading && (
                <div className="flex justify-between flex-col sm:flex-row">
                    <img
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${resulte.images[0].url}`}
                        alt={resulte.productName}
                        className=" sm:w-1/2 object-cover aspect-auto rounded-lg sm:hover:scale-110 hover:scale-105 transition ease-in-out duration-500"
                    />
                    <div className="flex flex-col justify-start items-start sm:w-1/2 gap-2 sm:mx-10 my-10 sm:my-0">
                        <h1 className="text-3xl">{resulte.productName}</h1>
                        <p>{resulte.description}</p>
                        <SelectorSize />
                        <SelectorCant/>
                        <ButtonCart/>
                    </div>
                </div>
            )}

        </div>
    )
}

export default ProdcutPage