import React from 'react';

import Card from './Card';
import UserDetail from './UserDetail';


function Persona() {

  return (
    <div className="Persona">
      <UserDetail />
      <div className="Persona_content">
        <div className="Persona_test">
          <Card title="🎭 personality" type="personality" />
          <Card title="🎓 education" type="education" />
          <Card title="💼 work life" type="work" />
          <Card title="💃🏻 hobbies" type="hobbies" />
          <Card title="📱 digital communities" type="digitCom" />
          <Card title="💻 digital media" text="Currently uses online tutorials and/or discussion boards to learn digital media. Sometimes signs up for digital conferences to experience the community more, but may not fully participate. Talks primarily to professors for any advice related to field. Googles the rest." />
          <Card title="🎯 goals" text="Meet like-minded people Get help / level-up skills Step out of current profession" />
          <Card title="😈 frustrations" text="Lacks network in Digital Media Too many tools (Fb groups, slacks etc)" />
        </div>
      </div>
    </div>
  );
}

export default Persona;
