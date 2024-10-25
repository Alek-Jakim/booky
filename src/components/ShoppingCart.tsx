import { FaShoppingCart } from "react-icons/fa";

function ShoppingCart() {
  const cartItems = [];

  return (
    <div className="relative cursor-pointer">
      <FaShoppingCart size={38} className="absolute top-5 right-5" />
      <p className="absolute top-5 right-5 bg-blue-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
        {cartItems.length}
      </p>
    </div>
  );
}

export default ShoppingCart;
