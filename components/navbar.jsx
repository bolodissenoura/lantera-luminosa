import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import usePopupStore from "./popupStore";
import { useRouter } from "next/router";

const Navbar = () => {
  const { pathname } = useRouter();
  const navigation =
    pathname === "/idealizadora" ? ["Voltar"] : ["Idealizadora"];
  const { togglePopup } = usePopupStore();

  return (
    <div className="w-full bg-green">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto lg:justify-between pt-8 xl:px-16">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
              <Link href="/">
                <span className="flex items-center xl:pl-16 text-2xl font-medium text-yellow ">
                  <span>
                    <Image
                      className="mr-8 rounded-full shadow"
                      src="/img/logo.png"
                      alt="Logo"
                      width="100"
                      height="100"
                    />
                  </span>
                  <p className="font-primary text-[14px] md:text-[16px]">
                    Instituto Lanterna Luminosa
                  </p>
                </span>
              </Link>

              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 ml-auto rounded-md lg:hidden text-yellow rounded-md  hover:text-[#f1e37e] focus:text-green focus:bg-[#eee59f] focus:outline-none"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open && (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  )}
                  {!open && (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                <>
                  {navigation.map((item, index) => (
                    <Link
                      key={index}
                      href={
                        pathname === "/idealizadora" ? "/" : "/idealizadora"
                      }
                      className="w-full text-center px-4 py-2 ml-4 text-yellow rounded-md  hover:text-[#f1e37e] focus:text-green focus:bg-[#eee59f] focus:outline-none"
                    >
                      {item}
                    </Link>
                  ))}
                </>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center pr-20">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href={pathname === "/idealizadora" ? "/" : "/idealizadora"}
                  className="inline-block px-6 py-2 text-lg font-primary text-yellow no-underline rounded-md  hover:text-[#f1e37e] focus:text-green focus:bg-[#eee59f] focus:outline-none "
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex-shrink-0 text-center lg:w-auto">
            <button
              onClick={togglePopup}
              className="inline-block py-3 text-lg font-primary text-center text-green bg-yellow rounded-lg px-7 lg:px-5 lg:py-3 "
            >
              Buscar Ajuda
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
