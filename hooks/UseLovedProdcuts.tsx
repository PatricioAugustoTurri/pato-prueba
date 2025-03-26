import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { ProductType } from "@/types/products";
import { toast } from "sonner";
import { X } from "lucide-react";

interface UseLovedProductsType {
    lovedItems: ProductType[];
    addLovedItem: (data: ProductType) => void;
    remuveLovedItem: (id: number) => void;
}

export const useLovedProducts = create(persist<UseLovedProductsType>((set, get) => ({
    lovedItems: [],
    addLovedItem: (data: ProductType) => {
        const currentLovedItems = get().lovedItems;
        const existingItems = currentLovedItems.find((item) => item.id === data.id)
        
        if (existingItems) {
            return toast("El producto ya esta en tus favoritos", {
                action: {
                    label: <X />,
                    onClick: () => { }
                }
            })
        }
        set({
            lovedItems: [...get().lovedItems, data]
        })
        toast("El producto se agrego a mis favoritos", {
            action: {
                label: <X />,
                onClick: () => { }
            }
        })
    },
    remuveLovedItem: (id: number) => {
        set({
            lovedItems: [...get().lovedItems.filter((item) => item.id !== id)]
        })
        toast("El producto se ha eliminado de mis favoritos", {
            action: {
                label: <X />,
                onClick: () => { }
            }
        })
    }
}), {
    name: "loved-products-storage",
    storage: createJSONStorage(() => localStorage)
}))