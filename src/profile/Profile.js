import React from 'react'

const Profile = (props) => {
    return (
        <>
            <h1>{props.data.fullName}</h1>
            <h1>{props.data.profession}</h1>
            <h1>{props.data.bio}</h1>
                 {props.children}
            <button type="button" className="btn btn-primary" onClick={() => { props.data.handlename(props.data.fullName) }}>Alert</button>
            <p>{props.s}</p>
        </>
    )
}

Profile.defaultProps = {
    
}

export default Profile
