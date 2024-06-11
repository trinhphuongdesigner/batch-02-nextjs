import NestedLayout from '@/components/nested-layout';
import React from 'react';
// import NestedLayout from '../components/nested-layout'

export default function About() {
  return (
    <div>
      About
  </div>
  )
}

About.getLayout = function getLayout(page) {
  return (
      <NestedLayout>{page}</NestedLayout>
  )
}