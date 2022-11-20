import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'



const Notfound = () => {
    const router = useRouter()

    useEffect(() =>
    {
        setTimeout(()=>
        {
            router.push('/');
        }, 3000)
    },[])
  return (
    <div>
        <h1>ooop ...</h1>
        <h2>that page cannot be found</h2>
        <p>Go back to home page<Link href='/'>home page</Link></p>
    </div>
  )
}

export default Notfound
