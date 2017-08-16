import './styles.css';
import * as React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import configureStore from "./store.js";
import App from './containers/App/App';

export const store = configureStore();

render(
    <Provider store={store}>
            <App/>
    </Provider>,
    document.getElementById('root')
);