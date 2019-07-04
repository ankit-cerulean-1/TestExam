import React from 'react';

const Message = (props) => {
    return (
        <div>
            <h3 className="text-center message" style={{color: props.color}}>{props.Message}</h3>
        </div>
    )
}

export default Message;