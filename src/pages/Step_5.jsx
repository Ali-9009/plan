import React, { useState } from "react";
// import Header from "../components/Header";
import {
  Lock,
  ShieldCheck,
  CreditCard,
  Circle,
  CircleDot,
  Info,
  Hash,
  CalendarDays,
  Phone,
  CheckCircle,
  CheckCircle2,
  MessageSquareText,
  Mail,
  Smartphone,
  ShieldCheckIcon,
  BadgeCheck,
  Headset,
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

export default function Step_5() {
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

            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-600 text-white shadow-sm">
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
            {/* Success Card */}
            <div className="rounded-2xl border border-green-200 bg-linear-to-r from-green-50 to-white p-5 md:p-7 shadow-sm">
              <div className="flex flex-col gap-5 sm:flex-row">
                {/* Success Icon */}
                <div className="mx-auto flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-500 text-white sm:mx-0 sm:h-16 sm:w-16">
                  <ShieldCheck className="h-8 w-8" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 md:text-xl">
                    Order Confirmed
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    Thanks, <span className="font-medium">John</span>. Your
                    order has been received and your number is being prepared.
                  </p>

                  {/* Order Info */}
                  <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-gray-200 bg-white p-4">
                      <div className="flex items-center gap-2">
                        <Hash className="h-4 w-4 text-green-600" />
                        <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
                          Order ID
                        </span>
                      </div>

                      <p className="mt-2 text-sm font-semibold text-gray-900">
                        PM-2024-0518-7823
                      </p>
                    </div>

                    <div className="rounded-xl border border-gray-200 bg-white p-4">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-green-600" />
                        <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
                          Date
                        </span>
                      </div>

                      <p className="mt-2 text-sm font-semibold text-gray-900">
                        May 18, 2024 • 10:24 AM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Number */}
            <div className="mt-6 rounded-2xl border border-gray-300 p-4 shadow-sm">
              <p className="text-sm font-medium text-gray-500">
                Your new phone number
              </p>

              <div className="mt-4">
                <div className="flex items-center gap-3">
                  <div className="bg-lime-400/20 p-3 rounded-2xl">
                    <Phone className="h-7 w-7 text-lime-400" />
                  </div>

                  <h2 className="text-2xl font-semibold text-gray-900">
                    (201) 555-0123
                  </h2>

                  <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-lime-600">
                    <CheckCircle className="h-4 w-4" />
                    Active
                  </span>
                </div>

                <p className="mt-3 text-sm text-gray-500">
                  Ready to receive SMS verification codes.
                </p>
              </div>

              <div className="mt-5 rounded-lg bg-blue-50 px-4 py-3 text-sm text-blue-700">
                Your number may take a few minutes to become fully active. If
                necessary, restart your phone.
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-6 rounded-2xl border border-gray-300 p-4 shadow-sm">
              <h3 className="mb-8 text-lg font-semibold text-gray-900">
                What happens next?
              </h3>

              <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle2 className="h-7 w-7 text-green-600" />
                  </div>

                  <h4 className="mt-4 font-semibold text-gray-900">
                    Activated
                  </h4>

                  <p className="mt-2 text-sm text-gray-500">
                    Your phone number is now active and ready to use.
                  </p>
                </div>

                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                    <MessageSquareText className="h-7 w-7 text-green-600" />
                  </div>

                  <h4 className="mt-4 font-semibold text-gray-900">SMS Sent</h4>

                  <p className="mt-2 text-sm text-gray-500">
                    A welcome SMS has been delivered successfully.
                  </p>
                </div>

                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                    <Mail className="h-7 w-7 text-green-600" />
                  </div>

                  <h4 className="mt-4 font-semibold text-gray-900">
                    Email Sent
                  </h4>

                  <p className="mt-2 text-sm text-gray-500">
                    Your order receipt has been sent to your email.
                  </p>
                </div>

                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                    <Smartphone className="h-7 w-7 text-blue-600" />
                  </div>

                  <h4 className="mt-4 font-semibold text-gray-900">
                    Start Using
                  </h4>

                  <p className="mt-2 text-sm text-gray-500">
                    You're ready to receive SMS and make calls.
                  </p>
                </div>
              </div>
            </div>

            {/* Manage Plan */}
            <div className="mt-6 rounded-2xl border border-gray-300 p-4 shadow-sm">
              <div className="flex md:flex-row flex-col items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">Manage your plan</h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Download our mobile app to monitor your usage, renew your
                    subscription, and manage your account.
                  </p>
                </div>

                <div>
                  <div className="mt-6 flex gap-4">
                    <button className="rounded-xl bg-black px-6 py-3 text-white">
                      App Store
                    </button>

                    <button className="rounded-xl bg-black px-6 py-3 text-white">
                      Google Play
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
              <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                {/* Secure Checkout */}
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100">
                    <ShieldCheck className="h-5 w-5 text-green-600" />
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">
                      Secure Checkout
                    </h4>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Your payment is encrypted and securely processed.
                    </p>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="mt-5 flex flex-wrap items-center justify-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 sm:justify-between">
                  {/* Visa */}
                  <div className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-bold text-white">
                    VISA
                  </div>

                  {/* Mastercard */}
                  <div className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-red-500"></div>
                    <div className="-ml-2 h-5 w-5 rounded-full bg-yellow-400"></div>
                  </div>

                  {/* Apple Pay */}
                  <div className="rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-900">
                    Apple Pay
                  </div>

                  {/* Google Pay */}
                  <div className="rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-900">
                    Google Pay
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Features */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Secure */}
          <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100">
              <ShieldCheckIcon className="h-5 w-5 text-green-600" />
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-900">
                Secure Checkout
              </h4>
              <p className="mt-1 text-xs text-gray-500">
                Encrypted & protected.
              </p>
            </div>
          </div>

          {/* Warranty */}
          <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100">
              <BadgeCheck className="h-5 w-5 text-blue-600" />
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-900">
                30-Day Warranty
              </h4>
              <p className="mt-1 text-xs text-gray-500">
                Easy replacement guarantee.
              </p>
            </div>
          </div>

          {/* Support */}
          <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:col-span-2 lg:col-span-1">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-100">
              <Headset className="h-5 w-5 text-purple-600" />
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-900">
                24/7 Support
              </h4>
              <p className="mt-1 text-xs text-gray-500">
                Help whenever you need it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
