// import React from 'react'
import { Link } from "react-router-dom";
import linksData from "../links/links";

export default function Nav() {
  return (
    <nav className="flex md:flex-col items-center gap-[32px]">
      {linksData.map((link, id) => {
        return (
          <Link className="group " key={id} to={link.path}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7 text-linkColor group-hover:text-white transition-all duration-150 ease-in-out"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={link.image}
              />
            </svg>
          </Link>
        );
      })}
    </nav>
  );
}
