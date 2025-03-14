"use client"
import { useRouter } from "next/navigation"
import { Carousel } from "./ui/carousel"

function CarouselText() {

    const dataCarousel: { id: number; title: string; description: string; link:string }[] = [
        {
            id: 1,
            title: "Buda",
            description:"La ciudad de la cultura budista",
            link:"/shop/buda"
        },
        {
            id: 2,
            title: "Arrozales",
            description:"Montaña de arroz en Vietnam",
            link:"/shop/arrozales"
        },
        {
            id: 3,
            title: "Volcan",
            description:"La ciudad de Antigua Guatemala con el volcán de fondo",
            link:"/shop/volcan"
        },
        {
            id: 4,
            title: "Tren Budista",
            description:"Un monje que se estaba acomodando en el tren",
            link:"/shop/tren-budista"
        }

    ]
    const router = useRouter()
    
    return (
        <div>
            <p>Nada todavia</p>
            <Carousel>

            </Carousel>
        </div>
    )
}

export default CarouselText;