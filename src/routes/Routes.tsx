import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {User} from "../components/user/User";
import {Sidebar} from "../components/sidebar/Sidebar";

class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path={'/'} exact={true} component={User}/>
                    <Route path={'/select'} exact={true} component={Sidebar}/>
                </Switch>
            </div>
        );
    }
}

export default Routes;