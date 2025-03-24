"use client"

import useGetFeaturedProducts from "@/api/useGetFeaturedProducts";
import { ResponseType } from "@/types/response";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import SkeletonSchema from "./SkeletonSchema";
import { ProductType } from "@/types/products";
import { Expand } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import IconButton from "./IconButton";
import { useRouter } from "next/navigation";

const FeaturedComponents = () => {

    const { loading, resulte }: ResponseType = useGetFeaturedProducts()
    const router = useRouter()

    return (
        <div className="w-full py-4 sm:py-16 sm:px-24 mx-auto">
            <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>
            <Carousel>
                <CarouselContent className="-ml-2 md:-ml-4">
                    {loading && (
                        <SkeletonSchema grid={3} />
                    )}
                    {resulte !== null && (
                        resulte.map((product: ProductType) => {
                            const { id, productName, slug, description, active, isFeatured, price, images, category, documentId } = product;
                            return (
                                <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3 group">
                                    <div className="p-1">
                                        <Card className="py-4 border border-gray-200 shadow-none">
                                            <CardContent className="relative flex items-center justify-center">
                                                <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images[0].url}`}
                                                    alt="Image"
                                                    className="aspect-video rounded-sm object-cover"
                                                />
                                                <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                                                    <div className="flex gap-x-6 justify-center text-white">
                                                        <IconButton
                                                            onClick={() => router.push(`/category/${category.slug}/${documentId}`)}
                                                            icon={<Expand size={20} />}
                                                            className="text-gray-600"
                                                        />

                                                    </div>
                                                </div>
                                            </CardContent>
                                            <div className="flex justify-between gap-4 px-8">
                                                <h3 className="text-base">{productName}</h3>
                                            </div>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            )
                        })
                    )}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext className="hidden sm:flex" />
            </Carousel>
        </div>
    )
}

export default FeaturedComponents;
