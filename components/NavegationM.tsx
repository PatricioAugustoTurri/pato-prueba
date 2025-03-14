"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function NavegationM() {

    const menu: { id: number, title: string, href: string }[] = [
        { id: 1, title: "Home", href: "/" },
        { id: 2, title: "Shop", href: "/shop" },
        { id: 3, title: "About", href: "/about" },
        { id: 4, title: "Contact", href: "/contact" },
        { id: 5, title: "Blog", href: "/blog" },
    ]

    const [drawerOpen, setDrawerOpen] = useState(false);
    return (
        <div>
            <Menu strokeWidth={2} size={30} className="cursor-pointer text-black" onClick={() => setDrawerOpen(!drawerOpen)} />
            {drawerOpen && <div className="h-full w-full z-10 fixed top-0 left-0 bg-black opacity-50" onClick={() => setDrawerOpen(!drawerOpen)}></div>}
            <div className={`fixed top-0 left-0 h-full w-64 bg-green-100 text-white transform transition-transform duration-500 ease-in-out z-20
            ${drawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col gap-6 px-10 py-14 text-black text-xl">
                    {menu.map((item) => (
                        <Link href={item.href}
                            key={item.id}
                            onClick={() => { setDrawerOpen(!drawerOpen) }}>
                                {item.title}
                        </Link>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default NavegationM