import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Login from '../../components/Login/Login';
import Reviews from '../Reviews/Reviews';
import {login} from "../../actions";

class App extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {

        const {loggedIn, loginError} = this.props;

        return !loggedIn ? <Login onLogin={(username, password) => this.props.dispatch(login({username, password}))}
                                  error={loginError}
            /> :
            <Reviews/>;
    }
}

App.propTypes = {
    loggedIn: PropTypes.bool,
    loginError: PropTypes.string
};

export function mapStateToProps(state) {

    return {
        loggedIn: state.global.getIn(["user", "loggedIn"]),
        loginError: state.global.getIn(["user", "error"]),
    };
}

export default connect(mapStateToProps)(App);