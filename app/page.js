import Link from "next/link";
import Banner from "./components/Home/Banner";
import Advertisement from "./components/Home/Advertisement";

export default function Home() {
  return (
    <div>
      <Banner />
      <Advertisement />
    </div>
  );
}
