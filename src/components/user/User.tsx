import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import UsersInterface from "../../interfaces/UsersInterface";

export class User extends Component<UsersInterface & RouteComponentProps> {
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

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(User)
);