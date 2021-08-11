import React from 'react';
import Atom from './Atom';


function UserDetail() {

  return (
    <div className="UserDetail">
      <div className="UserDetail_pic">
        <div className="UserDetail_atom">
          <Atom name="Current Student" type="role" />
        </div>
        <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
        <div className="triangle triangle-1"></div>
        <div className="triangle triangle-2"></div>
        <div className="triangle triangle-3"></div>
        <div className="triangle triangle-4"></div>
      </div>
      <div className="UserDetail_infos">
        <div>
          <h2>Greg Brunner</h2>
          <div className="UserDetail_details">
            <p className="UserDetail_age">36</p>
            <Atom name="Male" type="male" />
            <Atom name="San Francisco" type="location" />
          </div>
          <p className="text UserDetail_desc">
            Greg previously had a mid-level job crunching numbers at a big company. One of his colleagues introduced him to HES, which transformed his professional life - he launched his own tech startup. He is now highly driven and his work has been succesful.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
