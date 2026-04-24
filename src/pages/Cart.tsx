function Cart() {
  return (
    <div className="max-w-6xl px-6 py-10 mx-auto">
      <h1 className="mb-10 text-3xl font-semibold text-gray-800 font-heading">
        Your Cart
      </h1>

      <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
        {/* 🛒 Items */}
        <div className="flex justify-center lg:justify-start">
          <div className="w-full max-w-2xl space-y-6">
            {/* Item */}
            <div className="p-5 transition bg-white border rounded-xl hover:shadow-lg">
              <div className="flex gap-4">
                <img
                  src="https://placehold.co/100/png"
                  className="object-cover w-20 h-20 bg-gray-100 rounded-lg shrink-0"
                />

                <div className="flex flex-col justify-between flex-1">
                  {/* title */}
                  <div>
                    <p className="font-medium text-gray-700">Product Name</p>
                    <p className="text-sm text-gray-500">Category</p>
                  </div>

                  {/* controls */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3">
                      <button className="flex items-center justify-center text-white transition bg-gray-800 rounded-lg w-7 h-7 hover:bg-gray-700">
                        −
                      </button>

                      <span className="text-sm font-medium">1</span>

                      <button className="flex items-center justify-center text-white transition bg-gray-800 rounded-lg w-7 h-7 hover:bg-gray-700">
                        +
                      </button>
                    </div>

                    <p className="font-semibold ">$99</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Item */}
            <div className="p-5 transition bg-white border rounded-xl hover:shadow-lg">
              <div className="flex gap-4">
                <img
                  src="https://placehold.co/100/png"
                  className="object-cover w-20 h-20 bg-gray-100 rounded-lg shrink-0"
                />

                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <p className="font-medium text-gray-700">Another Product</p>
                    <p className="text-sm text-gray-500">Category</p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3">
                      <button className="flex items-center justify-center text-white transition bg-gray-800 rounded-lg w-7 h-7 hover:bg-gray-700">
                        −
                      </button>

                      <span className="text-sm font-medium">2</span>

                      <button className="flex items-center justify-center text-white transition bg-gray-800 rounded-lg w-7 h-7 hover:bg-gray-700">
                        +
                      </button>
                    </div>

                    <p className="font-semibold">$198</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 💳 Summary */}
        <div className="h-full p-6 bg-white border shadow-sm rounded-xl">
          <h2 className="mb-4 text-lg font-semibold text-gray-800">Summary</h2>

          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$297</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$10</span>
            </div>

            <div className="flex justify-between pt-3 mt-3 text-base font-semibold text-gray-900 border-t">
              <span>Total</span>
              <span>$307</span>
            </div>
          </div>

          <button className="w-full py-3 mt-6 text-white transition bg-black rounded-xl hover:bg-gray-800">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
