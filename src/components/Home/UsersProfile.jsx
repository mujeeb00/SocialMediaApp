import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { BsFillSendFill } from "react-icons/bs";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import userimg from "./Images/user.jpg";

const UsersProfile = ({ user }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleAddComment = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  if (!user) {
    // Show a loader while data is being fetched
    return <Spinner animation="border" />;
  }

  // Render the user profile component
  return (
    <div className="row" key={user.id}>
      <div className="d-flex justify-content-start mt-2">
        <div className="">
          <img
            className="rounded-circle text-center"
            style={{ width: "40px" }}
            src={userimg}
            alt=""
          />
        </div>

        <div className="ms-2">
          <InputGroup className="mb-3 ">
            <Form.Control
            className="bg-dark  border-0 text-bg-secondary"
              placeholder="Add comment..."
              aria-label="Add comment..."
              aria-describedby="basic-addon2"
              value={comment}
              onChange={handleCommentChange}
            />
            <Button
            className="border-1 border-dark"
              variant="outline-secondary"
              id="button-addon2"
              onClick={handleAddComment}
            >
              <BsFillSendFill />
            </Button>
          </InputGroup>
        </div>
      </div>

      {comments.map((comment, index) => (
        <div className="row" key={index}>
          <div className="col-1 ">
            <img
              className="rounded-circle text-center mt-3"
              style={{ width: "35px" }}
              src={userimg}
              alt=""
            />
          </div>
          <div className="col-8">
            <p className="mt-3 ms-1 bg-dark p-3 rounded fw-lighter fs-6">
              <span className='text-light' >Lori furgeson</span> <br />
              &nbsp;&nbsp;<span className="text-secondary fw-lighter fs-6">{comment}</span>
            </p>

            <ul class="nav nav-divider  small">
              <li class="nav-item">
                <a class="nav-link text-secondary" href="#!">
                  {" "}
                  Like {Math.floor(Math.random() * 100)}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-secondary" href="#!">
                  {" "}
                  Reply
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-secondary" href="#!">
                  {" "}
                  View {Math.floor(Math.random() * 10)} replies
                </a>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersProfile;
