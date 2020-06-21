import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header >
            <ul id ="nav">
                <li>
                    <Link to='/' className="homeLink">Home</Link>
                </li>
                <li>
                    <Link to='/history' className ="historyLink">History</Link>
                </li>
            </ul>

            <h1>RESTy</h1>
        </header>
    );
}

export default Header;