import { useState, useEffect } from 'react';
import axios from 'axios';

const Usersdata = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.github.com/users')
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err, 'error');
      });
  }, []);

  return users;
};

export default Usersdata;
