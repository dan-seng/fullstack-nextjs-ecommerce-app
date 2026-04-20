"use client";

import Stripe from "stripe";
import { Card } from "./ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface Props {
    products: Stripe.Product[];
}

export const Carousel = ({ products }: Props) => {
    const [current, setCurrent] = useState<number>(0);
    const [imageError, setImageError] = useState(false);
    
    const fallbackImage = "/placeholder-product.svg";
    const currentProduct = products[current];
    const price = currentProduct?.default_price as Stripe.Price;
    const imageSrc = imageError || !currentProduct?.images?.[0] ? fallbackImage : currentProduct.images[0];
    
    // Reset image error state when slide changes
    useEffect(() => {
        setImageError(false);
    }, [current]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev: number) => (prev + 1) % products.length);
        }, 5000); // Increased to 5s for a more relaxed, premium feel
        return () => clearInterval(interval);
    }, [products.length]);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % products.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + products.length) % products.length);
    const goToSlide = (index: number) => setCurrent(index);

    if (!products?.length) return null;

    return (
        <div className="relative group w-full max-w-7xl mx-auto">
            {/* Navigation Arrows */}
            <button 
                onClick={prevSlide}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 bg-white/10 backdrop-blur-md border border-white/20 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-white hover:text-black hover:scale-110 shadow-xl"
            >
                <ChevronLeftIcon className="w-6 h-6 stroke-2" />
            </button>
            
            <button 
                onClick={nextSlide}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 bg-white/10 backdrop-blur-md border border-white/20 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-white hover:text-black hover:scale-110 shadow-xl"
            >
                <ChevronRightIcon className="w-6 h-6 stroke-2" />
            </button>

            {/* Main Card Container */}
            <Card className="relative h-[500px] md:h-[650px] w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-neutral-950 shadow-2xl">
                
                {/* Background Glow / Ambiance */}
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-950 to-black opacity-80" />
                
                {/* Product Image */}
                <div className="absolute inset-0 flex items-center justify-center p-12 md:p-24 z-10">
                    <Image
                        alt={currentProduct.name}
                        src={imageSrc}
                        fill
                        className="object-contain p-8 md:p-16 drop-shadow-2xl transition-all duration-1000 ease-out group-hover:scale-110 group-hover:-translate-y-4"
                        priority
                        onError={() => setImageError(true)}
                        unoptimized={imageError}
                    />
                </div>
                
                {/* Heavy Bottom Gradient for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20 pointer-events-none" />

                {/* Top Indicators (Expanding Pills) */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-black/30 backdrop-blur-xl px-4 py-3 rounded-full border border-white/10 shadow-lg">
                    {products.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                                index === current 
                                    ? 'w-8 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]' 
                                    : 'w-2 bg-white/30 hover:bg-white/60'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
                
                {/* Bottom Content (Glassmorphism Pane) */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 z-30">
                    <div className="backdrop-blur-xl bg-white/10 border border-white/10 p-6 md:p-8 rounded-[2rem] shadow-2xl flex flex-col md:flex-row md:items-end justify-between gap-6 transform transition-transform duration-500 group-hover:bg-white/15">
                        
                        <div className="space-y-3 max-w-2xl">
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-none drop-shadow-md">
                                {currentProduct.name}
                            </h2>
                            
                            {currentProduct.description && (
                                <p className="text-sm md:text-base text-neutral-300 font-medium line-clamp-2 md:line-clamp-3 leading-relaxed">
                                    {currentProduct.description}
                                </p>
                            )}
                        </div>

                        {/* Price Badge */}
                        {price && price.unit_amount && (
                            <div className="shrink-0 flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full shadow-lg">
                                <span className="text-xl md:text-2xl font-black tracking-tight">
                                    ${(price.unit_amount / 100).toFixed(2)}
                                </span>
                                {currentProduct.metadata?.originalPrice && (
                                    <span className="text-sm md:text-base font-medium text-neutral-500 line-through">
                                        ${currentProduct.metadata.originalPrice}
                                    </span>
                                )}
                            </div>
                        )}

                    </div>
                </div>
            </Card>
        </div>
    );
};