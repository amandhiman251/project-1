import React from 'react';

const UserInput = ( props ) => {
    return (
        <div className = "UserInput">
            <input type = "text" onChange = {props.change} defaultValue = {props.username} />
     </div>
    )
}

export default UserInput