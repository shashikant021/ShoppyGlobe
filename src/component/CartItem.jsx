import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../utils/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  // a function for changing the quantity dynamically
  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      {/* individual cart item by using the props(item) from the parent component   */}
      <div
        key={item.id}
        className="flex justify-between items-center mb-4 border-b pb-2"
      >
        <div className="flex items-center gap-4">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-24 h-24 object-cover rounded"
          />
          <div>
            <h3 className="font-semibold md:text-lg">{item.title}</h3>
            <p>
              ${item.price} x {item.quantity}
            </p>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) =>
                handleQuantityChange(item.id, Number(e.target.value))
              }
              className="border px-2 py-1 rounded mt-1 w-16"
            />
          </div>
        </div>
        <button
          onClick={() => handleRemove(item.id)}
          className="text-red-600 hover:underline"
        >
          Remove
        </button>
      </div>
    </>
  );
}

export default CartItem;
