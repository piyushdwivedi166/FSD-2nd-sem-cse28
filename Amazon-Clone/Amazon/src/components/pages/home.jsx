import { useState } from "react";

function Home({ onAddToCart }) {
  const [slide, setSlide] = useState(0);

  const showPreviousSlide = () => {
    setSlide((currentSlide) => (currentSlide === 0 ? 2 : currentSlide - 1));
  };

  const showNextSlide = () => {
    setSlide((currentSlide) => (currentSlide === 2 ? 0 : currentSlide + 1));
  };

  return (
    <main className="bg-[#e3e6e6]">
      <section className="relative h-[420px] overflow-hidden md:h-[520px]">
        <div className={`absolute inset-0 transition-opacity duration-500 ${slide === 0 ? "opacity-100" : "opacity-0"}`}>
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?auto=format&fit=crop&w=1800&q=80"
            alt="Amazon shopping bags"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/5 to-[#e3e6e6]" />
          <div className="absolute left-4 top-24 max-w-xl text-white md:left-12 md:top-32">
            <p className="text-sm font-bold uppercase text-[#febd69]">Big savings week</p>
            <h1 className="mt-2 text-4xl font-bold md:text-6xl">Shop more. Spend less.</h1>
            <p className="mt-3 text-lg">Deals on everyday essentials, fashion, electronics, and more.</p>
          </div>
        </div>

        <div className={`absolute inset-0 transition-opacity duration-500 ${slide === 1 ? "opacity-100" : "opacity-0"}`}>
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=1800&q=80"
            alt="Electronics products"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/15 to-[#e3e6e6]" />
          <div className="absolute left-4 top-24 max-w-xl text-white md:left-12 md:top-32">
            <p className="text-sm font-bold uppercase text-[#febd69]">Electronics store</p>
            <h1 className="mt-2 text-4xl font-bold md:text-6xl">Upgrade your setup.</h1>
            <p className="mt-3 text-lg">Laptops, audio, watches, gaming gear, and smart home devices.</p>
          </div>
        </div>

        <div className={`absolute inset-0 transition-opacity duration-500 ${slide === 2 ? "opacity-100" : "opacity-0"}`}>
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1800&q=80"
            alt="Home furniture"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-[#e3e6e6]" />
          <div className="absolute left-4 top-24 max-w-xl text-white md:left-12 md:top-32">
            <p className="text-sm font-bold uppercase text-[#febd69]">Home refresh</p>
            <h1 className="mt-2 text-4xl font-bold md:text-6xl">Make every room work better.</h1>
            <p className="mt-3 text-lg">Furniture, kitchen finds, decor, storage, and daily home needs.</p>
          </div>
        </div>

        <button
          className="absolute left-3 top-1/2 grid h-12 w-10 -translate-y-1/2 place-items-center rounded bg-white/75 text-3xl text-gray-900 shadow hover:bg-white md:h-20 md:w-14"
          type="button"
          onClick={showPreviousSlide}
          aria-label="Previous slide"
        >
          &#8249;
        </button>
        <button
          className="absolute right-3 top-1/2 grid h-12 w-10 -translate-y-1/2 place-items-center rounded bg-white/75 text-3xl text-gray-900 shadow hover:bg-white md:h-20 md:w-14"
          type="button"
          onClick={showNextSlide}
          aria-label="Next slide"
        >
          &#8250;
        </button>

        <div className="absolute bottom-16 left-1/2 flex -translate-x-1/2 gap-2">
          <button className={`h-2.5 w-8 rounded-full ${slide === 0 ? "bg-[#febd69]" : "bg-white/70"}`} type="button" onClick={() => setSlide(0)} aria-label="Show slide 1" />
          <button className={`h-2.5 w-8 rounded-full ${slide === 1 ? "bg-[#febd69]" : "bg-white/70"}`} type="button" onClick={() => setSlide(1)} aria-label="Show slide 2" />
          <button className={`h-2.5 w-8 rounded-full ${slide === 2 ? "bg-[#febd69]" : "bg-white/70"}`} type="button" onClick={() => setSlide(2)} aria-label="Show slide 3" />
        </div>
      </section>

      <section className="mx-auto -mt-20 grid max-w-7xl gap-5 px-4 pb-8 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <article className="relative bg-white p-4 shadow">
          <h2 className="mb-4 text-xl font-bold">Gaming accessories</h2>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <img className="h-28 w-full object-cover" src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=500&q=80" alt="Gaming keyboard" />
              <p className="mt-2 text-sm">Keyboards</p>
            </div>
            <div>
              <img className="h-28 w-full object-cover" src="https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=500&q=80" alt="Gaming mouse" />
              <p className="mt-2 text-sm">Mice</p>
            </div>
            <div>
              <img className="h-28 w-full object-cover" src="https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=500&q=80" alt="Gaming headset" />
              <p className="mt-2 text-sm">Headsets</p>
            </div>
            <div>
              <img className="h-28 w-full object-cover" src="https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=500&q=80" alt="Game controller" />
              <p className="mt-2 text-sm">Controllers</p>
            </div>
          </div>
          <a className="mt-4 inline-block text-sm text-[#007185] hover:text-[#c7511f]" href="#">See more</a>
        </article>

        <article className="relative bg-white p-4 shadow">
          <h2 className="mb-4 text-xl font-bold">Refresh your space</h2>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <img className="h-28 w-full object-cover" src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=80" alt="Living room sofa" />
              <p className="mt-2 text-sm">Living room</p>
            </div>
            <div>
              <img className="h-28 w-full object-cover" src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=500&q=80" alt="Bedroom decor" />
              <p className="mt-2 text-sm">Bedroom</p>
            </div>
            <div>
              <img className="h-28 w-full object-cover" src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=500&q=80" alt="Kitchen" />
              <p className="mt-2 text-sm">Kitchen</p>
            </div>
            <div>
              <img className="h-28 w-full object-cover" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=500&q=80" alt="Bathroom" />
              <p className="mt-2 text-sm">Bathroom</p>
            </div>
          </div>
          <a className="mt-4 inline-block text-sm text-[#007185] hover:text-[#c7511f]" href="#">Shop home</a>
        </article>

        <article className="relative bg-white p-4 shadow">
          <h2 className="mb-4 text-xl font-bold">Deals in electronics</h2>
          <img className="h-64 w-full object-cover" src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=700&q=80" alt="Electronics products" />
          <a className="mt-4 inline-block text-sm text-[#007185] hover:text-[#c7511f]" href="#">Explore deals</a>
        </article>

        <article className="relative bg-white p-4 shadow">
          <h2 className="mb-4 text-xl font-bold">Beauty picks</h2>
          <img className="h-64 w-full object-cover" src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=80" alt="Beauty products" />
          <a className="mt-4 inline-block text-sm text-[#007185] hover:text-[#c7511f]" href="#">Shop beauty</a>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 md:px-6">
        <div className="bg-white p-4 shadow">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-xl font-bold">Add products to cart</h2>
            <a className="text-sm text-[#007185] hover:text-[#c7511f]" href="#">See all deals</a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <article className="flex flex-col rounded border border-gray-100 p-3">
              <img className="h-44 w-full object-contain" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80" alt="Wireless headphones" />
              <h3 className="mt-3 font-semibold">Wireless Headphones</h3>
              <p className="text-sm text-yellow-600">★★★★☆</p>
              <p className="font-bold text-[#b12704]">$129.00</p>
              <button
                className="mt-auto rounded-full bg-[#ffd814] px-4 py-2 text-sm font-semibold hover:bg-[#f7ca00]"
                type="button"
                onClick={() =>
                  onAddToCart({
                    name: "Wireless Headphones",
                    description: "Noise cancelling with deep bass.",
                    price: 129,
                    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
                  })
                }
              >
                Add to Cart
              </button>
            </article>

            <article className="flex flex-col rounded border border-gray-100 p-3">
              <img className="h-44 w-full object-contain" src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=500&q=80" alt="Smart watch" />
              <h3 className="mt-3 font-semibold">Smart Watch</h3>
              <p className="text-sm text-yellow-600">★★★★★</p>
              <p className="font-bold text-[#b12704]">$199.00</p>
              <button
                className="mt-auto rounded-full bg-[#ffd814] px-4 py-2 text-sm font-semibold hover:bg-[#f7ca00]"
                type="button"
                onClick={() =>
                  onAddToCart({
                    name: "Smart Watch",
                    description: "Track activity, calls, and reminders.",
                    price: 199,
                    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=500&q=80",
                  })
                }
              >
                Add to Cart
              </button>
            </article>

            <article className="flex flex-col rounded border border-gray-100 p-3">
              <img className="h-44 w-full object-contain" src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80" alt="Laptop" />
              <h3 className="mt-3 font-semibold">Ultra Slim Laptop</h3>
              <p className="text-sm text-yellow-600">★★★★☆</p>
              <p className="font-bold text-[#b12704]">$899.00</p>
              <button
                className="mt-auto rounded-full bg-[#ffd814] px-4 py-2 text-sm font-semibold hover:bg-[#f7ca00]"
                type="button"
                onClick={() =>
                  onAddToCart({
                    name: "Ultra Slim Laptop",
                    description: "Fast performance for work and study.",
                    price: 899,
                    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80",
                  })
                }
              >
                Add to Cart
              </button>
            </article>

            <article className="flex flex-col rounded border border-gray-100 p-3">
              <img className="h-44 w-full object-contain" src="https://m.media-amazon.com/images/I/61BXRNekoEL._AC_UL480_FMwebp_QL65_.jpg" alt="Perfume bottle" />
              <h3 className="mt-3 font-semibold">Premium Fragrance</h3>
              <p className="text-sm text-yellow-600">★★★★☆</p>
              <p className="font-bold text-[#b12704]">$59.00</p>
              <button
                className="mt-auto rounded-full bg-[#ffd814] px-4 py-2 text-sm font-semibold hover:bg-[#f7ca00]"
                type="button"
                onClick={() =>
                  onAddToCart({
                    name: "Premium Fragrance",
                    description: "Fresh everyday scent in a gift box.",
                    price: 59,
                    image: "https://m.media-amazon.com/images/I/61BXRNekoEL._AC_UL480_FMwebp_QL65_.jpg",
                  })
                }
              >
                Add to Cart
              </button>
            </article>

            <article className="flex flex-col rounded border border-gray-100 p-3">
              <img className="h-44 w-full object-contain" src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=500&q=80" alt="Game console" />
              <h3 className="mt-3 font-semibold">Game Console</h3>
              <p className="text-sm text-yellow-600">★★★★★</p>
              <p className="font-bold text-[#b12704]">$499.00</p>
              <button
                className="mt-auto rounded-full bg-[#ffd814] px-4 py-2 text-sm font-semibold hover:bg-[#f7ca00]"
                type="button"
                onClick={() =>
                  onAddToCart({
                    name: "Game Console",
                    description: "Next-gen gaming with 4K entertainment.",
                    price: 499,
                    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=500&q=80",
                  })
                }
              >
                Add to Cart
              </button>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;