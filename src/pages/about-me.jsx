import NestedLayout2 from '@/components/nested-layout2';
import Image from 'next/image';
import React from 'react';

export default function About() {
  return (
    <div>
      about me
      <Image
        src="https://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-11_044127919.jpg"
        alt="Vercel Logo"
        // className={styles.vercelLogo}
        width={1000}
        height={240}
        priority
      />
    </div>
  );
}

About.getLayout = function getLayout(page) {
  return <NestedLayout2>{page}</NestedLayout2>;
};
