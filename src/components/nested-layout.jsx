import React from 'react';

function NestedLayout({ children }) {
  return (
    <>
        <h1>Nested level 1</h1>
        <div>{children}</div>
        <h1>Nested footer lv 1</h1>
    </>
  );
}

export default NestedLayout;