// documentation: https://stackoverflow.com/questions/42311292/react-bootstrap-navbar-how-to-right-align-a-navbar-item || https://stackoverflow.com/questions/47565496/how-can-i-center-a-navbar-in-react-bootstrap



import React from 'react'
import n from "../components/n.png"

const navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
            <a className="navbar-brand" href="#"><img className ="n" src ={n} alt = "N"></img></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About Me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Experiences</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                    { /* Dropdown and Disabled burron 
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                    */}
                </ul> 
                {/* <form className="form-inline my-2 my-lg-0">
                     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    </input> 
                </form> */}
                <button className="btn btn-success" type ="submit">Search</button>
                {/* <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href= "#">Get My Resume</a>
                    </li>
                </ul> */}
            </div>
        </div>
        </nav>
    )
}

export default navigation
