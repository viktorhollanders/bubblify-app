"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Menu, X } from "lucide-react";

import { Logo } from "./logo";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { matches: isDesktop } = useMediaQuery("min-width: 768px");
  const pathname = usePathname();

  return (
    <div className="fixed px-6 lg:px-24 lg:py-5 py-3 bg-brand-grey-100 z-50 w-full md:flex md:flex-row md:justify-between">
      <div className="flex items-center justify-between">
        <Logo />
        <button
          className="flex md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen === false ? (
            <Menu className="text-brand-primary" size={24} />
          ) : (
            <X className="text-brand-primary" size={24} />
          )}
        </button>
      </div>
      {(isMenuOpen || isDesktop) && (
        <nav className="flex flex-col items-center gap-6 h-dvh mt-10 md:h-auto md:flex-row md:mt-0">
          <Link
            className={`${pathname === "/bubbles" ? "md:font-bold" : "md:font-light"} font-bold md:hover:text-brand-primary md:hover:font-bold`}
            href="/bubbles"
          >
            Products
          </Link>
          <Link
            className={`${pathname === "/bundles" ? "md:font-bold" : "md:font-normal"} font-bold md:hover:text-brand-primary md:hover:font-bold`}
            href="/bundles"
          >
            Bundles
          </Link>
          <Link
            className={`${pathname === "/about" ? "md:font-bold" : "md:font-normal"} font-bold md:hover:text-brand-primary md:hover:font-bold`}
            href="/about"
          >
            About
          </Link>
        </nav>
      )}
    </div>
  );
}
