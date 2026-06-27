import React from "react";
// import Header from "../components/Header";
import {
  Lock,
  ShieldCheck,
  MessageSquareMore,
  Pencil,
  User,
  Mail,
  Phone,
  MapPin,
  MapPinned,
  TicketPercent,
  Smartphone,
  MessageSquare,
  Wifi,
  CircleX,
  ArrowRight,
  Info,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Step_3() {
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
                Review your order
              </h2>
              <p className="mt-2 text-gray-500">
                Please review the details of your order before proceeding.
              </p>
            </div>

            {/* Error Alert */}
            <div className="mb-6 flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
              <ShieldCheck size={18} />
              <span>
                   Every thing looks good!
              </span>
            </div>

            {/* Form Card */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-5 font-semibold text-gray-900">
                Your information
              </h3>

              <hr className="my-5 text-gray-300" />

              <div className="grid grid-cols-2 gap-8 text-sm">
                <div className="flex gap-3">
                  <User size={18} className="text-gray-400 mt-1" />
                  <div>
                    <p className="text-gray-500">Name</p>
                    <p className="font-medium">John Doe</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MapPin size={18} className="text-gray-400 mt-1" />
                  <div>
                    <p className="text-gray-500">Address</p>
                    <p>123 Main St Apt 4B</p>
                    <p>Miami, FL 33101, USA</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Mail size={18} className="text-gray-400 mt-1" />
                  <div>
                    <p className="text-gray-500">Email</p>
                    <p>john@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MapPinned size={18} className="text-gray-400 mt-1" />
                  <div>
                    <p className="text-gray-500">ZIP code</p>
                    <p>33101</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Phone size={18} className="text-gray-400 mt-1" />
                  <div>
                    <p className="text-gray-500">Phone number</p>
                    <p>(201) 555-0123</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <TicketPercent size={18} className="text-gray-400 mt-1" />
                  <div>
                    <p className="text-gray-500">Promo code</p>
                    <p>No promo code applied</p>
                  </div>
                </div>
              </div>

              <hr className="my-5 text-gray-300" />

              <div className="grid md:grid-cols-4 grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                    <Smartphone className="text-blue-600" size={22} />
                  </div>

                  <h4 className="font-semibold text-sm">Get your number</h4>
                  <p className="mt-2 text-xs text-gray-500">
                    We'll activate your U.S. number instantly.
                  </p>
                </div>

                <div className="relative text-center">
                  <ArrowRight
                    className="absolute -left-7 top-5 text-gray-300"
                    size={18}
                  />

                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                    <MessageSquare className="text-blue-600" size={22} />
                  </div>

                  <h4 className="font-semibold text-sm">Receive SMS</h4>

                  <p className="mt-2 text-xs text-gray-500">
                    Use it to receive verification codes.
                  </p>
                </div>

                <div className="relative text-center">
                  <ArrowRight
                    className="absolute -left-7 top-5 text-gray-300"
                    size={18}
                  />

                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                    <Wifi className="text-blue-600" size={22} />
                  </div>

                  <h4 className="font-semibold text-sm">Stay connected</h4>

                  <p className="mt-2 text-xs text-gray-500">
                    Works on WiFi or cellular data.
                  </p>
                </div>

                <div className="relative text-center">
                  <ArrowRight
                    className="absolute -left-7 top-5 text-gray-300"
                    size={18}
                  />

                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                    <CircleX className="text-blue-600" size={22} />
                  </div>

                  <h4 className="font-semibold text-sm">Cancel anytime</h4>

                  <p className="mt-2 text-xs text-gray-500">
                    You're in control. No long-term contracts.
                  </p>
                </div>
              </div>

              <hr className="my-5 text-gray-300" />

              {/* Buttons */}
              <div className="mt-8 flex md:flex-row flex-col gap-3 justify-between">
                <Link
                  to="/step-2"
                  className="rounded-lg border border-gray-300 px-8 py-3 font-medium text-center"
                >
                  Back
                </Link>

                <Link
                  to="/step-4"
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
      </div>
    </div>
  );
}
