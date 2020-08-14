import React from 'react';
import axios from "axios";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
class RegisterPage extends React.Component {
    registration(values) {
        const details = {
            'username': values.username,
            'password': values.password,
        }
        var formBody = [];
        for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        axios({
            method: 'POST',
            url: 'http://localhost:8080'+ 'rest/Register',
            data: formBody,
        })
    }

    submit = (values) => {
        this.registration(values)
    }

    render() {
        return (
            <main>
                <section className="login">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <p>Register with your email and password to continue</p>

                                <form onSubmit={this.props.handleSubmit(this.submit)}>
                                    <div className="form-group">
                                        <Field
                                            name="username"
                                            className="text"
                                            component="input"
                                            type="text"
                                            placeHolder="Username"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <Field
                                            name="password"
                                            className="text"
                                            component="input"
                                            type="text"
                                            placeHolder="Password"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}


RegisterPage = reduxForm({
    form: 'registration',
    destroyOnUnmount: false
})(RegisterPage)

const mapStateToProps = (state) => ({})


export default connect(mapStateToProps)(RegisterPage);