import React from 'react'
import Usersprofiletop from './Usersprofiletop'
import UsersProfile from './UsersProfile'

const Postvideo = () => {
  return (
    <div>
      <Usersprofiletop/>
      <div className="container rounded">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/pJwjgXcJ4zQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <UsersProfile/>
    </div>
  )
}

export default Postvideo
