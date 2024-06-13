import NestedLayout from '@/components/nested-layout';
import Image from 'next/image';
import React from 'react';
// import NestedLayout from '../components/nested-layout'
import styles from './styles.module.css';

export default function About() {
  return (
    <div>
      hello
      <Image
        src="https://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-11_044127919.jpg"
        alt="Vercel Logo"
        className={styles.image}
        width={1000}
        height={240}
        priority
      />
    </div>
  );
}

About.getLayout = function getLayout(page) {
  return <NestedLayout>{page}</NestedLayout>;
};
