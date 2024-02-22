"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import "./nav.css";
import { usePathname } from "next/navigation";1

const NavData = [
  {title: "Home", path: "/"},
  {title: "About", path: "/#about"},
  {title: "Services", path: "/services/"},
  {title: "References", path: "/#references"},
  {title: "Faq", path: "/#faq"},
]

function Nav() {
  const pathname = usePathname();
  console.log(pathname)
  const [navBg, setNavBg] = useState<boolean>(false);
  const [hamburgerActive, setHamburgerActive] = useState<boolean>(false);

  const handleScroll = () => {
    window.scrollY > 0 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`lg:px-0 w-full h-16 fixed flex items-center justify-center z-40 ${
        navBg ? "bg-black" : ""
      }`}
    >
      <div className="flex w-full justify-between items-center px-0  lg:px-4 container">
        <Link href="/" className=" block  w-[250px]">
          <Image
            src="/assets/images/BOOSTWEB_logo.png"
            alt="Boost Web - logo"
            width={500}
            height={68}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="lg:flex hidden">
          <div className="flex gap-3 md:gap-5">
            <ul className="flex gap-8 items-center">
              {NavData.map((item, index) => (
                <li key={index}>
                  <Link href={item.path} className={`nav_list ${pathname === item.path ? "active_nav" : ""}`}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <Link
                href="/"
                target="_blank"
                className="btn bg-orange rounded-full text-lg text-white btn_hover"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="lg:hidden flex">
          {hamburgerActive && (
            <div className="lg:hidden inset-0 flex absolute justify-center w-screen h-screen items-center z-50 bg-black text-center">
              <ul className="flex flex-col gap-4 md:text-4xl origin-top">
                {NavData.map((item, index) => (
                  <li key={index}>
                    <Link
                      onClick={() => setHamburgerActive(!hamburgerActive)}
                      href={item.path}
                      className={`nav_list ${pathname === item.path? "active_nav" : ""}`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
                
                <li>
                  <Link
                    onClick={() => setHamburgerActive(!hamburgerActive)}
                    href="/"
                    target="_blank"
                    className="btn"
                  >
                    Request a Quote
                  </Link>
                </li>
              </ul>
              <div className="absolute right-8 top-4 bg-clr_sec w-[38px] h-[38px] rounded flex justify-center">
                <button onClick={() => setHamburgerActive(!hamburgerActive)}>
                  <IoClose className="text-white text-3xl" />
                </button>
              </div>
            </div>
          )}
        </nav>

        <div className="lg:hidden bg-clr_sec w-[38px] h-[38px] rounded flex justify-center">
          <button onClick={() => setHamburgerActive(!hamburgerActive)}>
            <RxHamburgerMenu
              width={30}
              height={30}
              className="text-white text-3xl"
            />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Nav;
