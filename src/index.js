import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import App from "./components/Parents/App";
import { PersistGate } from "redux-persist/integration/react"
import {store, persist} from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import LoginPage from "./components/Login and Register/LoginPage";
import ForgotPasswordPage from "./components/Login and Register/ForgotPasswordPage";
import PreRegisterPage from "./components/Login and Register/PreRegisterPage";
import UserRegisterPage from "./components/Login and Register/UserRegisterPage";
import PreLoginPage from "./components/Login and Register/PreLoginPage";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NotFound from "./components/Extra/NotFound";
import BackendError from "./components/Extra/BackendError";
import StudentRegisterPage from "./components/Login and Register/StudentRegisterPage";

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persist}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/preLogin"><PreLoginPage/></Route>
                    <Route exact path="/login"><LoginPage/></Route>
                    <Route exact path="/404"><NotFound/></Route>
                    <Route exact path="/500"><BackendError/></Route>
                    <Route exact path="/forgot"><ForgotPasswordPage/></Route>
                    <Route exact path="/preRegister"><PreRegisterPage/></Route>
                    <Route exact path="/userRegister"><UserRegisterPage/></Route>
                    <Route exact path="/studentRegister"><StudentRegisterPage/></Route>
                    <Route path="/"><MuiThemeProvider><App/></MuiThemeProvider></Route>
                </Switch>
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
