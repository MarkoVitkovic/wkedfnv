import React from 'react'
import Img from '../images/logo.png'

export default function Navbar() {
    return (
        <header>
            <div className="container">
                <img src={Img} alt="logo" className="logo"/>
                <nav>
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">NEWS</a></li>
                        <li><a href="#">SHOP</a></li>
                        <li><a href="#">FIXTURES</a></li>
                        <li><a href="#">PLAYERS</a></li>
                    </ul>
                </nav>
                <nav className="right-side">
                    <ul>
                        <li ><a href="#" className="right-list"><i class="fas fa-user"></i>Sign In</a></li>
                        <li><a href="#"><i class="fas fa-globe"></i>EN</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
