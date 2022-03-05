import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link'
const article = ({article}) => {
    // const router = useRouter()
    // const {id} = router.query
  return (
    <>
     <h3>{article.title}  </h3>
            <p>{article.body}</p>
            <br />
            <Link href="/">Go Back</Link>
    </>
    
  )
}
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
export const getStaticProps = async (context) =>{
const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
const article = await response.json()
return {
  props:{
    article
  }
}
}
export default article