import React from 'react';

function Navbar(props) {
  console.log('««««« props »»»»»', props);
  console.log('««««« props.title »»»»»', props.title);
  return (
    <div>
      {props.children}
    </div>
  );
}

export default Navbar;