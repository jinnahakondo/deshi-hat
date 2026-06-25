
import CategorySection from "@/components/home/CategorySection";
import { Hero } from "@/components/home/Hero";
import PopularSection from "@/components/home/PopularSection";
import { cateWiseProducts } from "@/data/categoryWiseProduct";
import CategoryWiseProducts from "@/components/home/category/CategoryWiseProducts";
import { Suspense } from "react";
import ProductCardSkeleton from "@/components/skeleton/ProductCardSekleton";


export default async function Home() {

  const loading = <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-16 gap-6">
    {
      [...Array(4)].map((_, i) => <ProductCardSkeleton key={i} />)
    }
  </div>

  return (
    <div className="w-full pb-16 space-y-16">
      <Hero />
      {/* <Suspense fallback={'loading...'}> */}
      <CategorySection />
      {/* </Suspense> */}
      <Suspense fallback={loading}>
      <PopularSection />
      </Suspense>
      {
        cateWiseProducts.map(product => <Suspense key={product.categorySlug} fallback={loading}>
          <CategoryWiseProducts
            key={product.categorySlug}
            categorySlug={product.categorySlug} >
            {product.title}
          </CategoryWiseProducts>
        </Suspense>)
      }

    </div>
  )
}
