import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import axiosClient from '@/libraries/axiosClient';

function Products(props) {
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => {
    try {
      const res = await axiosClient.get('/products/all');
      setProducts(res.data.payload);
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log('««««« products »»»»»', products);

  useEffect(() => {
    getProducts()
  }, [getProducts]);

  return (
    <>
      <Head>
        <title>Product list</title>
        <meta name="description" content="product list" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {
        products.length > 0 ? (
          <div style={{display: 'flex', flexDirection: 'column'}}>
            {products.map((p) => <Link key={p._id} href={`/products/${p._id}`}><h1>{p.name}</h1></Link>)}
          </div>
        ) : <small>Không có sản phẩm</small>
      }
    </>
  );
}

export default Products;

// export async function getStaticProps() {
//   try {
//     const response = await axiosClient.get("/posts");

//     return {
//       props: {
//         posts: response.data,
//       },

//       revalidate: 24 * 60 * 60,
//     };
//   } catch (error) {
//     return {
//       notFound: true,
//     };
//   }
// }
