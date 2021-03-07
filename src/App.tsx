import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store/store';
import Sidebar from "./components/sidebar/Sidebar";
import User from "./components/user/User";

function App() {
    return (
        <div>
            <Provider store={store}>
                <Sidebar/>
                <User/>
            </Provider>
        </div>
    );
}

export default App;
