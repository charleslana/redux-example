import React, {Component} from 'react';
import {connect} from 'react-redux';
import UsersInterface from "../../interfaces/UsersInterface";
import {changeUser} from '../../store/actions/users.action';
import './index.css';

interface SidebarInterface {
    changeUser: Function
}

export class Sidebar extends Component<UsersInterface & SidebarInterface> {
    render() {
        return (
            <ul>
                {this.props.users.list.map((user, index) => (
                    <li key={index}>{user}
                        <button type={"button"} onClick={() => this.props.changeUser(user)}>Select</button>
                    </li>
                ))}
            </ul>
        );
    }
}

const mapStateToProps = (state: any) => ({
    users: state.usersReducer
});

const mapDispatchToProps = (dispatch: any) => ({
    changeUser: (user: any) => dispatch(changeUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);