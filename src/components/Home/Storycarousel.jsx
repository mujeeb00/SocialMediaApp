import React from "react";
import Usersdata from "../hooks/Usersdata";
import "./Storycard.css";
import { HiPlus } from "react-icons/hi";

const StoryCarousel = () => {
  const users = Usersdata();

  return (
    <div className="story-carousel-container ">
      <div className="story-carousel">
        <div class="card border bg-dark text-light border-2 border-dashed h-150px px-4 px-sm-5 shadow-none d-flex align-items-center justify-content-center text-center">
          <div>
            <a
              class="stretched-link btn btn-secondary rounded-circle icon-md"
              href="#!"
            >
              <HiPlus/>
            </a>
            <h6 class="mt-2 mb-0 small">Post a Story</h6>
          </div>
        </div>
        {users.slice(12, 19).map((user) => (
          <div className="story rounded" key={user.id}>
            <div className="story-overly" />
            <img
              className="story-image rounded story-overly"
              src={user.avatar_url}
              alt=""
            />
            <p className="story-legend fw-normal">{user.login}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryCarousel;
