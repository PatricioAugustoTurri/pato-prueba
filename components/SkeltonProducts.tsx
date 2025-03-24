import { Skeleton } from "./ui/skeleton";

function SkeletonProducts() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 my-10 gap-4">
            <Skeleton className="h-[200px] w-[350px] rounded-xl"/>
            <div>
                <Skeleton className="h-4 w-[250px]"/>
                <Skeleton className="h-4 w-[250px]"/>
                <Skeleton className="h-4 w-[250px]"/>
                <Skeleton className="h-4 w-[250px]"/>
            </div>
        </div>
    )
}

export default SkeletonProducts;