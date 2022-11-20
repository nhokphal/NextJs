import Link from 'next/link';
import React from 'react'


/// only on the build-time , dont write code for run the browser
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();


  return{
    props: {
      projects : data
    }
  }

}


const index = ({ projects }) => {
  return (
    <div>all index


      {projects.map(item => (
        <div key={item.id}>
          <Link href={'/project/' + item.id}>
            <h1>{item.name}</h1>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default index;