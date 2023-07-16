import { HomeBanner } from "../../components/Home/HomeBanner";
import { HomeContentDiscount } from "../../components/Home/HomeContentDiscount";
import { ListProduct } from "../../components/Home/ListProduct";
export const HomePage = () => {
  return (
    <div>
      <HomeBanner />
      <HomeContentDiscount />
      <ListProduct />
    </div>
  )
}