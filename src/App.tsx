import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {BrowserRouter} from 'react-router-dom';
import Menubar from "./components/menubar/Menubar";
import Routes from "./routes/Routes";

function App() {
    return (
        <div>
            <Provider store={store}>
                <BrowserRouter>
                    <Menubar/>
                    <Routes/>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
