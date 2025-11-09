"use client";
import { useState, useEffect } from 'react';
import { CheckBadgeIcon, HomeIcon } from '@heroicons/react/24/outline';

interface SuccessProps {
  onReturnHome?: () => void;
}

const SuccessComponent = ({ onReturnHome }: SuccessProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-sm w-full text-center">
        
        {/* Animated Check Icon */}
        <div className={`flex justify-center mb-8 transition-all duration-700 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
        }`}>
          <div className="relative">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
              <CheckBadgeIcon className="w-12 h-12 text-white" />
            </div>
            {/* Pulsing effect */}
            <div className="absolute inset-0 border-2 border-black rounded-full animate-ping opacity-20"></div>
          </div>
        </div>

        {/* Success Message */}
        <div className={`mb-12 transition-all duration-700 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <h1 className="text-4xl font-bold text-black mb-4">
            Successfully Purchased!
          </h1>
          <p className="text-gray-600">
            Thank you for your order. Your payment has been processed successfully.
          </p>
        </div>

        {/* Return Home Button */}
        <button
          onClick={onReturnHome}
          className={`group bg-black text-white py-4 px-8 rounded-xl font-bold hover:bg-gray-800 
            transition-all duration-300 transform flex items-center justify-center gap-3 mx-auto
            transition-all duration-700 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <HomeIcon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          Continue Shopping
        </button>

      </div>
    </div>
  );
};

export default SuccessComponent;