import React from 'react'

const UserComponent = ({names,myName,myBioData,college}) => {
    
  return (
    <div>
        <h1>{names}</h1>
        <h1>{myName}</h1>
        <p>{myBioData.myName}</p>
        <p>{myBioData.email}</p>
        <h1>{college[2]}</h1>
    </div>
  )
}

export default UserComponent