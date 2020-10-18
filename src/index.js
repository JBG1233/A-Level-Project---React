import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import App from "./components/App";
import * as serviceWorker from "./registerServiceWorker";
import { PersistGate } from "redux-persist/integration/react"
import {store, persist} from "./redux/store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persist}>
                <App/>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();