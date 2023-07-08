import React, { useEffect, useState } from "react";
import user from "./Images/user.jpg";
import "./Home.css";
import { BsImageFill } from "react-icons/bs";
import { PiVideoFill } from "react-icons/pi";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { FaRegSmile } from "react-icons/fa";
import UsersProfile from '../Home/UsersProfile'
import Usersprofiletop from '../Home/Usersprofiletop'
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { Alert, Spinner } from "react-bootstrap";

const Posting = () => {
  const [text, setText] = useState("");
  const [posttext, setpostText] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [like,setLike]=useState([])


  function handleText(e) {
    setText(e.target.value);
  }

  function liked(postId) {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 1300);
    // setColor('color')
    setLike([...like, postId])
  }


  const textPost = () => {
    if (text.trim() !== "") {
      setpostText((prevPosts) => [...prevPosts, text]);
      setText("");
    }
  };

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
              value={text}
              placeholder="Share your thoughts..."
              onChange={(e) => handleText(e)}
            ></textarea>
          </form>
        </div>
        {/* <!-- Share feed toolbar START --> */}
        <ul class="nav nav-pills nav-stack small fw-normal">
          <li class="nav-item me-3">
            <label
              class="nav-link bg-dark py-1 px-2 mb-0"
              data-bs-toggle="modal"
              data-bs-target="#feedActionPhoto"
              style={{ color: "#81A1A8" }}
            >
              <input type="file" style={{ display: "none" }} />
              <BsImageFill className="me-1 mb-1" style={{ color: "#0CBC87" }} />
              {"Photo"}
            </label>
          </li>
          <li class="nav-item me-3">
            <a
              class="nav-link bg-dark py-1 px-2 mb-0"
              href="#!"
              data-bs-toggle="modal"
              data-bs-target="#feedActionVideo"
              style={{ color: "#81A1A8" }}
            >
              <PiVideoFill className="me-1 mb-1" style={{ color: "#4F9EF8" }} />
              {"Video"}
            </a>
          </li>
          <li class="nav-item me-3">
            <a
              href="#"
              class="nav-link bg-dark py-1 px-2 mb-0 "
              data-bs-toggle="modal"
              data-bs-target="#modalCreateEvents"
              style={{ color: "#81A1A8" }}
            >
              <BsFillCalendarEventFill
                className="me-1 mb-1"
                style={{ color: "#D6293E" }}
              />
              {"Events"}
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link bg-dark py-1 px-2 mb-0 "
              href="#!"
              data-bs-toggle="modal"
              data-bs-target="#modalCreateFeed"
              style={{ color: "#81A1A8" }}
            >
              <FaRegSmile className="me-1 mb-1" style={{ color: "#F0C02E" }} />
              {"Feeling/Activity"}
            </a>
          </li>
          <li className="nav-item ms-2">
            <button className="btn-sm btn btn-primary" onClick={textPost}>
              Post
            </button>
          </li>
          <li class="nav-item dropdown ms-lg-auto">
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
            </ul>
          </li>
        </ul>
      </div>
      
        {posttext.map((post, index) => (
         <div className="card main-container card-body mt-2">
            <div
              className="d-flex justify-content-start Textcontainer  rounded"
              key={index}
            >
              <div className="p-1">
                <img
                  className="rounded-circle me-1"
                  style={{ width: "45px" }}
                  src={user}
                  alt=""
                />
              </div>
              <div className="">
                <span>Sam lanson</span> <br />{" "}
                <p className="fw-light text-secondary">web Developer</p>
              </div>
              <br />
            </div>
            <div className="text-secondary fs-3 p-2 rounded " key={index}>
              {post}
            </div>
            <div className="mt-1"  onClick={() => liked(post.id)}>
                <span className="me-2 ms-2 Post_icon" >
                  {showAlert && (
                    <div
                   
                      className="alert alert-success mb-0 alert-dismissible fade show"
                      role="alert" 
                    >
                      Liked successfully!
                    </div>
                  )}
                  <AiFillLike className="me-1 "   style={{color: like.includes(post.id) ? 'blue' : 'white'}} />
                  <span   style={{color: like.includes(post.id) ? 'blue' : 'white'}} className="text-center postspan"   >
                    Liked {Math.floor(Math.random() * 100)}
                  </span>
                </span>
                <span className="me-2 ms-2 Post_icon">
                  <FaComment className="me-1 " />
                  <span className="text-center postspan">
                    Comments {Math.floor(Math.random() * 10)}
                  </span>
                </span>
              </div>
            <UsersProfile  user={user} />
                     
            </div>
         
        ))}
      
    </div>
  );
};

export default Posting;
