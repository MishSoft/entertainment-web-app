// import React from 'react'
import { Link } from "react-router-dom";
import Nav from "./Nav";
import UserSide from "./UserSide";

export default function Header() {
  return (
    <header className="p-5 bg-headerColor rounded-[10px] md:flex-col md:max-w-[100px] md:h-screen flex items-center justify-between">
      {/* logo */}
      <Link to={"/"}>
        <img className="w-[30px]" src="/public/assets/logo.svg" />
      </Link>

      {/* Navigation bar */}
      <Nav />

      {/* user section */}
      <UserSide />
    </header>
  );
}
