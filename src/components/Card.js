import React from 'react';
import Atom from './Atom';


function Card(props) {

  const renderSwitch = (param)=>{
    switch(param){
      case 'personality':
        return (
          <div className={"Card_" + param}>
            <div>
              <img src="https://i.pinimg.com/originals/77/2e/dc/772edcf3982e565b6450a01f5a87ac2c.png" />
            </div>
            <div>
              <p>ENFP-A</p>
              <p>The campaigner</p>
            </div>
          </div>
        );
      case "education":
        return (
          <div className={"Card_" + param}>
            <div>
              <input type="checkbox" />
              <div>
                <p>Graduate</p>
              </div>
            </div>
            <div>
              <input type="checkbox" checked />
              <div>
                <p>Underraduate</p>
                <p className="text">At a local specialised college. Studied applied design, which quickly turned into a career.</p>
              </div>
            </div>
            <div>
              <input type="checkbox" checked />
              <div>
                <p>High school</p>
                <p className="text">Local high school doing honors level course work. Highly motivated, a high achiever. Participated in a few academic clubs.</p>
              </div>
            </div>
          </div>
        );
      case "work":
        return (
          <div>
            <Atom name="Entrepreneur" type="work" />
            <p className="text">Has been running his startup for 5 years now. He is slowly starting to hire teams such that he can step away from the project a little.</p>
          </div>
        );
      case "hobbies":
        return (
          <div className={"Card_" + param}>
            <p>Travelling • Hiking • Judo •  Youtube ‘Hustle’rs • Nightlife</p>
          </div>
        );
      case "digitCom":
        return (
          <div className={"Card_" + param}>
            <img src="https://messengernews.fb.com/wp-content/uploads/2020/10/Rebrand-Logo.png" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" />
            <img src="https://image.flaticon.com/icons/png/512/2111/2111615.png" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/800px-YouTube_full-color_icon_%282017%29.svg.png" />
          </div>
        );
      default :
        return (
          <p className="text">
            {props.text}
          </p>
        );
    }
  }

  return (
    <div className="Card">
      <div className="Card_title">{props.title}</div>
      {renderSwitch(props.type)}
    </div>
  );
}

export default Card;
