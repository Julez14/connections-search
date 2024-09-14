import React from "react";

function Navbar(){
    return(
    <div>
        <header>
            <h1 className="webTitle">
                Connections-Search
            </h1>
            <div className="navContainer">
            <nav className="Navbar">
                <ul className="navElements">
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Connections">Connections</a></li>
                    <li><a href="#AI">AI Recommendations</a></li>
                </ul>
            </nav>
            </div>

        </header>
    </div>
    )

}

export default Navbar;