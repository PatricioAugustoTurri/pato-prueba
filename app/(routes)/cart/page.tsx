"use client"

import CartItems from "@/components/CartItems"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/hooks/UseCart"
import { formatPrice } from "@/lib/formatPrice"
import { MoveRight, SquareX } from "lucide-react"
import {loadStripe} from "@stripe/stripe-js";
import { makePaymentRequest } from "@/api/payment"

function CartPage() {
    const { items, removeItem } = useCart()
    const prices = items.map((product) => product.size.price * product.cant);
    const totalPrice = prices.reduce((a, b) => a + b, 0)
    
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "")
    
    const byStripe = async () =>{
        try{
            const stripe = await stripePromise
            const res = await makePaymentRequest.post("api/orders",{
                products: items
            })
            await stripe?.redirectToCheckout({
                sessionId: res.data.stripeSession.id
            })
        } catch (error){
            console.log(error)
        }
    }

    return (
        <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <h1 className="mb-5 text-3xl">Shopping Cart</h1>
            <div className="grid md:grid-cols-2 sm:gap-5">
                <div>
                    {items.length === 0 && (
                        <p>No hay productos en el carrito</p>
                    )}
                    <ul>
                        {items.map((item) => {
                            return (
                                <div key={item.id} >
                                    <div className="flex justify-between">
                                        <CartItems product={item} />
                                        <div className="flex flex-col">
                                            <p className="md:text-2xl text-lg my-6">{item.productName}</p>
                                            <div className="flex gap-1 text-sm">
                                                <p>Cantidad:</p>
                                                <p>{item.cant}</p>
                                            </div>
                                            <div className="flex gap-1 text-sm items-center">
                                                <p>Tamaño:</p>
                                                <p>{item.size.sizeName}</p>
                                                <MoveRight />
                                                <p>{formatPrice(item.size.price)}</p>
                                            </div>
                                            <div className="flex gap-1 text-sm items-center">
                                                <p>Precio:</p>
                                                <p>{formatPrice(item.size.price * item.cant)}</p>
                                            </div>
                                        </div>
                                        <SquareX className="w-6 h-6 cursor-pointer flex my-6 hover:fill-black duration-300 hover:text-white" onClick={() => removeItem(item.id)} />
                                    </div>
                                    <Separator className="my-2 sm:my-0"/>
                                </div>
                            )
                        })}
                    </ul>
                </div>
                <div className="max-w-xl py-4 sm:py-0">
                    <div className="p-6 rounded-lg bg-slate-100">
                        <p className="mb-3 text-lg font-semibold">Order Sumary</p>
                        <Separator />
                        <div className="flex justify-between gap-5 my-4">
                            <p>Order Total</p>
                            <p>{formatPrice(totalPrice)}</p>
                        </div>
                        <div className="flex items-center justify-center w-full mt-3">
                            <Button className="w-full cursor-pointer" onClick={() => {byStripe }}>Comprar</Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartPage