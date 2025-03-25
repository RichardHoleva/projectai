import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link className="nav-link" to="">Home</Link>
        <Link className="nav-link" to="first">Exp. sys: Forward Chaining</Link>
        <Link className="nav-link" to="second">Exp. sys: Backward Chaining</Link>
      </nav>
    </header>
  );
}
