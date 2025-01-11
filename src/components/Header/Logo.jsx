import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/"
      className="text-white font-extrabold text-2xl tracking-wide hover:text-orange-500 hover:scale-105 transition-all"
    >
      Weularity
    </Link>
  );
}
