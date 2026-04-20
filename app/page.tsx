import Image from "next/image";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel } from "@/components/carousel";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default async function Home() {
  const products = await stripe.products.list({
     expand: ["data.default_price"],
     limit: 10,
  });

  return (
    <main className="min-h-screen pb-20 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32">
      
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] opacity-20 blur-[120px] bg-gradient-to-tr from-primary to-black rounded-full pointer-events-none -z-10" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
            
            {/* Text Content */}
            <div className="max-w-2xl space-y-8 text-center lg:text-left z-10 mx-auto lg:mx-0">
              {/* Changed to H1 for SEO, added tighter tracking and gradient text */}
              <h1 className="text-4xl font-black tracking-tighter sm:text-6xl lg:text-7xl leading-[1.1]">
                <span className="block text-foreground gofa mb-2 drop-shadow-sm">
                  እንኳን ወደ ገበያ
                </span>
                <span className="block text-transparent gofa bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                  በደህና መጡ
                </span>
              </h1>
              
              <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl max-w-lg mx-auto lg:mx-0 font-medium">
                Discover the latest products at the best prices. Experience shopping reimagined with our premium, curated collection.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="group rounded-full px-8 py-6 text-base font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-primary/25"
                >
                  <Link href="/products" className="flex items-center gap-2">
                    Browse All Products
                    <ArrowRightIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Hero Image Container */}
            <div className="relative mx-auto w-full max-w-[450px] lg:max-w-[600px] flex justify-center z-10 group">
              {/* Image specific glow backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl transition-all duration-700 group-hover:blur-2xl" />
              
              <Image 
                alt="Hero Image"
                width={600}
                height={600}
                src="/daa.png"
                className="relative w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-transform duration-700 ease-out group-hover:-translate-y-4 group-hover:scale-105"
                loading="eager"
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* Carousel Section overlaps the hero slightly for continuity */}
      <section className="relative z-20 -mt-12 sm:-mt-16 px-4 sm:px-6 lg:px-8">
        <Carousel products={products.data} />
      </section>

    </main>
  );
}