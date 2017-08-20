import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Login.css';
import classNames from 'classnames';

export default class Login extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            username: "",
            password: ""
        };
    }

    render() {
        const {onLogin, error} = this.props;

        return <div className={styles.wrapper}>
            <div className={styles.formWrapper}>
                <h1 className={styles.title}>Bookshelf</h1>
                <input className={styles.input}
                       type="text"
                       placeholder="Username"
                       onChange={event => this.setState({username: event.target.value})}
                />

                <input className={styles.input}
                       type="password"
                       placeholder="Password"
                       onChange={event => this.setState({password: event.target.value})}
                />

                <button
                    className={classNames(styles.button, {"inert": !this.state.username || !this.state.password})}
                    onClick={() => onLogin(this.state.username, this.state.password)}
                >
                    Login
                </button>

                {error && <p className={styles.message}>{error}</p>}
            </div>
        </div>
    }
}

Login.propTypes = {
    onLogin: PropTypes.func,
    error: PropTypes.string
};