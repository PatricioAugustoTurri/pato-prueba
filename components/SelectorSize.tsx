"use client"
import { Heart } from "lucide-react";
import { ProductType } from "@/types/products";
import { useCart } from "@/hooks/UseCart";
import { useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";
import { useGetSizesProducts } from "@/api/getSizesProducts";
import { ResponseType } from "@/types/response";
import { useLovedProducts } from "@/hooks/UseLovedProdcuts";


function SelectorSize({ props }: any) {
    const { addItem } = useCart()
    const [cant, setCant] = useState(1)
    const [selectSize, setSelectSize] = useState("")
    const { resulte }: ResponseType = useGetSizesProducts()
    const [alCarro, setAlCarro] = useState(false)
    const { addLovedItem } = useLovedProducts()

    const click = (a: ProductType) => {
        if (selectSize === "") {
            return setAlCarro(true)
        }

        a.cant = cant
        if (selectSize === "m") {
            a.size = resulte[0]
        } else if (selectSize === "l") {
            a.size = resulte[1]
        } else {
            a.size = resulte[2]
        }
        addItem(a)
    }

    return (
        <div className="py-4 sm:my-0 w-full">
            <div>
                <Select onValueChange={(value) => { setSelectSize(value); setAlCarro(false) }}>
                    <SelectTrigger className="w-full cursor-pointer">
                        <SelectValue placeholder="Selecciona el tamaño" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Tamaños</SelectLabel>
                            <SelectItem value="m">M</SelectItem>
                            <SelectItem value="l">L</SelectItem>
                            <SelectItem value="xl">XL</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                {alCarro && (<p className="text-sm text-red-500 my-0.5">Selecciona el tamaño</p>)}
            </div>
            <div className="flex justify-between items-center my-4 w-full">
                <button
                    className="bg-amber-600 py-2 w-full cursor-pointer"
                    onClick={() => setCant(cant + 1)}>
                    +
                </button>
                <p className="w-full py-2 text-center">{cant}</p>
                <button
                    className="w-full bg-amber-600 py-2 cursor-pointer"
                    onClick={() => { if (cant > 1) setCant(cant - 1) }}>
                    -
                </button>
            </div>
            <div className="flex justify-between items-center gap-4 my-4">
                <button
                    className="bg-black text-white w-full py-2 rounded-md text-xl cursor-pointer"
                    onClick={() => click(props)}
                >
                    Meter al carrito
                </button>
                <Heart className="transition duration-300 cursor-pointer hover:fill-black" width={30} strokeWidth={1} onClick={() => addLovedItem(props)} />
            </div>
        </div>
    )
}

export default SelectorSize;
