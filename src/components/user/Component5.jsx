import React, { useContext } from 'react'
import UserContext from '../../store/context/UserContext'

function Component5() {
  const {user} = useContext(UserContext);
  return (
    <div>Component5
      <h1>I am {user.name} in the 5th component</h1>
    </div>
  )
}

export default Component5