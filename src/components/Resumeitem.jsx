import React from "react"

function Resumeitem(props) {
    return (
        <div className="resumeItem">
            <h6>{props.title}</h6>
            <h6>{props.company}</h6>
            <p>{props.role}</p>
            <p>
                {props.stack.map((item, index) => (
                    <span key={index}>{item}</span>
                ))}
            </p>
            <a href={props.link} target="_blank" rel="noferrer"/>
        </div>
    )
}

export default Resumeitem