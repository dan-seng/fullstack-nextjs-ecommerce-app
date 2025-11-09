import { ShoppingBagIcon } from '@heroicons/react/24/outline';

const SimpleEmptyCart = () => {
  return (
    <div className="min-h-[50vh] bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-xs lg:max-w-sm">

        <div className="mb-6">
          <div className="w-20 h-20 border-2 border-gray-200 rounded-full flex items-center justify-center mx-auto
            lg:w-24 lg:h-24">
            <ShoppingBagIcon className="w-10 h-10 text-gray-400 lg:w-12 lg:h-12" />
          </div>
        </div>
        <h2 className="text-xl font-bold text-black mb-2 lg:text-2xl">
          Cart Empty
        </h2>
        <p className="text-gray-600 text-sm mb-6 lg:text-base lg:mb-8">
          Add some items to get started
        </p>

        <button
          onClick={() => window.location.href = '/products'}
          className="bg-black text-white w-full py-3 rounded-lg font-medium hover:bg-gray-800 
            transition-colors duration-300 lg:py-4 cursor-pointer"
        >
          Browse Products
        </button>

      </div>
    </div>
  );
};

export default SimpleEmptyCart;