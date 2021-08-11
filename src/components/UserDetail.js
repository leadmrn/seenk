import React from 'react';
import Atom from './Atom';

import dataPersonas from '../data/data.json';

function UserDetail(props) {

  const data = dataPersonas.personas[props.idUser - 1];

  return (
    <div className="UserDetail">
      <div className="UserDetail_pic">
        <div className="UserDetail_atom">
          <Atom name={data.role} type="role" />
        </div>
        <img src={data.picture} />
        <div className="triangle triangle-1"></div>
        <div className="triangle triangle-2"></div>
        <div className="triangle triangle-3"></div>
        <div className="triangle triangle-4"></div>
      </div>
      <div className="UserDetail_infos">
        <div>
          <h2>{data.name}</h2>
          <div className="UserDetail_details">
            <p className="UserDetail_age">{data.age}</p>
            <Atom name={data.sexe} type={data.sexe} />
            <Atom name={data.location} type="location" />
          </div>
          <p className="text UserDetail_desc">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
