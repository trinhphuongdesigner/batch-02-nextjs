import React from 'react';

function NestedLayout2({ children }) {
  return (
    <>
        <h1>Nested level 2</h1>
        <div>{children}</div>
        <h1>Nested footer lv 2</h1>
    </>
  );
}

export default NestedLayout2;