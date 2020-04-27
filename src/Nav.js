import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
    return(
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/studentList'>StudentList</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;
