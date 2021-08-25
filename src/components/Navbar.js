import React from 'react'
import Img from '../images/logo.png'
import Banner from './Banner'

export default function Navbar() {
    return (
        <>
            <div className="container reorder-navbar">
                <div>
                    <img src={Img} alt="logo" className="logo" />
                </div>
                <div>
                    <nav>
                        <ul>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">NEWS</a></li>
                            <li><a href="#">SHOP</a></li>
                            <li><a href="#">FIXTURES</a></li>
                            <li><a href="#">PLAYERS</a></li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <nav>
                        <div>
                            <input className="search-bar" placeholder="Search the entire store here..." /><button className="btn-search"><i class="fas fa-search"></i></button>
                        </div>
                    </nav>
                </div>
            </div>
            <Banner />
        </>
    )
}
