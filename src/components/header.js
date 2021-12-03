import React from "react"
import Type from "react-typed"

const header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1> Welcome! </h1>
                <h2> I am a </h2>
                <Type 
                    className="type-text"
                    strings={["Problem Solver", "Critical Thinker", "Collaborator"]}
                    typeSpeed={50}
                    backSpeed={60}
                    loop 
                /> 
            </div>
        </div>
    )
}

export default header
