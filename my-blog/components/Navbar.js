import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
    <div>
        <h1>Navbar</h1>
    <Link href="/">
    Home
    </Link>
    <Link href="/about"> 
    About
    </Link>
    <Link href="/project">
    Projects
    </Link>
    </div>
  )
}

export default Navbar