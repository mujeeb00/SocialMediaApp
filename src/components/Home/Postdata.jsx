import React, { useState, useEffect } from "react";
import axios from "axios";
import RandomImages from "./RandomImages";
import UsersProfile from "./UsersProfile";
import Usersdata from "../hooks/Usersdata";
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { Spinner } from "react-bootstrap";
import Usersprofiletop from "./Usersprofiletop";
import "./Home.css";



const Postdata = () => {
  const [posts, setPosts] = useState([]);
  const users = Usersdata();
  const [loading, setLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [like,setLike]=useState([])

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  function liked(postId) {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 1300);
    // setColor('color')
    setLike([...like, postId])
  }

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <div>
      {posts.slice(8,18).map((post, index) => {
        const user = users[index % users.length];

        return (
          <div key={post.id}>
            <div
              style={{ backgroundColor: "#141519" }}
              className="text-white p-2 mt-2  rounded p-3"
            >
              <Usersprofiletop user={user} />
              <h3 className="mt-4 text-light">{post.title}</h3>
              <p className="text-secondary">{post.body}</p>
              <RandomImages  />
              <hr className="hr" />
              <div className="mt-1 mb-1"  onClick={() => liked(post.id)}>
                <span className="me-2 ms-2 Post_icon" >
                  {showAlert && (
                    <div
                   
                      className="alert alert-success mb-0 alert-dismissible fade show"
                      role="alert" 
                    >
                      Liked successfully!
                    </div>
                  )}
                  <AiFillLike className="me-1 "   style={{color: like.includes(post.id) ? 'blue' : 'silver'}} />
                  <span   style={{color: like.includes(post.id) ? 'blue' : 'silver'}} className="text-center postspan fw-normal "   >
                    Liked {Math.floor(Math.random() * 100)}
                  </span>
                </span>
                <span className="me-2 ms-2 Post_icon">
                  <FaComment className="me-1" style={{color:'silver'}} />
                  <span className="text-center fw-normal postspan " style={{color:'silver'}}>
                    Comments {Math.floor(Math.random() * 10)}
                  </span>
                </span>
              </div>
              <UsersProfile user={user} />

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Postdata;
