"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import "./nav.css";
import { usePathname } from "next/navigation";
import {NavigationLinks} from "../../lib/Links"
import {motion} from "framer-motion"

function Nav() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<String>("#home");
  const [navScrolled, setNavScrolled] = useState<boolean>(false);
  const [hamburgerActive, setHamburgerActive] = useState<boolean>(false);
  const [showServices, setShowServices] = useState<boolean>(false);

  const handleScroll = () => {
    window.scrollY > 0 ? setNavScrolled(true) : setNavScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`lg:px-0 w-full h-24 fixed flex items-center justify-center z-40 ${
        navScrolled ? "scrolled" : "not_scrolled"
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
        <motion.div 
        initial={ {y: 100, opacity: 0}}
        animate={ {y: 0, opacity: 1}}
        className="lg:flex hidden">
          <div className="flex gap-3 md:gap-5">
            <ul className="flex gap-8 items-center">
              {NavigationLinks.NavData.slice(0, 2).map((item, index) => (
                <li key={index} className={`${activeSection === item.path ? "" : "hover_nav"}`}>
                  <Link href={item.path} onClick={() => setActiveSection(item.path)} className={`nav_list ${activeSection === item.path ? "active_nav" : ""}`}>
                    {item.title}
                  </Link>
                </li>
              ))}
              <li onMouseEnter={() => setShowServices(true)} onMouseLeave={() => setShowServices(false)} className="">
                <Link href="/services" className="nav_list flex items-center">
                  <span className={`${pathname.startsWith("/services") ? "active_services_nav" : ""} ${!pathname.startsWith("/services") && showServices ? "!font-PRegular active_services_nav" : "" }`}>Services</span> <IoMdArrowDropdown className={`transition duration-200 ${showServices ? "rotate-180" : ""}`}/>
                </Link>

                {showServices && 
                (<ul className="absolute top-18 bg-sec py-4 rounded-lg flex flex-col gap-2">
                  {NavigationLinks.Services.map((item, index) => (
                    <li key={index}>
                      <Link href={item.path} onClick={() => setActiveSection(item.path)} className={`services_list hover:bg-gray/30 text-black block ${pathname === item.path? "active_services" : ""}`}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>)}
              </li>
              {NavigationLinks.NavData.slice(2).map((item, index) => (
                <li key={index} className="hover_nav">
                  <Link href={item.path} onClick={() => setActiveSection(item.path)} className={`nav_list ${activeSection === item.path ? "active_nav" : ""}`}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center">
              <Link
                href="/"
                target="_blank"
                className="btn bg-orange rounded-full text-lg text-white btn_hover"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Mobile Navigation */}
        {/* <nav className="lg:hidden flex">
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
        </nav> */}

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
