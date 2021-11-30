import React from 'react'
import { auth } from './firebase'

const HomePage = ({presentUser}) => {
    return (
        <div>
            <h1>Welcome to {presentUser.email}</h1>
            <button onClick={()=>auth.signOut()}>SignOut</button>
        </div>
    )
}

export default HomePage
