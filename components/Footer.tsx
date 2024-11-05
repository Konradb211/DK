"use client";

import { sitemap } from "@/constant";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black text-white secondaryFont w-full flex flex-col items-center pt-8">
      <div className="flex flex-col lg:flex-row justify-between w-full max-width px-8 lg:px-16 gap-12 py-10">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg">Usługi</h3>
          {sitemap.slice(0, 4).map((item) => (
            <Link
              key={item.href}
              className="text-base hover:underline text-gray-400"
              href={item.href}
            >
              {item.text}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg ">Odnośniki Strony</h3>
          {sitemap.slice(4, 8).map((item) => (
            <Link
              key={item.href}
              className="text-base hover:underline text-gray-400"
              href={item.href}
            >
              {item.text}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg">Kontakt</h3>
          <p className="text-gray-400">+48 603068682</p>
          <p className="text-gray-400">kontakt@syntaxstudio.pl</p>
          <p className="text-gray-400">NIP: 697239637</p>
        </div>
      </div>

      <div className="w-full bg-gray-900 py-4">
        <p className="max-width text-sm sm:text-base px-4 text-center text-gray-400">
          Copyright &copy; {currentYear}{" "}
          <span className="text-white">Syntax Studio</span>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
