import React, { useState } from "react";
import user from "./Images/user.jpg";
import "./Home.css";
import {BsImageFill} from 'react-icons/bs'
import {PiVideoFill} from 'react-icons/pi'
import {BsFillCalendarEventFill} from 'react-icons/bs'
import {FaRegSmile} from 'react-icons/fa'

const Posting = () => {

  const [img,setImg]=useState([])
  // const [text,setText]=useState('')
 
  
 



  function getImage(e){
   
    setImg(e.target.files[0])
    console.log(img)
   
  }
  return (
    <div>
      <div class="card main-container card-body mt-2">
        <div class="d-flex mb-3">
          {/* <!-- Avatar --> */}
          <div class="avatar avatar-xs me-2">
            <a href="#">
              {" "}
              <img class="avatar-img rounded-circle" src={user} alt="" />{" "}
            </a>
          </div>
          {/* <!-- Post input --> */}
          <form class="w-100">
            <textarea
              class="form-control pe-4 border-0 text-bg-dark text-light "
              rows="2"
              data-autoresize=""
              placeholder="Share your thoughts..."
            ></textarea>
            <button >Post</button>
          </form>
        </div>
        {/* <!-- Share feed toolbar START --> */}
        <ul class="nav nav-pills nav-stack small fw-normal">
          <li class="nav-item me-3">
            <label
              class="nav-link bg-dark py-1 px-2 mb-0"
              data-bs-toggle="modal"
              data-bs-target="#feedActionPhoto"
              style={{color:'#81A1A8'}}
            >
              <input type="file" style={{display:'none'}} onChange={(e)=>getImage(e)} />
              <BsImageFill className="me-1 mb-1" style={{color:'#0CBC87'}}/>{'Photo'}</label>
          </li>
          <li class="nav-item me-3">
            <a
              class="nav-link bg-dark py-1 px-2 mb-0"
              href="#!"
              data-bs-toggle="modal"
              data-bs-target="#feedActionVideo"
              style={{color:'#81A1A8'}}
            ><PiVideoFill className="me-1 mb-1" style={{color:'#4F9EF8'}}/>
              {"Video"}
            </a>
          </li>
          <li class="nav-item me-3">
            <a
              href="#"
              class="nav-link bg-dark py-1 px-2 mb-0 "
              data-bs-toggle="modal"
              data-bs-target="#modalCreateEvents"
              style={{color:'#81A1A8'}}
            >
              <BsFillCalendarEventFill className="me-1 mb-1" style={{color:'#D6293E'}}/>
              {"Events"}
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link bg-dark py-1 px-2 mb-0 "
              href="#!"
              data-bs-toggle="modal"
              data-bs-target="#modalCreateFeed"
              style={{color:'#81A1A8'}}
            >
              <FaRegSmile className="me-1 mb-1" style={{color:'#F0C02E'}}/>
              {"Feeling/Activity"}
            </a>
          </li>
          <li class="nav-item dropdown ms-lg-auto">
            <a
              class="nav-link bg-dark py-1 px-2 mb-0"
              href="#"
              id="feedActionShare"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></a>
            {/* <!-- Dropdown menu --> */}
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="feedActionShare"
            >
              <li>
                <a class="dropdown-item" href="#">
                  {" "}
                  <i class="bi bi-envelope fa-fw pe-2"></i>Create a poll
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  {" "}
                  <i class="bi bi-bookmark-check fa-fw pe-2"></i>Ask a question{" "}
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  {" "}
                  <i class="bi bi-pencil-square fa-fw pe-2"></i>Help
                </a>
              </li>
              {/* <li>
                <h1>{text}</h1>
              </li> */}
            </ul>
          </li>
        </ul>
        {/* <!-- Share feed toolbar END --> */}
      </div>
      {/* <div className="container">
      <img src={URL.createObjectURL(img)} alt="" />
      </div> */}
    </div>
  );
};

export default Posting;
