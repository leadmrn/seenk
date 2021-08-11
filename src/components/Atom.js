import React from 'react';


function Atom(props) {

  return (
    <div className={"Atom " + props.type}>{props.name}</div>
  );
}

export default Atom;
