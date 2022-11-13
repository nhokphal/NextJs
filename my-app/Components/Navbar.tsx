import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';


const NavStyle = styled.div
`
display: flex;
gap: 10px;
margin: 10px;
`;


const Navbar = () => {
  return (
    <nav>
    <NavStyle className="logo">
        <h1>ztoa</h1>
    </NavStyle>
    <NavStyle>

    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/create">Create</Link>
    </NavStyle>
    </nav>
  )
}

export default Navbar;