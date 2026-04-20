import Link from "next/link";
import Stripe from "stripe";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";

interface Props{
    product: Stripe.Product;
}

export const ProductCard = ({product}: Props) =>{
    const price = product.default_price as Stripe.Price;
    const [imageError, setImageError] = useState(false);
    
    const fallbackImage = "/placeholder-product.svg";
    const imageSrc = imageError || !product.images?.[0] ? fallbackImage : product.images[0];
    return(
       <Link href={`/products/${product.id}`} className="block h-full">
        <Card className="group hover:shadow-xl transition-all duration-300 h-full flex flex-col border-border 
                        overflow-hidden bg-card hover:border-primary/20 hover:scale-[1.02]">
            {/* Image Container */}
            <div className="relative h-60 w-full bg-muted">
                <Image
                    alt= {product.name}
                    src={imageSrc}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    onError={() => setImageError(true)}
                    unoptimized={imageError}
                  />
            </div>
           
           {/* Content Area */}
           <div className="flex flex-col flex-1 p-4">
                <CardHeader className="p-0 mb-2">
                    <CardTitle className="text-lg font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                        {product.name}
                    </CardTitle>
                </CardHeader>
                
                <CardContent className="p-0 flex flex-col flex-1 justify-between"> 
                    {product.description && (
                       <p className="text-muted-foreground text-sm mb-3 line-clamp-3 flex-1">
                        {product.description}
                       </p>
                    )}
                   
                   <div className="space-y-3">
                       {price && price.unit_amount && (
                          <div className="flex items-center justify-between">
                              <p className="text-xl font-bold text-foreground">
                                 ${(price.unit_amount / 100).toFixed(2)}
                             </p>
                             {product.metadata?.originalPrice && (
                                 <p className="text-sm text-muted-foreground line-through">
                                     ${product.metadata.originalPrice}
                                 </p>
                             )}
                          </div>
                        )}

                       <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 
                                        transition-all duration-300 transform group-hover:scale-105 
                                        border border-primary cursor-pointer">
                           View Details
                       </Button>
                   </div>
                </CardContent>
           </div>
        </Card>
       </Link>
    )
}