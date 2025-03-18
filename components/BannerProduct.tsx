import Link from "next/link";
import { buttonVariants } from "./ui/button";

function BannerProduct() {
    return (
        <>
            <div className="mt-4 text-center">
                <p>Sumergete en una experiencia única</p>
                <h4 className="mt-2 text-5xl font-extrabold uppercase">Mis mejores fotos</h4>
                <p className="my-2 text-lg">Despierta tu curiosidad con cada una de nuestras fotos</p>
                <Link href={"#"} className={buttonVariants()}>Comprar</Link>
            </div>
            <div className="h-[350px] bg-cover lg:h-[900px] bg-[url('/one-peace.png')] bg-center mt-5">

            </div>
        </>
    )
}

export default BannerProduct;