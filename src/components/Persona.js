import React from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

import Card from './Card';
import UserDetail from './UserDetail';


function Persona() {

  return (
    <div className="Persona">
      <UserDetail />
      <div className="Persona_content">
        {/* <ResponsiveMasonry columnsCountBreakPoints={{550: 1, 750: 2}} >
          <Masonry gutter={20}>
            <Card title="🎭 personality" text="ENFP-A The Campaigner" />
            <Card title="📱 digital communities" text="ENFP-A The Campaigner" />
            <Card title="🎓 education" text="ENFP-A The Campaigner" />
            <Card title="💻 digital media" text="Currently uses online tutorials and/or discussion boards to learn digital media. Sometimes signs up for digital conferences to experience the community more, but may not fully participate. Talks primarily to professors for any advice related to field. Googles the rest. " />
            <Card title="💼 work life" text="Mid level position, managing a small team (2-3) of juniors." />
            <Card title="🎯 goals" text="Meet like-minded people Get help / level-up skills Step out of current profession" />
            <Card title="💃🏻 hobbies" text="Coffee • Travelling • Tennis • Cooking • Art & Architecture  " />
            <Card title="😈 frustrations" text="Lacks network in Digital Media Too many tools (Fb groups, slacks etc)" />
          </Masonry>
        </ResponsiveMasonry> */}
        <div class="Persona_test">
          <Card title="🎭 personality" text="ENFP-A The Campaigner" />
          <Card title="🎓 education" text="ENFP-A The Campaigner" />
          <Card title="💼 work life" text="Mid level position, managing a small team (2-3) of juniors." />
          <Card title="💃🏻 hobbies" text="Coffee • Travelling • Tennis • Cooking • Art & Architecture  " />
          <Card title="📱 digital communities" text="ENFP-A The Campaigner" />
          <Card title="💻 digital media" text="Currently uses online tutorials and/or discussion boards to learn digital media. Sometimes signs up for digital conferences to experience the community more, but may not fully participate. Talks primarily to professors for any advice related to field. Googles the rest. " />
          <Card title="🎯 goals" text="Meet like-minded people Get help / level-up skills Step out of current profession" />
          <Card title="😈 frustrations" text="Lacks network in Digital Media Too many tools (Fb groups, slacks etc)" />
        </div>
      </div>
    </div>
  );
}

export default Persona;
