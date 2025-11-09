"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartStore } from "@/store/cart-store"
import { checkoutAction } from "./checkout-action";
import EmptyCart from "@/components/empty-carts";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loading from "@/components/loading";

export default function Checkout(){
    const { items, removeItem, addItem, clearCart } = useCartStore();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if (!isMounted) {
        return (
            <Loading />
        );
    }

    if (items.length === 0) {
        return <EmptyCart />;
    }
    
    return(
        <div className="container mx-auto px-4 py-8 max-w-2xl">
            <h1 className="text-3xl font-bold mb-8">Checkout</h1>
            
            <Card className="mb-4">
                <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {items.map((item) => (
                        <div key={item.id} className="flex gap-4 border-b pb-4 last:border-0">
                            {item.imageUrl && (
                                <div className="relative h-16 w-16 bg-gray-50 rounded border">
                                    <Image
                                        alt={item.name}
                                        src={item.imageUrl}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )}
                            
                            <div className="flex-1">
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium">{item.name}</span>
                                    <span>${((item.price * item.quantity) / 100).toFixed(2)}</span>
                                </div>
                                
                                <div className="flex items-center gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => removeItem(item.id)}
                                        className="h-8 w-8 p-0"
                                    >-</Button>
                                    <span className="w-8 text-center">{item.quantity}</span>
                                    <Button 
                                        variant="outline"
                                        size="sm"
                                        onClick={() => addItem({...item, quantity: 1})}
                                        className="h-8 w-8 p-0"
                                    >+</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    <div className="border-t pt-4 font-bold text-lg">
                        Total: ${(total / 100).toFixed(2)}
                    </div>
                </CardContent>
            </Card>

            <div className="space-y-2">
                <form action={checkoutAction}>
                    <input type="hidden" name="items" value={JSON.stringify(items)} />  
                    <Button type="submit" className="w-full bg-black cursor-pointer">Proceed to Payment</Button>
                </form>
                <Button variant="outline" onClick={clearCart} className="w-full cursor-pointer">Clear Cart</Button>
            </div>
        </div>

    );
}