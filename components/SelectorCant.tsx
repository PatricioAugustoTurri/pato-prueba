"use client"

import { useState } from "react";

function SelectorCant() {
    const [cant, setCant] = useState(1);

    return (
        <div className="flex justify-center items-center gap-1 my-2">
            <button className="bg-orange-500 text-white px-10 py-2 rounded-md" onClick={() => setCant(cant + 1)}>+</button>
            <p className="px-10 py-2 ">{cant}</p>
            <button className="bg-orange-500 text-white px-10 py-2 rounded-md" onClick={() => {if(cant > 1) setCant(cant - 1)}}>-</button>
        </div>
    )
}

export default SelectorCant;