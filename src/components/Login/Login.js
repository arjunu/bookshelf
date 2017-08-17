import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Login.css';

const Login = () => {
    return <div className={styles.wrapper}>
        <div className={styles.formWrapper}>
            <h1 className={styles.title}>Bookshelf</h1>
            <form>
                <input className={styles.input}
                       type="text"
                       placeholder="Username"/>

                <input className={styles.input}
                       type="password"
                       placeholder="Password"/>

                <button className={styles.button}>Login</button>

                <p className={styles.message}>Invalid credentials</p>
            </form>
        </div>
    </div>
};

export default Login;