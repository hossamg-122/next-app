import Head from "next/head";
import ArticleList from "../components/ArticleList";
import Meta from "../components/Meta";
import { server } from "../config";
export default function Home({ articles }) {
  console.log(articles);
  return (
    <div>
      <Meta title='Web News App with Next' keywords="web development, programming" />
      
      <ArticleList articles={articles} />
    </div>
  );
}


//this function fetched the data during building the site on server so the site will be build with content not an empty page like normal react app 

export const getStaticProps = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const articles = await response.json();
  return {
    props: {
      articles,
    },
  };
};

// this code is for fetching data from local file

// export const getStaticProps = async () => {
//     const response = await fetch(
//       `${server}/api/articles`
//     );
//     const articles = await response.json();
//     return {
//       props: {
//         articles,
//       },
//     };
//   };
