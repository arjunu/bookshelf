import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import * as styles from './AddReviewPopup.css';
import ReactStars from "react-stars";

export default class AddReviewPopup extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            title: "",
            rating: 0,
            review: ""
        };
    }

    render() {

        const {onSave, onCancel} = this.props;

        return (
            <div className={styles.wrapper}>
                <div className={styles.popup}>
                    <span className={styles.title}>Add New Review</span>
                    <div>
                        <input className={styles.input}
                               onChange={event => this.setState({title: event.target.value})}
                               type="text"
                               placeholder="Book Name"/>

                        <ReactStars
                            count={5}
                            value={this.state.rating}
                            size={24}
                            color2={'#ffd700'}
                            onChange={rating => this.setState({rating})}
                        />

                        <textarea className={styles.textArea}
                                  placeholder="Review"
                                  onChange={event => this.setState({review: event.target.value})}
                        />

                        <div className={styles.buttonsWrapper}>
                            <button
                                className={classNames(styles.button, {"inert": !this.state.title || this.state.rating < 0.5 || !this.state.review})}
                                onClick={() => onSave(this.state.title, this.state.rating, this.state.review)}>
                                Save
                            </button>

                            <button className={classNames(styles.button, styles.cancel)}
                                    onClick={onCancel}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AddReviewPopup.propTypes = {};