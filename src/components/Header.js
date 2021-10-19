import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-b-box">
      <div class="px-2 mx-2 navbar-start">
        <Link to="/">
          <span class="text-lg font-bold">Dummyapi</span>
        </Link>
      </div>

      <div class="navbar-end">
        <button class="btn btn-square btn-ghost">
          <Link to="/" class="btn btn-ghost btn-sm rounded-btn">
            Home
          </Link>
        </button>
        <button class="btn btn-square btn-ghost">
          <Link to="/users" class="btn btn-ghost btn-sm rounded-btn">
            Users
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Header;
