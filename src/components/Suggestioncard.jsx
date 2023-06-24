import React from "react";
import { useState } from "react";
import axios from "axios";
import "./Suggestioncard.css";
import {HiPlus} from 'react-icons/hi'
import Usersdata from "../hooks/Usersdata";

const Suggestioncard = () => {
  const users = Usersdata();

  
  return (
    <div className="suggestion-container rounded mt-3">
      <div className="header">
        <h5 className="text-center mb-4 p-2">Who to follow</h5>
      </div>
      <div className="cardbody ps-1">
        {/* Map method */}
        {users.slice(5, 10).map((user) => (
          <div className="row">
            <div className="col-3">
              <img
                className="rounded-circle"
                style={{ width: "50px" }}
                src={user.avatar_url}
                alt=""
              />
            </div>
            <div className="col-5">
             
              {/* Name */}

              
              <p className="fw-bold">{user.login}<br /> <p className="fw-light">{user.type}</p></p>
              
            </div>
            <div className="col-3">
              <button className="addbtn btn btn-primary  btn-primary-soft icon-md rounded-circle ms-3 mt-2"><HiPlus/></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestioncard;
