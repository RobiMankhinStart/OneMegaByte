import Link from "next/link";
import Banner from "./components/Home/Banner";
import Advertisement from "./components/Home/Advertisement";
import Category from "./components/Home/Category";
import HomeProList from "./components/Home/HomeProList";
import PopularPro from "./components/Home/PopularPro";
import Sale from "./components/Home/Sale";

export default function Home() {
  return (
    <div>
      <Banner />
      <Advertisement />
      <Category />
      <HomeProList />
      <PopularPro />
      <Sale />
    </div>
  );
}
