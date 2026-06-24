function Header({ cartItems, isCartOpen, onOpenCart, onCloseCart, onRemoveFromCart }) {
  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#131921] text-white shadow-lg">
        <div className="flex items-center gap-3 px-4 py-2 md:px-6">
          <a href="#" className="shrink-0 border border-transparent px-2 py-1 text-2xl font-bold hover:border-white">
            amazon<span className="text-[#ff9900]">.</span>
          </a>

          <div className="hidden border border-transparent px-2 py-1 text-xs leading-tight hover:border-white md:block">
            <span className="block text-gray-300">Delivering to New Delhi 110002</span>
            <span className="block font-bold">Update location</span>
          </div>

          <form className="flex min-w-0 flex-1 overflow-hidden rounded-md">
            <select className="hidden bg-gray-200 px-1 text-sm text-gray-700 outline-none md:block">
              <option>All</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Home</option>
            </select>
            <input
              className="min-w-0 flex-1 p-2 text-sm bg-stone-50 text-gray-900 outline-none"
              type="search"
              placeholder="Search Amazon.in"
              aria-label="Search Amazon"
            />
            <button className="bg-[#febd69] px-4 text-xl text-gray-900 transition hover:bg-[#f3a847]" type="submit" aria-label="Search">
              &#128269;
            </button>
          </form>

          <nav className="hidden items-center gap-2 text-sm lg:flex">
            <a href="#" className="border border-transparent px-2 py-1 leading-tight hover:border-white">
              <span className="block text-xs">Hello, sign in</span>
              <span className="font-bold">Account & Lists</span>
            </a>
            <a href="#" className="border border-transparent px-2 py-1 leading-tight hover:border-white">
              <span className="block text-xs">Returns</span>
              <span className="font-bold">& Orders</span>
            </a>
          </nav>

          <button
            className="relative border border-transparent p-2 font-bold flex hover:border-white"
            type="button"
            onClick={onOpenCart}
          >
            <span className="absolute left-6 top-0 text-sm text-[#f08804]">{cartItems.length}</span>
            <span className="text-xl">&#128722; Cart</span>
          </button>
        </div>

        <div className="flex items-center gap-4 overflow-x-auto bg-[#232f3e] px-4 py-2 text-sm md:px-6">
          <button className="shrink-0 font-bold" type="button" onClick={onOpenCart}>
            &#9776; All
          </button>
          <a className="shrink-0 font-medium hover:underline" href="#">Fresh</a>
          <a className="shrink-0 font-medium hover:underline" href="#">MX Player</a>
          <a className="shrink-0 font-medium hover:underline" href="#">Sell</a>
          <a className="shrink-0 font-medium hover:underline" href="#">BestSellers</a>
          <a className="shrink-0 font-medium hover:underline" href="#">Today's Deals</a>
          <a className="shrink-0 font-medium hover:underline" href="#">Prime</a>
          <a className="shrink-0 font-medium hover:underline" href="#">Mobiles</a>
          <a className="shrink-0 font-medium hover:underline" href="#">New Release</a>
          <a className="shrink-0 font-medium hover:underline" href="#">Customer Service</a>
          <a className="shrink-0 font-medium hover:underline" href="#">Amazon Pay</a>
          <a className="shrink-0 font-medium hover:underline" href="#">Electronics</a>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity ${isCartOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={onCloseCart}
        aria-hidden={!isCartOpen}
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md transform bg-white text-gray-900 shadow-2xl transition-transform duration-300 ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
        aria-label="Shopping cart offcanvas"
      >
        <div className="flex items-center justify-between bg-[#131921] px-5 py-4 text-white">
          <div>
            <p className="text-sm text-gray-300">Your cart</p>
            <h2 className="text-xl font-bold">Product items</h2>
          </div>
          <button className="text-3xl leading-none" type="button" onClick={onCloseCart} aria-label="Close cart">
            &times;
          </button>
        </div>

        <div className="space-y-4 overflow-y-auto p-5">
          {cartItems.length === 0 && (
            <div className="rounded-md border border-dashed border-gray-300 p-6 text-center">
              <p className="font-semibold">Your Amazon cart is empty</p>
              <p className="mt-2 text-sm text-gray-600">Add products from the home page to see them here.</p>
            </div>
          )}

          {cartItems.map((item) => (
            <article className="flex gap-4 border-b pb-4" key={item.cartId}>
              <img className="h-24 w-24 rounded-md object-cover" src={item.image} alt={item.name} />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <p className="mt-2 font-bold text-[#b12704]">${item.price.toFixed(2)}</p>
                <button
                  className="mt-2 text-sm text-[#007185] hover:text-[#c7511f]"
                  type="button"
                  onClick={() => onRemoveFromCart(item.cartId)}
                >
                  Remove
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="border-t p-5">
          <div className="mb-4 flex justify-between text-lg font-bold">
            <span>Subtotal</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <button className="w-full rounded-md bg-[#ffd814] px-4 py-3 font-semibold text-gray-900 transition hover:bg-[#f7ca00]" type="button">
            Proceed to checkout
          </button>
        </div>
      </aside>
    </>
  );
}

export default Header;