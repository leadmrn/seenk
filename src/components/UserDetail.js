import React from 'react';
import Atom from './Atom';


function UserDetail() {

  return (
    <div className="UserDetail">
      <div className="UserDetail_pic">
        <Atom name="Current Student" />
      </div>
      <div className="UserDetail_infos">
        <div>
          <h2>Greg Brunner</h2>
          <div>
            <p>36</p>
            <Atom name="Female" />
            <Atom name="London" />
          </div>
          <p className="text">
            Greg previously had a mid-level job crunching numbers at a big company. One of his colleagues introduced him to HES, which transformed his professional life - he launched his own tech startup. He is now highly driven and his work has been succesful.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
