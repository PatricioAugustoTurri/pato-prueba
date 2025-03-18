import BannerDiscount from "@/components/BannerDiscount";
import BannerProduct from "@/components/BannerProduct";
import CarouselText from "@/components/CarouselText";
import ChooseCategory from "@/components/ChooseCategory";
import FeaturedComponents from "@/components/FeaturedComponents";

function HomePage() {
  return (
    <div className="relative z-0 ">
      <CarouselText />
      <FeaturedComponents />
      <BannerDiscount />
      <ChooseCategory />
      <BannerProduct />
    </div>
  )
}

export default HomePage;