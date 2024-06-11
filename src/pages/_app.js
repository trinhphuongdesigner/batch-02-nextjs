import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return <Layout>
    {getLayout(<Component {...pageProps} />)}
  </Layout>
}
