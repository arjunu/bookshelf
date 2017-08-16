import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as styles from './App.css';
import Login from '../../components/Login/Login';

class App extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {};
    }

    render() {

        const {loggedIn} = this.props;

        return !loggedIn ? <Login/> : <div></div>;
    }
}

App.propTypes = {};

export function mapStateToProps(state) {

    return {};
}

export default connect(mapStateToProps)(App);