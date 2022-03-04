import Head from "next/head";

export default function Home({articles}) {
  console.log(articles)
  return (
    <div>
      <Head>
        <title>Web News App with Next</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
    {articles.map((article) => <h3>{article.title}</h3>)}
     
    </div>
  );
}
export const getStaticProps =async () =>{
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
  const articles = await response.json()
  return {
    props:{
      articles
    }
  }

}