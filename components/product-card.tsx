import Link from "next/link";
import Stripe from "stripe";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

interface Props{
    product: Stripe.Product;
}

export const ProductCard = ({product}: Props) =>{
    const price = product.default_price as Stripe.Price;
    return(
       <Link href={`/products/${product.id}`} className="block h-full">
        <Card className="group hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-200 
                        overflow-hidden bg-white hover:border-gray-300 hover:scale-[1.02]">
            {/* Image Container */}
            {product.images && product.images[0] &&(
                 <div className="relative h-60 w-full bg-gray-50">
                     <Image
                        alt= {product.name}
                        src={product.images[0]}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      />
                  </div>
           )}
           
           {/* Content Area */}
           <div className="flex flex-col flex-1 p-4">
                <CardHeader className="p-0 mb-2">
                    <CardTitle className="text-lg font-bold text-black line-clamp-2 group-hover:text-gray-700 transition-colors">
                        {product.name}
                    </CardTitle>
                </CardHeader>
                
                <CardContent className="p-0 flex flex-col flex-1 justify-between"> 
                    {product.description && (
                       <p className="text-gray-600 text-sm mb-3 line-clamp-3 flex-1">
                        {product.description}
                       </p>
                    )}
                   
                   <div className="space-y-3">
                       {price && price.unit_amount && (
                          <div className="flex items-center justify-between">
                              <p className="text-xl font-bold text-black">
                                 ${(price.unit_amount / 100).toFixed(2)}
                             </p>
                             {product.metadata?.originalPrice && (
                                 <p className="text-sm text-gray-500 line-through">
                                     ${product.metadata.originalPrice}
                                 </p>
                             )}
                          </div>
                        )}

                       <Button className="w-full bg-black text-white hover:bg-gray-800 
                                        transition-all duration-300 transform group-hover:scale-105 
                                        border border-black cursor-pointer">
                           View Details
                       </Button>
                   </div>
                </CardContent>
           </div>
        </Card>
       </Link>
    )
}