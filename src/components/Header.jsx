import React from "react";
import { Lock } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header({ steps, activeStep }) {
  return (
    <div className="flex items-center justify-between border-b px-8 py-4 bg-white rounded-t-xl">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Link to="/">
          <img src="/assets/logo.png" alt="" className="w-40" />
        </Link>
      </div>

      <div className="flex justify-center gap-3">
        <button className="px-4 py-1 bg-(--primary-color) text-white rounded-md text-md font-medium">
          Dates
        </button>
        <button className="px-4 py-1 bg-gray-200 text-gray-500 rounded-md text-sm">
          Add-ons
        </button>
        <button className="px-4 py-1 bg-gray-200 text-gray-500 rounded-md text-sm">
          Contact
        </button>
        <button className="px-4 py-1 bg-gray-200 text-gray-500 rounded-md text-sm">
          Payment
        </button>
      </div>

      {/* Secure */}
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <Lock size={16} />
        Secure checkout
      </div>
    </div>
  );
}
