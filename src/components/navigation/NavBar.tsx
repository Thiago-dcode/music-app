import React from "react";

export default function NavBar() {
  return (
    <nav className="bg-neutral-900 uppercase font-medium ">
      <ul className="flex items-center justify-between m-auto text-xl h-16 px-10 text-white max-w-5xl [&>li]:h-full [&>li]:flex [&>li]:items-center">
        <li>
          <a className="" href="#">
            New Keyboard
          </a>
        </li>
        <li>
          <a href="#">Your keyboards</a>
        </li>
      </ul>
    </nav>
  );
}
