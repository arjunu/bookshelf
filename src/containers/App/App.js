import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as styles from './App.css';

class App extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {};
    }

    render() {

        return <div>
            Bookshelf
        </div>;
    }
}

App.propTypes = {
};

export function mapStateToProps(state) {

    return {};
}

export default connect(mapStateToProps)(App);