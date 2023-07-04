import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

const Usersprofiletop = ({ user }) => {
  

  useEffect(() => {
    if (user) {
      console.log('User:', user);
    }
  }, []);

  if (!user) {
    return <Spinner animation="border" />;
  }

  // Render the user profile component
  return (
    <div className=" profilediv d-flex justify-content-start" key={user.id}>
      <div className="">
        <img
          className="rounded-circle me-2"
          style={{ width: "50px" }}
          src={user.avatar_url}
          alt=""
        />
      </div>
      <div className="">
        <span className="usertitle">{user.login}</span> <br />{" "}
        <p className="fw-light text-secondary usertype">{user.type}</p>
      </div>
    </div>
  );
};

export default Usersprofiletop;
