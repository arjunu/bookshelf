import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import * as styles from './AddReviewPopup.css';
import ReactStars from "react-stars";

export default class AddReviewPopup extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            name: "",
            rating: 0
        };
    }

    render() {

        return (
            <div className={styles.wrapper}>
                <div className={styles.popup}>
                    <span className={styles.title}>Add New Review</span>
                    <form className={styles.form}>
                        <input className={styles.input}
                               type="text"
                               placeholder="Book Name"/>

                        <ReactStars
                            count={5}
                            value={this.state.rating}
                            size={24}
                            color2={'#ffd700'}
                        />

                        <textarea className={styles.textArea}/>

                        <div className={styles.buttonsWrapper}>
                            <button className={styles.button}>Save</button>
                            <button className={classNames(styles.button, styles.cancel)}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

AddReviewPopup.propTypes = {};