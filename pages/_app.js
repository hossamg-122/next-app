import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (

    // this layout components wrappes all routes on it so if we have any repeated content like header or nav bar will put it in this layout component and we don't have to repeat our code
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
