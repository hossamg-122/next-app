import { useRouter } from 'next/router'
import { server } from '../../../config'
import React from 'react'
import Link from 'next/link'
import Meta from '../../../components/Meta'
const article = ({article}) => {
    // const router = useRouter()
    // const {id} = router.query
  return (
    <>
    <Meta title={article.title} description={article.excerpt} />
     <h3>{article.title}  </h3>
            <p>{article.body}</p>
            <br />
            <Link href="/">Go Back</Link>
    </>

  )
}
// we use getStaticPaths to initiate the app with all the dynamic paths on the server and this must call with getStaticProps to fetch data for every id
export const getStaticPaths= async() =>{
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const articles = await response.json()
  const ids = articles.map((article)=> article.id)
  const paths = ids.map((id)=>({params:{id:id.toString()}}))
  return {
paths,
fallback:false
    // paths:[
    //   {params :{id:'1'}},
    //   {params :{id:'2'}},
    //   {params :{id:"3"}},
    // ]


  }
}

// call this file with context to access the id from getStaticPaths to pre-render the page with content during built time
export const getStaticProps = async (context) =>{
const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
const article = await response.json()
return {
  props:{
    article
  }
}
}


//// this code is for fetching data from local file

// export const getStaticPaths= async() =>{
//   const response = await fetch(`${server}/api/articles`)
//   const articles = await response.json()
//   const ids = articles.map((article)=> article.id)
//   const paths = ids.map((id)=>({params:{id:id.toString()}}))
//   return {
// paths,
// fallback:false
//     // paths:[
//     //   {params :{id:'1'}},
//     //   {params :{id:'2'}},
//     //   {params :{id:"3"}},
//     // ]


//   }
// }
// export const getStaticProps = async (context) =>{
// const response = await fetch(`${server}/api/articles/${context.params.id}`)
// const article = await response.json()
// return {
//   props:{
//     article
//   }
// }
// }
export default article