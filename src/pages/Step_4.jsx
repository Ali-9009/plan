import React, { useState } from "react";
// import Header from "../components/Header";
import {
  Lock,
  ShieldCheck,
  CreditCard,
  Circle,
  CircleDot,
  Info,
} from "lucide-react";

import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcDiscover,
  FaApplePay,
  FaPaypal,
} from "react-icons/fa";

import { SiGooglepay } from "react-icons/si";

import { Link } from "react-router-dom";

export default function Step_4() {
  const [selected, setSelected] = useState("card");

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

            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-600 text-white shadow-sm">
              <span className="text-sm font-bold">3</span>
            </button>

            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-600 text-white shadow-sm">
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
              <h2 className="text-2xl font-semibold text-gray-900">Payment</h2>

              <p className="mt-2 text-gray-500">
                Complete your purchase securely.
              </p>
            </div>

            {/* Success Alert */}
            <div className="mb-6 flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
              <ShieldCheck size={18} />
              <span>
                You will only be charged after your payment is successful.
              </span>
            </div>

            {/* Payment Card */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              {/* Payment Method */}
              <h3 className="font-semibold text-gray-900 mb-5">
                1. Choose a payment method
              </h3>

              <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
                {/* Card */}
                <div
                  onClick={() => setSelected("card")}
                  className={`rounded-lg p-4 cursor-pointer transition ${
                    selected === "card"
                      ? "border-2 border-blue-500 bg-blue-50"
                      : "border border-gray-200 hover:border-blue-400"
                  }`}
                >
                  {selected === "card" ? (
                    <CircleDot size={16} className="mb-4 text-blue-600" />
                  ) : (
                    <Circle size={16} className="mb-4 text-gray-400" />
                  )}

                  <div className="flex items-center gap-3">
                    <CreditCard className="text-blue-600" />

                    <div>
                      <p className="font-semibold">Card</p>
                      <p className="text-xs text-gray-500">
                        Visa, Mastercard...
                      </p>
                    </div>
                  </div>
                </div>

                {/* Apple Pay */}
                <div
                  onClick={() => setSelected("apple")}
                  className={`rounded-lg p-4 cursor-pointer transition ${
                    selected === "apple"
                      ? "border-2 border-blue-500 bg-blue-50"
                      : "border border-gray-200 hover:border-blue-400"
                  }`}
                >
                  {selected === "apple" ? (
                    <CircleDot size={16} className="mb-4 text-blue-600" />
                  ) : (
                    <Circle size={16} className="mb-4 text-gray-400" />
                  )}

                  <div className="flex items-center justify-center">
                    <FaApplePay size={60} />
                  </div>
                </div>

                {/* Google Pay */}
                <div
                  onClick={() => setSelected("google")}
                  className={`rounded-lg p-4 cursor-pointer transition ${
                    selected === "google"
                      ? "border-2 border-blue-500 bg-blue-50"
                      : "border border-gray-200 hover:border-blue-400"
                  }`}
                >
                  {selected === "google" ? (
                    <CircleDot size={16} className="mb-4 text-blue-600" />
                  ) : (
                    <Circle size={16} className="mb-4 text-gray-400" />
                  )}

                  <div className="flex items-center justify-center">
                    <SiGooglepay size={60} />
                  </div>
                </div>

                {/* Paypal */}
                <div
                  onClick={() => setSelected("paypal")}
                  className={`rounded-lg p-4 cursor-pointer transition ${
                    selected === "paypal"
                      ? "border-2 border-blue-500 bg-blue-50"
                      : "border border-gray-200 hover:border-blue-400"
                  }`}
                >
                  {selected === "paypal" ? (
                    <CircleDot size={16} className="mb-4 text-blue-600" />
                  ) : (
                    <Circle size={16} className="mb-4 text-gray-400" />
                  )}

                  <div className="flex items-center gap-3 mt-7">
                    <FaPaypal size={32} color="#0070BA" />
                    <p className="font-medium">PayPal</p>
                  </div>
                </div>
              </div>

              <hr className="my-5 text-gray-300" />

              {/* Card Details */}
              <h3 className="font-semibold text-gray-900 mb-5">
                2. Enter your card details
              </h3>
              {/* Card Number */}
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium">
                  Card number
                </label>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="4242 4242 4242 4242"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-44 outline-none focus:border-blue-500"
                  />

                  <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-2">
                    <FaCcVisa className="text-blue-700 text-xl" />
                    <FaCcMastercard className="text-red-500 text-xl" />
                    <FaCcAmex className="text-sky-600 text-xl" />
                    <FaCcDiscover className="text-orange-500 text-xl" />
                  </div>
                </div>
              </div>
              {/* Expiry + CVV */}
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Expiration date
                  </label>

                  <input
                    placeholder="MM / YY"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3"
                  />
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium">
                    Security code CVV
                    <Info size={14} />
                  </label>

                  <div className="relative">
                    <input
                      placeholder="123"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-12"
                    />

                    <CreditCard
                      size={18}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                  </div>
                </div>
              </div>
              {/* Name */}
              <div className="mt-5">
                <label className="block mb-2 text-sm font-medium">
                  Name on card
                </label>

                <input
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3"
                />
              </div>
              {/* Save Card */}
              <label className="mt-5 flex items-center gap-2 text-sm">
                <input type="checkbox" defaultChecked />
                Save this card for faster checkout next time
              </label>
              <hr className="my-5 text-gray-300" />
              {/* Billing */}
              <h3 className="font-semibold mb-5">3. Billing address</h3>
              <div className="space-y-3">
                <label
                  className={`flex cursor-pointer items-start gap-3 rounded-lg border-2 p-4 transition
        ${
          selected === "same" ? "border-blue-500 bg-blue-50" : "border-gray-300"
        }`}
                >
                  <input
                    type="radio"
                    name="billing"
                    value="same"
                    checked={selected === "same"}
                    onChange={() => setSelected("same")}
                    className="mt-1"
                  />

                  <div>
                    <p className="font-medium">Same as my information</p>
                    <p className="text-sm text-gray-500">
                      123 Main St Apt 4B, Miami, FL 33101, USA
                    </p>
                  </div>
                </label>

                <label
                  className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition
        ${
          selected === "different"
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300"
        }`}
                >
                  <input
                    type="radio"
                    name="billing"
                    value="different"
                    checked={selected === "different"}
                    onChange={() => setSelected("different")}
                  />

                  <span>Use a different billing address</span>
                </label>
              </div>
              {/* Buttons */}
              <div className="mt-8 flex md:flex-row flex-col gap-3 justify-between">
                <Link
                to="/step-3"
                  className="rounded-lg border border-gray-300 px-8 py-3 font-medium text-center"
                >
                  Back
                </Link>

                <Link
                  to="/step-5"
                  className="rounded-lg bg-blue-500 px-8 py-3 font-medium text-white text-center"
                >
                  Pay $3.00
                </Link>
              </div>
            </div>

            {/* Footer */}

            <p className="mt-5 flex items-center gap-2 text-sm text-gray-500">
              <Lock size={16} />
              Your payment is encrypted and secure.
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

              {/* Secure Checkout */}
              <div className="mt-8 rounded-xl border border-gray-200 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50">
                    <ShieldCheck size={20} className="text-green-600" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Secure checkout
                    </h4>
                    <p className="mt-1 text-xs text-gray-500 leading-5">
                      Your payment information is encrypted and never stored on
                      our servers.
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3">
                  {/* Visa */}
                  <div className="rounded bg-blue-600 px-2 py-1 text-xs font-bold text-white">
                    VISA
                  </div>

                  {/* Mastercard */}
                  <div className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-red-500 opacity-90"></div>
                    <div className="-ml-2 h-5 w-5 rounded-full bg-yellow-400 opacity-90"></div>
                  </div>

                  {/* Apple Pay */}
                  <div className="text-sm font-semibold text-black">
                    Apple Pay
                  </div>

                  {/* Google Pay */}
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-semibold">Google Pay</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
