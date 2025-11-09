"use client"
import SuccessComponent from '@/components/success-component';
import { useCartStore } from '@/store/cart-store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function SuccessPage() {
  const router = useRouter();
   const {  clearCart } = useCartStore();
   useEffect(() =>{
    clearCart();
   }, [clearCart()]);
  const handleReturnHome = () => {
    router.push('/products');
  };

  return (
    <SuccessComponent onReturnHome={handleReturnHome} />
  );
}