"use client";

import Stripe from "stripe";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";

interface Props {
  product: Stripe.Product;
}

export const ProductDetail = ({ product }: Props) => {
  const { items, addItem, removeItem } = useCartStore();

  // Safer price handling
  const price =
    product.default_price && typeof product.default_price !== "string"
      ? product.default_price
      : null;

  const cartItem = items.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const onAddItem = () => {
    if (!price) return;

    addItem({
      id: product.id,
      name: product.name,
      price: price.unit_amount || 0,
      imageUrl: product.images?.[0] || null,
      quantity: 1,
    });
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-center max-w-6xl">
        {/* Product Image */}
        {product.images?.[0] && (
          <div className="relative h-96 w-full md:w-1/2 rounded-2xl overflow-hidden bg-gray-50 border border-gray-200">
            <Image
              alt={product.name}
              src={product.images[0]}
              fill
              className="object-contain p-8 transition-transform duration-500 hover:scale-105 cursor-pointer"
            />
          </div>
        )}

        {/* Product Info */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold text-black tracking-tight">
            {product.name}
          </h1>

          {product.description && (
            <p className="text-lg text-gray-600 leading-relaxed">
              {product.description}
            </p>
          )}

          {price?.unit_amount && (
            <p className="text-3xl font-bold text-black">
              ${(price.unit_amount / 100).toFixed(2)}
            </p>
          )}

          {/* Quantity Controls */}
          {quantity > 0 ? (
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4 bg-gray-50 rounded-xl p-2 border border-gray-200">
                <Button
                  variant="ghost"
                  onClick={() => removeItem(product.id)}
                  disabled={quantity === 0}
                  className="h-10 w-10 p-0 hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 rounded-lg"
                >
                  -
                </Button>

                <span className="text-lg font-semibold text-black min-w-[2rem] text-center">
                  {quantity}
                </span>

                <Button
                  variant="ghost"
                  onClick={onAddItem}
                  className="h-10 w-10 p-0 hover:bg-white transition-all duration-200 rounded-lg"
                >
                  +
                </Button>
              </div>
            </div>
          ) : (
            <Button onClick={onAddItem} className="w-full mt-4">
              Add to Cart
            </Button>
          )}

          {/* Cart Summary */}
          {quantity > 0 && (
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-gray-600">
                <span className="font-semibold text-black">{quantity}</span>{" "}
                item{quantity > 1 ? "s" : ""} in your cart
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
