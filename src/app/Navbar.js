import React from 'react'
import {Link} from "react-router-dom"

export const Navbar = () => {
    return (
        <nav>
            <section>
                <h1> Redux Navbar </h1>
                <div className='navLinks'>
                    <Link to="/" >Home </Link>
                    <Link to="/posts">Posts</Link>
                    <Link to="/users">Users</Link>
                </div>
            </section>
        </nav>
    )
}