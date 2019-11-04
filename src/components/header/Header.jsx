import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Head = () => {
    return (
        <div className="allHead">
                <div className="logo">
            <Link to='/home'>
                    <span>Youre Logo</span>
            </Link>

                </div>
            <div className="menu">
                <Link to='/home'>
                    <div>Home</div>
                </Link>
                <Link to='/about'>
                    <div>About</div>
                </Link>
                <Link>
                    <div>Servicing</div>
                </Link>
                <Link>
                    <div>Portfolio</div>
                </Link>
                <Link>
                    <div>Blog</div>
                </Link>
                <Link>
                    <div>Contact us</div>
                </Link>
            </div>
        </div>
    )
}

export default Head