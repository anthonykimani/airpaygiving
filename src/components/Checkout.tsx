import React from "react";

const Checkout = () => {
  return (
    <div className=" flex justify-center items-center 2xl:container 2xl:mx-auto">
      <div className=" flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center space-y-12 lg:space-y-0 ">
        <div className="flex flex-col md:flex-row justify-around items-start h-[700px] bg-gray-50 w-full p-2 md:p-4">
            <div>
                <h3>Fill in the details below</h3>
                <form>
                    <input type="text" placeholder="Full name" className="w-full p-2 border border-gray-400 rounded mb-2" />
                </form>
            </div>
          <div>
            <div>
              <h1 className="text-2xl font-semibold leading-6 text-gray-800">
                Order Summary
              </h1>
            </div>
            <div className="flex mt-7 flex-col items-end w-full space-y-6">
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">Total items</p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  20
                </p>
              </div>
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">Total Charges</p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  $2790
                </p>
              </div>
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">
                  Shipping charges
                </p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  $90
                </p>
              </div>
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">Sub total</p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  $3520
                </p>
              </div>
            </div>
            <div className="flex justify-between w-full items-center mt-32">
              <p className="text-xl font-semibold leading-4 text-gray-800">
                Estimated Total
              </p>
              <p className="text-lg font-semibold leading-4 text-gray-800">
                $2900
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
