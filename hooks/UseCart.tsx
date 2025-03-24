import { ProductType } from "@/types/products"
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { toast } from "sonner"
import { X } from "lucide-react";



interface CartStore {
    items: ProductType[];
    addItem: (data: ProductType) => void;
    removeItem: (id: number) => void;
    removeAll: () => void;
}

export const useCart = create(persist<CartStore>((set,get)=>({
    items: [],
    addItem: (data: ProductType) => {
        const currentItems = get().items
        const existingItem = currentItems.find((item) => item.id === data.id)

        if (existingItem) {
            return  toast("El ya esta en el carrito",{
                action:{
                    label:<X size={20} strokeWidth={2}/>,
                    onClick:()=>{
                        
                    }
                }
            })
        }
        set({
            items:[...get().items,data]
        })
        toast("El produto se agrego al carrito",{
            action:{
                label:<X size={20} strokeWidth={2}/>,
                onClick:()=>{
                    
                }
            }
        })
    },
    removeItem: (id: number) => {
        set({items:[...get().items.filter((item) => item.id !== id)]})
        toast("El producto se ha eliminado del carrito",{
            action:{
                label:<X size={20} strokeWidth={2}/>,
                onClick:()=>{
                    
                }
            }
        })
    },
    removeAll: () => {
        set({items:[]})
    }
}),{
    name:"cart-storage",
    storage:createJSONStorage(() => localStorage),
}))