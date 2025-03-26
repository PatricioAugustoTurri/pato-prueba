"use client"

import LovedItemProducts from "@/components/LovedItemProducts"
import { useLovedProducts } from "@/hooks/UseLovedProdcuts"
import { ProductType } from "@/types/products"

function LovePage (){
    const {lovedItems} = useLovedProducts()

    return (
        <div className="max-w-4xl py-4 mx-auto sm:py-32 sm:px-24">
           <h1 className="text-2xl">
            Productos que te gustan
           </h1>
           <div>
            <div>
                {lovedItems.length === 0 && (
                    <p>No tienes productos favoritos</p>
                )}
                <ul>
                    {lovedItems.map((item:ProductType)=>{
                        return (
                            <LovedItemProducts key={item.id} product={item}/>
                        )
                    })}
                </ul>
            </div>
           </div>
        </div>
        
    )
}

export default LovePage