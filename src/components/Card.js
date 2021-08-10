import React from 'react';


function Card(props) {

  return (
    <div className="Card">
      <div className="Card_title">{props.title}</div>
      <p className="text">
        {props.text}
      </p>
    </div>
  );
}

export default Card;
