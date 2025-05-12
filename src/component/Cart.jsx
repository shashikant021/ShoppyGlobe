import { useDispatch, useSelector } from "react-redux";
import { clearCart, selectCartItems } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

function Cart() {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  // reduce method is performed to sum the price of items
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // if no cart present then this block execute.
  if (cartItems.length === 0) {
    return (
      <div className="p-10 h-screen flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold">Your cart is empty</h2>
        <Link to="/" className="text-blue-500 underline">
          Go shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 mt-16">
      <h2 className="text-center text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.map((item) => (
        // calling cartItem here to display in cart page and item is used as prop in child components
        <CartItem item={item} />
      ))}

      <div className="text-right mt-6">
        <p className="text-xl font-bold mb-2">Total: ${total.toFixed(2)}</p>
        {/* button for clearing the cart at once by clicking on it  */}
        <button
          onClick={handleClearCart}
          className="bg-red-500 text-white mb-10 px-4 py-2 rounded hover:bg-red-700"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
