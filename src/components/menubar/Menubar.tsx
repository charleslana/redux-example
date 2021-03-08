import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Menubar extends Component {
    render() {
        return (
            <div>
                <Link to={'/'}>List</Link>
                <Link to={'/select'}>Select</Link>
            </div>
        );
    }
}

export default Menubar;