import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RandomImages from './RandomImages';
import UsersProfile from './UsersProfile';
import Usersdata from '../hooks/Usersdata';
import { AiFillLike } from 'react-icons/ai';
import { FaComment } from 'react-icons/fa';
import { Spinner } from 'react-bootstrap';
import Usersprofiletop from './Usersprofiletop'
const Postdata = () => {
  const [posts, setPosts] = useState([]);
  const users = Usersdata();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);



  if (loading) {
    return <div className='text-center mt-5'><Spinner animation="border" /></div>;
  }

  return (
    <div>
      {posts.slice(8, 15).map((post, index) => {
        const user = users[index % users.length];

        return (
          <div key={post.id}>
            <div style={{backgroundColor:'#141519'}} className="text-white p-3 mt-2 rounded">
              <Usersprofiletop user={user} />
              <h3 className="mt-4">{post.title}</h3>
              <p>{post.body}</p>
              <RandomImages  />
              <div className='mt-3'>
                <span className="me-2 ms-2">
                  <AiFillLike className="me-1 " />
                  <span className="text-center ">
                    Liked {Math.floor(Math.random() * 100)}
                  </span>
                </span>
                <span className="me-2 ms-2">
                  <FaComment className="me-1 " />
                  <span className="text-center ">
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
