import React from 'react'
import "./Header.scss"
import Logout from "../../components/Logout/Logout"

function Header() {
    return (
        <div className="HeaderContainer">
            {/* Left Side of Header */}
            <div className="HeaderLeft">
                {/* add avatar */}
                <i class="fas fa-user"></i>
                    <div className="TimeIcon">
                        <i class="fas fa-clock"></i>
                    </div>
            </div>
            {/* Center Side of Header */}
            <div className="HeaderSearch">
                <i class="fas fa-search"></i>
                <input placeholder='Seach for Oliver'></input>
            </div>
            {/* Right Side of Header  */}
            <div className="HeaderRight">
            <i class="fas fa-question-circle"></i>
            <Logout />
            </div>
        </div>
    )
}

export default Header

