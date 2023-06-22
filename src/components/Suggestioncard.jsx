import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './Suggestioncard.css'

const Suggestioncard = () => {

    const [data,setData]=useState([])

    axios.get('https://api.github.com/users').then((res)=>{setData(res.data) }).catch((err)=>{console.log(err,'error')})
  return (
    <div className='suggestion-container rounded mt-3'>
      <div className="header">
        <h5 className='text-center mb-4 p-2'>Who to follow</h5>
      </div>
      <div className="cardbody ps-1">

        {/* Map method */}
        {
          data.slice(5,10).map((user)=>(
            <div className="row">
            <div className="col-3">
                <img className='rounded-circle' style={{width:'50px'}} src={user.avatar_url} alt="" />
            </div>
            <div className="col-8">
                {/* Name */}
                <p>{user.login}</p>
               

                {/* title */}
                <p>{user.type}</p>
            </div>
        </div>
          ))
        }
        

      </div>
    </div>
  )
}

export default Suggestioncard
