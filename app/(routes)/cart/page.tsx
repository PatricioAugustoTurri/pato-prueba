"use client"

import CartItems from "@/components/CartItems"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/hooks/UseCart"
import { formatPrice } from "@/lib/formatPrice"

function CartPage() {
    const { items, removeAll } = useCart()
    const prices = items.map((product) => product.size.price);
    const totalPrice = prices.reduce((a, b) => a + b, 0)
    console.log(items)

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
                                        <div className="flex-col flex justify-start items-end my-8 mx-4">

                                        </div>
                                    </div>
                                    <Separator />
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
                            <Button className="w-full" onClick={() => { }}>Checkout</Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartPage