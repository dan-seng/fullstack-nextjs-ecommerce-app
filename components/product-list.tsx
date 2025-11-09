"use client";

import Stripe from 'stripe';
import { ProductCard } from './product-card';
import { useState, useEffect } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface Props{
    products: Stripe.Product[];
}

export const ProductList = ({products}: Props) =>{
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [isLoading, setIsLoading] = useState(true);
    const [displayedProducts, setDisplayedProducts] = useState<Stripe.Product[]>([]);

    // Simulate loading animation
    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
            setDisplayedProducts(products);
        }, 500);
        return () => clearTimeout(timer);
    }, [products]);

    const filteredProduct = displayedProducts.filter((product) =>{
        const term = searchTerm.toLowerCase();
        const nameMatch = product.name.toLowerCase().includes(term);
        const descriptionMatch = product.description ? product.description.toLowerCase().includes(term) : false;
        return nameMatch || descriptionMatch;
    })

    return(
        <div className="space-y-8">
            {/* Search Bar */}
            <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                    <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder='Search products...'
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 bg-white 
                               focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent 
                               transition-all duration-300 placeholder-gray-400"
                    />
                </div>
            </div>

            {/* Results Count */}
            <div className="text-center">
                <p className="text-gray-600">
                    {searchTerm ? (
                        <>Found <span className="font-bold text-black">{filteredProduct.length}</span> products</>
                    ) : (
                        <>Showing <span className="font-bold text-black">{filteredProduct.length}</span> products</>
                    )}
                </p>
            </div>

            {/* Products Grid */}
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {isLoading ? (
                    // Loading Skeleton
                    Array.from({ length: 8 }).map((_, index) => (
                        <li key={index} className="animate-pulse">
                            <div className="bg-gray-200 rounded-xl h-80 flex flex-col overflow-hidden">
                                <div className="h-48 bg-gray-300 rounded-t-xl"></div>
                                <div className="flex-1 p-4 space-y-3">
                                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                                    <div className="h-3 bg-gray-300 rounded w-full"></div>
                                    <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                                    <div className="h-10 bg-gray-300 rounded mt-4"></div>
                                </div>
                            </div>
                        </li>
                    ))
                ) : filteredProduct.length > 0 ? (
                    // Actual Products
                    filteredProduct.map((product, index) => (
                        <li 
                            key={product.id} 
                            className="animate-fade-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                           <ProductCard product={product} /> 
                        </li>
                    ))
                ) : (
                    // No Results State
                    <li className="col-span-full text-center py-12">
                        <div className="max-w-md mx-auto space-y-4">
                            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
                                <MagnifyingGlassIcon className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-xl font-bold text-black">No products found</h3>
                            <p className="text-gray-600">
                                {searchTerm ? `No results for "${searchTerm}". Try different keywords.` : 'No products available.'}
                            </p>
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm('')}
                                    className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                                >
                                    Clear search
                                </button>
                            )}
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}