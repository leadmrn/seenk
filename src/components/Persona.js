import React from 'react';

import Card from './Card';
import UserDetail from './UserDetail';

import dataPersonas from '../data/data.json';


function Persona(props) {

  const data = dataPersonas.personas[props.id - 1];

  return (
    <div className="Persona">
      <UserDetail idUser={data.id} />
      <div className="Persona_content">
        <div className="Persona_test">
          <Card title="🎭 personality" type="personality" idUser={data.id} />
          <Card title="🎓 education" type="education" idUser={data.id} />
          <Card title="💼 work life" type="work" idUser={data.id} />
          <Card title="💃🏻 hobbies" type="hobbies" idUser={data.id} />
          <Card title="📱 digital communities" type="digitCom" idUser={data.id} />
          {data.cardText.map((card, i)=>{
            return (<Card title={card.name} key={i} text={card.text} idUser={data.id} />)
          })}
        </div>
      </div>
    </div>
  );
}

export default Persona;
