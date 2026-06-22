import CategorySection from "@/components/home/CategorySection";
import { Hero } from "@/components/home/Hero";
import PopularSection from "@/components/home/PopularSection";


export default async function Home() {

  return (
    <div className="w-full pb-16 space-y-16">
      <Hero />
      <CategorySection />
      <PopularSection />
    </div>
  )
}
