import React from 'react';
import Atom from './Atom';


function UserDetail() {

  return (
    <div className="UserDetail">
      <div className="UserDetail_pic">
        <Atom name="Current Student" type="role" />
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
