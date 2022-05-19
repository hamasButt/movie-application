import App from './App';
import React, {StrictMode} from 'react'
import ReactDOM from 'react-dom'
import "./app.css"
import {Provider} from "react-redux";
import Store from "./features/Store";


ReactDOM.render(
    <StrictMode>
        <Provider store={Store}>
            <App/>
        </Provider>
    </StrictMode>,
    document.getElementById('root')
)
