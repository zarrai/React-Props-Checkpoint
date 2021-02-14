import React from 'react'

const Profile = (props) => {
    const style = {textAlign:'center'}
    return (
        <div style={style}>
            <h1>{props.fullName}</h1>
            <h1>{props.data.profession}</h1>
            <h1>{props.data.bio}</h1>
                 {props.children}
            <br/>
            <button type="button" className="btn btn-primary" onClick={() => { props.data.handlename(props.data.fullName) }}>Alert</button>
            <p>{props.s}</p>
        </div>
    )
}

Profile.defaultProps = {
    fullName : 'zarrai saif'
    
}

export default Profile
