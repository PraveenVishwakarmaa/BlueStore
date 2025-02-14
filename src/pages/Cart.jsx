import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="p-4 flex flex-col min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="flex self-center">Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div
            key={index}
            className="border p-4 mb-2 flex justify-between items-center rounded shadow-md hover:shadow-xl"
          >
            <span className="flex items-center text-xl">
              <img src={item.image} className=" w-14 h-14 rounded-lg"/> -- {item.name} - {item.price}
            </span>
            <button
              onClick={() => removeFromCart(index)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}
