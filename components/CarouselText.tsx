"use client"
import { useRouter } from "next/navigation"
import { Carousel, CarouselItem, CarouselContent } from "./ui/carousel"
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";

function CarouselText() {

    const dataCarousel: { id: number; title: string; description: string; link: string }[] = [
        {
            id: 1,
            title: "Buda",
            description: "La ciudad de la cultura budista",
            link: "/shop/buda"
        },
        {
            id: 2,
            title: "Arrozales",
            description: "Montaña de arroz en Vietnam",
            link: "/shop/arrozales"
        },
        {
            id: 3,
            title: "Volcan",
            description: "La ciudad de Antigua Guatemala con el volcán de fondo",
            link: "/shop/volcan"
        },
        {
            id: 4,
            title: "Tren Budista",
            description: "Un monje que se estaba acomodando en el tren",
            link: "/shop/tren-budista"
        }

    ]
    const router = useRouter()

    return (
        <div>
            <Carousel className="w-full max-w-4xl mx-auto"
                plugins={
                    [
                        Autoplay({
                            delay: 2500,
                        })
                    ]
                }
            >
                <CarouselContent>
                    {dataCarousel.map((data) => (
                        <CarouselItem key={data.id} onClick={() => { router.push(data.link) }}>
                            <div>
                                <Card className="shadow-none border-none bg-transparent">
                                    <CardContent className="flex flex-col justify-center items-center p-2 text-center">
                                        <p className="sm:text-lg text-wrap">{data.title}</p>
                                        <p className="text-xs sm:text-sm text-wrap">{data.description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}

                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default CarouselText;