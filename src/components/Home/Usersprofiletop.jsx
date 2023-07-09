import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import {SlOptionsVertical } from 'react-icons/sl'
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
    <div className=" profilediv d-flex justify-content-start position-relative " key={user.id}>
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
      <div
          className="text-light position-absolute top-0 end-0"
          
        ><SlOptionsVertical /></div>
    </div>
  );
};

export default Usersprofiletop;
