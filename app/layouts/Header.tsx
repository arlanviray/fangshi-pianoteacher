"use client"

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";
// library
import _ from "lodash"
// components
import NavLinks from "../components/NavLinks";

export default function Header() {
  const [hamburgerMenu, sethamburgerMenu] = useState("")
  const queryHTML = typeof document !== "undefined" && document.querySelector("html")
  const queryBody = typeof document !== "undefined" && document.querySelector("body")

  const navLinks = [
    {title: "Home", path: "/"},
    {title: "About", path: "/about"},
    {title: "Contact", path: "/contact"},
  ]

  const handleHamburgerMenu = () => {
    if (_.isEmpty(hamburgerMenu)) {
      sethamburgerMenu("is-active");
      queryHTML?.classList.add("no-scroll")
      queryBody?.classList.add("nav-mobile-show")
    } else { 
      resetMobileMenu()
    }
  }

  const resetMobileMenu = () => {
    if (queryBody?.classList.contains("nav-mobile-show")) {
      sethamburgerMenu("")
      queryHTML?.classList.remove("no-scroll")
      queryBody?.classList.remove("nav-mobile-show")
    }
  }

  // set for window resize
  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth >= 640 && resetMobileMenu()
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="nav-mobile hidden fixed top-0 right-0 h-full bg-primary p-5">
        <NavLinks navLinks={navLinks} navEvent={resetMobileMenu} />
      </div>
      
      <header className="fixed z-50 w-full bg-light border-secondary border-b-2 h-18 px-4">
        <div className="flex items-center justify-between h-full">
          <div>
            <Link href="/"><img src="/fangshi_logo.png" alt="FangShi logo header" className="max-w-none h-12" /></Link>
          </div>
          <div className="flex items-center">
            <nav className="nav-desktop max-sm:hidden">
              <NavLinks navLinks={navLinks} navEvent="" />
            </nav>
            <button className={"hamburger hamburger--collapse-r sm:hidden "+ hamburgerMenu} type="button" onClick={handleHamburgerMenu}>
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
