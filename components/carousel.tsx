"use client";

import Stripe from "stripe";
import { Card, CardContent, CardTitle } from "./ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface Props {
    products: Stripe.Product[];
}

export const Carousel = ({ products }: Props) => {
    const [current, setCurrent] = useState<number>(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev: number) => (prev + 1) % products.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [products.length]);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % products.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + products.length) % products.length);
    };

    const goToSlide = (index: number) => {
        setCurrent(index);
    };

    const currentProduct = products[current];
    const price = currentProduct.default_price as Stripe.Price;

    return (
        <div className="relative group">
           
            <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/80 text-white p-2 rounded-full 
                         opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black 
                         hover:scale-110 lg:opacity-100 lg:bg-black/50"
            >
                <ChevronLeftIcon className="w-6 h-6" />
            </button>
            
            <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/80 text-white p-2 rounded-full 
                         opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black 
                         hover:scale-110 lg:opacity-100 lg:bg-black/50"
            >
                <ChevronRightIcon className="w-6 h-6" />
            </button>

            <Card className="relative overflow-hidden rounded-xl shadow-2xl border-0 bg-linear-to-br from-gray-50 to-white">
                {currentProduct.images && currentProduct.images[0] && (
                    <div className="relative h-96 w-full md:h-[500px]">
                        <Image
                            alt={currentProduct.name}
                            src={currentProduct.images[0]}
                            fill
                            className="object-contain transition-transform duration-700 ease-out"
                            priority
                        />
                        
                       
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                    </div>
                )}
                
                
                <CardContent className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                    <div className="space-y-3 md:space-y-4">
                        <CardTitle className="text-2xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                            {currentProduct.name}
                        </CardTitle>
                        
                        {price && price.unit_amount && (
                            <div className="flex items-center gap-4">
                                <p className="text-xl font-semibold md:text-2xl lg:text-3xl">
                                    ${(price.unit_amount / 100).toFixed(2)}
                                </p>
                                {currentProduct.metadata?.originalPrice && (
                                    <p className="text-lg line-through text-gray-300 md:text-xl">
                                        ${currentProduct.metadata.originalPrice}
                                    </p>
                                )}
                            </div>
                        )}
                        
                        {currentProduct.description && (
                            <p className="text-sm text-gray-200 max-w-2xl md:text-base lg:text-lg">
                                {currentProduct.description}
                            </p>
                        )}
                    </div>
                </CardContent>

                <div className="absolute top-4 left-4 right-4 z-10">
                    <div className="w-full bg-white/30 rounded-full h-1">
                        <div 
                            className="bg-white h-1 rounded-full transition-all duration-100 ease-linear"
                            style={{ width: `${((current + 1) / products.length) * 100}%` }}
                        />
                    </div>
                </div>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2 md:bottom-6">
                    {products.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 md:w-3 md:h-3 ${
                                index === current 
                                    ? 'bg-white scale-125' 
                                    : 'bg-white/50 hover:bg-white/80'
                            }`}
                        />
                    ))}
                </div>
            </Card>
        </div>
    );
};