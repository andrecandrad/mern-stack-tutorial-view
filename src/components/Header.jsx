import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-red-500 w-full h-5">
      <Link to="/">Workout Buddy</Link>
    </header>
  );
};

export default Header;
