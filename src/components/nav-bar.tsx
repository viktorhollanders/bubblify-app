"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Menu, X } from "lucide-react";

import { Logo } from "./ui/logo";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { matches: isDesktop } = useMediaQuery("min-width: 768px");
  const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setIsMenuOpen(false), 0);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed px-6 lg:px-24 lg:py-5 py-3 bg-brand-grey-100 z-50 w-full md:flex md:flex-row md:justify-between">
      <div className="flex items-center justify-between">
        <Link href="/bubbles">
          <Logo />
        </Link>
        <button className="flex md:hidden" onClick={toggleMenu}>
          {!isMenuOpen ? (
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
            About Us
          </Link>
          <Link
            className={`${pathname === "/cart" ? "md:font-bold" : "md:font-normal"} font-bold md:hover:text-brand-primary md:hover:font-bold`}
            href="/cart"
          >
            Cart
          </Link>
        </nav>
      )}
    </div>
  );
}
