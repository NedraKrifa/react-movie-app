import React, { Component } from 'react'

class HomeNavbar extends Component {
    render() {
        return (
            <div className='home_navbar'>
                <h1>SMovie</h1>
                <ul className='home_list'>
                    <li className='home_item'>Sign In</li>
                    <li className='home_item'>Sign Up</li>
                </ul>
            </div>
        )
    }
}

export default HomeNavbar
