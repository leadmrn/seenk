import React, { useState, useEffect } from 'react';
import Atom from './Atom';

import dataPersonas from '../data/data.json';

function Card(props) {

  const data = dataPersonas.personas[props.idUser - 1];

  const dataPersonality = data.personality;
  const dataEducation = data.education;
  const dataWork  = data.work;
  const dataHobbies = data.hobbies;
  const dataDigitCom = data.digitCom;

  const renderSwitch = (param)=>{
    switch(param){
      case 'personality':
        return (
          <div className={"Card_" + param}>
            <div>
              <img src={dataPersonality.picture} />
            </div>
            <div>
              <p>{dataPersonality.subtitle}</p>
              <p>{dataPersonality.title}</p>
            </div>
          </div>
        );
      case "education":
        return (
          <div className={"Card_" + param}>
            <div>
              <input type="checkbox" defaultChecked={dataEducation.graduate === true ? true : false} />
              <div>
                <p>Graduate</p>
                {dataEducation.graduateDesc ? <p className="text">{dataEducation.graduateDesc}</p> : ''}
              </div>
            </div>
            <div>
              <input type="checkbox" defaultChecked={dataEducation.undergraduate === true ? true : false} />
              <div>
                <p>Underraduate</p>
                {dataEducation.undergraduateDesc ? <p className="text">{dataEducation.undergraduateDesc}</p> : ''}
              </div>
            </div>
            <div>
              <input type="checkbox" defaultChecked={dataEducation.highSchool === true ? true : false} />
              <div>
                <p>High school</p>
                {dataEducation.highSchoolDesc ? <p className="text">{dataEducation.highSchoolDesc}</p> : ''}
              </div>
            </div>
          </div>
        );
      case "work":
        return (
          <div className={"Card_" + param}>
            <div>
              {dataWork.atoms.map((atom, i)=>{
                return(<Atom name={atom} key={i} type="work" />)
              })}
            </div>
            <p className="text">{dataWork.text}</p>
          </div>
        );
      case "hobbies":
        return (
          <div className={"Card_" + param}>
            <p>
              {dataHobbies.map((hobbie, i)=>{
                return(<span key={i}>{hobbie} •</span>)
              })}
            </p>
          </div>
        );
      case "digitCom":
        return (
          <div className={"Card_" + param}>
            {dataDigitCom.map((pic, i)=>{
              return (<img src={pic} key={i} />)
            })}
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
