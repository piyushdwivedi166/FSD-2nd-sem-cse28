import { useState } from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./components/pages/Home";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems((currentItems) => [
      ...currentItems,
      {
        ...product,
        cartId: crypto.randomUUID(),
      },
    ]);
    setIsCartOpen(true);
  };

  const removeFromCart = (cartId) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.cartId !== cartId));
  };

  return (
    <div className="min-h-screen bg-[#e3e6e6]">
      <Header
        cartItems={cartItems}
        isCartOpen={isCartOpen}
        onOpenCart={() => setIsCartOpen(true)}
        onCloseCart={() => setIsCartOpen(false)}
        onRemoveFromCart={removeFromCart}
      />
      <Home onAddToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default App;