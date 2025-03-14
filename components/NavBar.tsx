"use client";
import { Heart, ShoppingCart, User } from "lucide-react";
import { Oi } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import NavegationD from "./NavegationD";
import NavegationM from "./NavegationM";

export const oi = Oi({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin"],
})

function NavBar() {
    const [hasShadow, setHasShadow] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setHasShadow(true);
            } else {
                setHasShadow(false);
            }
        };
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className={`fixed flex justify-between items-center md:px-20 px-6 lg:px-24 py-8 mb-8 w-screen h-48 transition-shadow top-0 left-0 bg-white
                            ${hasShadow ? "shadow-md" : ""}`}>
            <div className="flex md:hidden gap-4 justify-between items-center">
                <NavegationM/>
            </div>
            <h1 className={`${oi.className} lg:text-3xl text-orange-500 cursor-pointer text-lg`} onClick={()=>router.push("/")}>Pato Turri</h1>
            <div className="md:flex gap-10 hidden justify-between items-center">
                <NavegationD/>
            </div>
            <div className="flex gap-6 justify-between items-center">
                <ShoppingCart strokeWidth={1} className="cursor-pointer" onClick={()=>router.push("/cart")}/>
                <Heart strokeWidth={1} className="cursor-pointer" onClick={()=>router.push("/wishlist")}/>
                <User strokeWidth={1} className="cursor-pointer" onClick={()=>router.push("/account")}/>
            </div>
        </div>
    )

}

export default NavBar;
