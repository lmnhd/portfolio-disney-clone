import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ThemeToggle } from "./ui/theme-toggle";
import SearchInput from "./searchinput";
import GenreDropdown from "./genredropdown";

function Header() {
  return (
    <header className="fixed flex w-full bg-gradient-to-t from-black/0 to-white dark:to-[#1a1c29] justify-between p-5  text-white sm:px-10 z-50 top-0  ">
      <Link className="mr-10" href={`/`}>
        <Image
          src={`https://links.papareact.com/a943ae`}
          className="cursor-pointer dark:invert"
          alt="Disney+"
          width={120}
          height={100}
        />
      </Link>

      <div className="flex space-x-2">
        <GenreDropdown/>
        <SearchInput />
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
