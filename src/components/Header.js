import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <h1>Who Gives A Rep?</h1>
                    <Link></Link>
                </nav>
            </header>
        );
    }
}

export default Header;