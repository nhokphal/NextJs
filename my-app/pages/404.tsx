import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import styled from 'styled-components';


//automate to redirect to the homepage

const NotFound = () => {
    // init route
    const route = useRouter();

    useEffect(() => {
        setTimeout(() => {
            route.push('/')
        }, 3000);
    }, [])

  return (
 <div className="error">404

<p>Go back to home page  <Link href='/'>Return home page</Link>
</p>
 
 </div>
  )
}

export default NotFound;