import React, {Component} from 'react';
import {connect} from 'react-redux';
import UsersInterface from "../../interfaces/UsersInterface";

export class User extends Component<UsersInterface> {
    render() {
        return (
            <div>
                <h1>User active: {this.props.users.active}</h1>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    users: state.usersReducer
});

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(User);