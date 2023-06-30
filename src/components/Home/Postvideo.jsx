import React from "react";
import Usersprofiletop from "./Usersprofiletop";
import UsersProfile from "./UsersProfile";

const Postvideo = () => {
  return (
    <div>
      <Usersprofiletop />
      <div class="ratio ratio-4x3">
        <div>
          <iframe
            width="450"
            height="315"
            src="https://www.youtube.com/embed/pJwjgXcJ4zQ"
            title="Demo video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <UsersProfile />
    </div>
  );
};

export default Postvideo;
