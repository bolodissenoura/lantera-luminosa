import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "./container";
import { Instagram } from "./icons/Instagram";
import { Facebook } from "./icons/Facebook";
import { Twitter } from "./icons/Twitter";
import { Linkedin } from "./icons/Linkedin";

export default function Footer() {
  const className = "flex mt-5 space-x-5 text-gray-400 dark:text-gray-500",
    navigation = [
      { label: "Home", href: "/" },
      { label: "Idealizadora", href: "/idealizadora" },
    ];
  return (
    <div className="relative bg-[#EDEDED]">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 mx-auto mt-5 dark:border-black lg:grid-cols-4">
          <div className="lg:col-span-2 flex items-start">
            <div className="inline-block flex flex-col items-center">
              <div>
                {" "}
                <Link
                  href="/"
                  className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
                >
                  <Image
                    src="/img/logo.png"
                    alt="N"
                    width="128"
                    height="128"
                    className="w-22"
                  />
                </Link>
              </div>


              <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
                Instituto Lanterna Luminosa
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0 transition-colors">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="w-full px-4 py-2 text-gray-500 rounded-md  hover:text-[#1d272a] focus:bg-[#f9f4d1] focus:outline-none"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="">
            <div>Redes Sociais</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              <a
                href="https://www.facebook.com/institutolanternaluminosa"
                target="_blank"
                className="hover:text-green transition-colors"
                rel="noopener"
              >
                <span className="sr-only">Facebook</span>
                <Facebook size={24} color={"currentColor"}/>
              </a>
              <a
                href="https://www.instagram.com/institutolanternaluminosa/"
                target="_blank"
                className="hover:text-green transition-colors"
                rel="noopener"
              >
                <span className="sr-only ">Instagram</span>
                <Instagram size={24} color={"currentColor"}/>
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Instituto Lanterna Luminosa
        </div>
      </Container>
    </div>
  );
}
