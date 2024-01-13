import Link from "next/link";
import LanguageChanger from "./LanguageSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import { useTranslationContext } from "./TranslationContext";

const Navbar = () => {
  const { t } = useTranslationContext();
  const navigation = [
    t('quem-somos'),
    t('idealizadores'),
    t('ajuda'),
    t('contato'),
  ];
  

  return (
    <div className="w-full bg-white">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 ">
                    <span>
                      <Image
                        src="/img/logolanterna.png"
                        alt="N"
                        width="128"
                        height="128"
                        className="w-22"
                      />
                    </span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none ">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
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
                      <Link key={index} href="/" className="w-full text-center px-4 py-2 ml-4 text-gray-500 rounded-md  hover:text-[#e78045] focus:text-[#e78045] focus:bg-[#f9d9c6] focus:outline-none">
                          {item}
                      </Link>
                    ))}
                  </>
                </Disclosure.Panel>
              </div>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href="/" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md  hover:text-[#e78045] focus:text-[#e78045] focus:bg-[#f9d9c6] focus:outline-none ">
                    {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className=" mr-3 flex mx-auto lg:mx-0 nav__item">
          <LanguageChanger />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
