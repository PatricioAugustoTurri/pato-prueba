"use client"

function ButtonCart() {
    return (
        <div className="flex justify-center items-center gap-1 my-4">
            <button
                className="bg-black text-white px-14 py-4 rounded-md text-xl"
                onClick={() => console.log("Agregar al carrito")}
            >
                Agregar al carrito
            </button>
        </div>
    )
}

export default ButtonCart;