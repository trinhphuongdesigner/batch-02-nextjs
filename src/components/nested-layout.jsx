import React from 'react';

function NestedLayout({ children }) {
  return (
    <>
      Nested nav
        <div>{children}</div>
        Nested footer
    </>
  );
}

export default NestedLayout;