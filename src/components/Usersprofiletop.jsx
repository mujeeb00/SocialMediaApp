import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

const Usersprofiletop = ({ user }) => {
  

  useEffect(() => {
    if (user) {
      console.log('User:', user);
    }
  }, [user]);

  if (!user) {
    // Show a loader while data is being fetched
    return <Spinner animation="border" />;
  }

  // Render the user profile component
  return (
    <div className="row" key={user.id}>
      <div className="col-2 ps-3">
        <img
          className="rounded-circle"
          style={{ width: '50px' }}
          src={user.avatar_url}
          alt=""
        />
      </div>
      <div className="col-4">
        <p className="fw-bold">
          {user.login}
          <br />
          <span className="fw-light">{user.type}</span>
        </p>
      </div>
    </div>
  );
};

export default Usersprofiletop;
