import React from 'react'

export default function Header() {
    return (
        <div className="header-container">
            <div className="header-btn">
                <a href="#" className="right-list"><i class="fas fa-user"></i>Sign In</a>
            </div>
            <div className="header-btn">
                <a href="#"><i class="fas fa-shopping-cart"></i>Cart</a>
            </div>
            <div className="header-btn">
                <a href="#"><i class="fas fa-globe"></i>EN</a>
            </div>
        </div>
    )
}
