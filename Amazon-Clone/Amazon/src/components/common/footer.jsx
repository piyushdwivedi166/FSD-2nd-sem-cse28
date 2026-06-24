function Footer() {
  return (
    <footer className="bg-[#131921] text-white">
      <a href="#" className="block bg-[#37475a] py-4 text-center text-sm transition hover:bg-[#485769]">
        Back to top
      </a>

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="mb-3 font-bold">Get to Know Us</h2>
          <a className="mb-2 block text-sm text-gray-300 hover:underline" href="#">About Amazon</a>
          <a className="mb-2 block text-sm text-gray-300 hover:underline" href="#">Careers</a>
          <a className="mb-2 block text-sm text-gray-300 hover:underline" href="#">Press Release</a>
          <a className="mb-2 block text-sm text-gray-300 hover:underline" href="#">Amazon Science</a>
        </div>

        <div>
          <h2 className="mb-3 font-bold"> Connect with Us</h2>
          <a className="mb-2 block text-sm text-gray-300 hover:underline" href="#">Facebook</a>
          <a className="mb-2 block text-sm text-gray-300 hover:underline" href="#">Instagram</a>
          <a className="mb-2 block text-sm text-gray-300 hover:underline" href="#">Twitter</a>
        </div>

        <div>
          <h2 className="mb-3 font-bold">Make Money with Us</h2>
          <a className="mb-2 block text-sm text-gray-300 hover:underline" href="#">Sell on Amazon</a>
          <a className="mb-2 block text-sm text-gray-300 hover:underline" href="#">Sell under Amazon Accelerator</a>
          <a className="mb-2 block text-sm text-gray-300 hover:underline" href="#">Protect and Build Your Brand</a>
          <a className="mb-2 block text-sm text-gray-300 hover:underline" href="#">Amazon Global Selling</a>
          <a className="mb-2 block text-sm text-gray-300 hover:underline" href="#">Supply to Amazon</a>
          <a className="mb-2 block text-sm text-gray-300 hover:underline" href="#">Become an Affiliate</a>
          <a className="mb-2 block text-sm text-gray-300 hover:underline" href="#">Fulfilment by Amazon</a>
          <a className="mb-2 block text-sm text-gray-300 hover:underline" href="#">Advertise Your Products</a>
          <a className="mb-2 block text-sm text-gray-300 hover:underline" href="#">Amazon Pay on Merchants</a>
        </div>


        <div>
          <h2 className="mb-3 font-bold">Let Us Help You</h2>
          <a className="mb-2 block text-sm text-gray-300 hover:underline" href="#">Your Account</a>
          <a className="mb-2 block text-sm text-gray-300 hover:underline" href="#">Returns Center</a>
          <a className="mb-2 block text-sm text-gray-300 hover:underline" href="#">Recalls and Product Safety Alerts</a>
          <a className="mb-2 block text-sm text-gray-300 hover:underline" href="#">100% Purchase Protection</a>
          <a className="mb-2 block text-sm text-gray-300 hover:underline" href="#">Amazon App Download</a>
          <a className="mb-2 block text-sm text-gray-300 hover:underline" href="#">Help</a>
        </div>
      </div>

      <div className="border-t border-gray-700 px-6 py-6 text-center">
        <p className="text-2xl font-bold">
          amazon<span className="text-[#ff9900]">.</span>
        </p>
        <p className="mt-3 text-xs text-gray-400">Conditions of Use · Privacy Notice · Interest-Based Ads</p>
        <p className="mt-1 text-xs text-gray-400">© 2026 Amazon clone project</p>
      </div>
    </footer>
  );
}

export default Footer;