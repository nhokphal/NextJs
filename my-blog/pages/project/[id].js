
// pages/posts/[id].js
// Generates `/posts/1` and `/posts/2`
export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();

  const paths = data.map(item => {
    return {
        params: { id: item.id.toString()}
    }
  })
  return {
      paths,
      fallback: false //can also be true or 'blocking'
    }
  
} 

export const getStaticProps = async (contex) =>{
    const id = contex.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id )
    const data = await res.json();

    return {
        props: { datas: data}
    }
} 


const detail = ({ datas }) => {
  return (
    <div>
      <h1>{datas.name}</h1>
      <p>{datas.email}</p>
      <p>{datas.website}</p>
      <p>{datas.address.city}</p>
    </div>
  )
}

export default detail
