import React from "react";
import "./Sidecard.css";
import user from "../Images/user.jpg";

const Sidecard = () => {
  return (
    <div className="main">
      <div className="background"></div>
      <div className="body">
        <div className="container text-center">
          {/* Profile */}
          <div className="profile">
            <img className="rounded profileimg border border-white border-3" src={user} alt="" />
          </div>
          {/* Info */}
          <div className="detail">
            <h5 className="text-white pt-2 m-0">
              Sam lanson
            </h5>
            <small className="silver">Web Developer at Webistica</small>
            <p className="silver mt-3">
              I'd love to change the world, but <br /> they won’t give me the source
              code.
            </p>

             {/* Stats */}
          <div className="stats">
            
              <li>250 <br /><span className="silver"> Post</span></li>
              <li>2.5k <br /><span className="silver"> Followers</span></li>
              <li>365 <br /><span className="silver"> Following</span></li>
          
          </div>
          </div>
         
        </div>
         
         {/* divider */}
        <div className="divider"></div>

        {/* Menu */}
        <div className="menu mt-4">
          <ul style={{listStyleType:'none'}}>
            <li>Feed</li>
            <li>Connections</li>
            <li>Latest News</li>
            <li>Events</li>
            <li>Groups</li>
            <li>Notifications</li>
            <li>Settings</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidecard;
