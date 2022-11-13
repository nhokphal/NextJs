import React from 'react'
import Link from 'next/link';


const Navbar = () => {
  return (
    <nav>

    <div className="logo">
        <h1>ztoa</h1>
    </div>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/create">Create</Link>
    </nav>
  )
}

export default Navbar;