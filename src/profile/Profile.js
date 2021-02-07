import React from 'react'

const Profile = (props) => {
    return (
        <div>
            <h1>{props.data.fullName}</h1>
            <h1>{props.data.profession}</h1>
            <h1>{props.data.bio}</h1>
                 {props.children}
            <h1>{props.handleName(props.data.fullName)}</h1>

        </div>
    )
}

export default Profile
