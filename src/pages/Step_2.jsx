import React from "react";
// import Header from "../components/Header";
import { Lock } from "lucide-react";
import { Link } from "react-router-dom";

export default function Step_2() {
  return (
    <div>
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-4 lg:flex-row lg:px-8">
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img src="/assets/logo.png" alt="Logo" className="w-40" />
          </Link>

          {/* Steps */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-600 text-white shadow-sm">
              <span className="text-sm font-bold">1</span>
            </button>

            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-600 text-white shadow-sm">
              <span className="text-sm font-bold">2</span>
            </button>

            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 text-white shadow-sm">
              <span className="text-sm font-bold">3</span>
            </button>

            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 text-white shadow-sm">
              <span className="text-sm font-bold">4</span>
            </button>

            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 text-white shadow-sm">
              <span className="text-sm font-bold">5</span>
            </button>
          </div>

          {/* Secure Checkout */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Lock size={16} />
            <span>Secure checkout</span>
          </div>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-8">
          {/* Left Side */}
          <div>
            {/* Heading */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                Your information
              </h2>
              <p className="mt-2 text-gray-500">
                We'll use this to activate your number and keep you connected.
              </p>
            </div>

            {/* Error Alert */}
            <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              Please fix the errors below to continue.
            </div>

            {/* Form Card */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-5 font-semibold text-gray-900">
                Personal details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    First name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Last name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="john@gmail.com"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <p className="mt-2 text-xs text-gray-500">
                    We'll send your order details to this email.
                  </p>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Phone number
                  </label>
                  <input
                    type="text"
                    placeholder="(201) 555-0123"
                    className="w-full rounded-lg border border-red-300 px-4 py-3"
                  />
                  <p className="mt-1 text-xs text-red-500">
                    Please enter a valid 10-digit phone number.
                  </p>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    ZIP code
                  </label>
                  <input
                    type="text"
                    placeholder="12345"
                    className="w-full rounded-lg border border-red-300 px-4 py-3"
                  />
                  <p className="mt-1 text-xs text-red-500">
                    ZIP code must be 5 digits.
                  </p>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    State
                  </label>
                  <select className="w-full rounded-lg border border-gray-300 px-4 py-3">
                    <option>Select state</option>
                  </select>
                  <p className="mt-1 text-xs text-red-500">
                    Please select your state.
                  </p>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Promo code (optional)
                  </label>

                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="flex-1 rounded-l-lg border border-gray-300 px-4 py-3"
                    />
                    <button className="rounded-r-lg border  border-gray-300 border-l-0 bg-gray-100 px-5 font-medium hover:bg-gray-200">
                      Apply
                    </button>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4" />
                    <span className="text-sm text-gray-600">
                      I agree to the{" "}
                      <span className="text-blue-600">Terms of Service</span>{" "}
                      and <span className="text-blue-600">Privacy Policy</span>
                    </span>
                  </label>

                  <p className="mt-2 text-xs text-red-500">
                    You must agree to continue.
                  </p>
                </div>
              </div>
              {/* Buttons */}
              
              <div className="mt-8 flex md:flex-row flex-col gap-3 justify-between">
                <Link
                  to="/"
                  className="rounded-lg border border-gray-300 px-8 py-3 font-medium text-center"
                >
                  Back
                </Link>

                <Link
                  to="/step-3"
                  className="rounded-lg bg-blue-500 px-8 py-3 font-medium text-white text-center"
                >
                  Continue to review
                </Link>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-500 flex items-center gap-2">
              <Lock size={20} /> Your information is encrypted and secure.
            </p>
          </div>

          {/* Right Side */}
          <div className="sticky top-20">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-6 text-xl font-semibold">Your order</h3>

              <div className="rounded-lg border border-gray-300 p-4">
                <div className="flex justify-between">
                  <span className="font-medium">SMS Verification</span>
                  <span className="font-semibold text-blue-600">$2.75/mo</span>
                </div>
              </div>

              <div className="mt-6 space-y-3 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Monthly plan</span>
                  <span className="text-black">$2.75</span>
                </div>

                <div className="flex justify-between">
                  <span>Activation fee</span>
                  <span className="text-black">$0.00</span>
                </div>

                <div className="flex justify-between">
                  <span>Taxes & fees</span>
                  <span className="text-black">$0.25</span>
                </div>
              </div>

              <hr className="my-5 text-gray-300" />

              <div className="flex justify-between text-lg font-bold">
                <span>Today's total</span>
                <span className="text-blue-600">$3.00</span>
              </div>

              <div className="mt-6 rounded-lg bg-blue-50 p-4 text-sm text-gray-600">
                This is what you'll pay today. Your monthly plan renews
                automatically on your billing date.
              </div>

              <div className="mt-6">
                <h4 className="mb-3 font-semibold">What's included</h4>

                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ U.S. phone number</li>
                  <li>✓ Receive SMS verification codes</li>
                  <li>✓ Use on WiFi or cellular</li>
                  <li>✓ Cancel anytime</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
