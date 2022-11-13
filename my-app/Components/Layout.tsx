import { AppProps } from 'next/app'
import React, { FC, ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'


interface Props {
    children?: ReactNode
}

const Layout: FC<Props> = ({ children, ...Props }) => {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>

    </div>
  )
}

export default Layout