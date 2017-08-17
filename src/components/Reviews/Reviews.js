import React from 'react';
import classNames from 'classnames';
import * as styles from './Reviews.css';
import ReactStars from "react-stars";
import AddReviewPopup from '../../containers/AddReviewPopup/AddReviewPopup';
import PropTypes from 'prop-types';


const Header = () => (
    <div className={styles.header}>
        <span className={styles.title}>
            <a href="/">Bookshelf</a>
        </span>
        <span className={styles.logout}>Logout</span>
    </div>
);

const Card = () => (
    <div className={styles.card}>
        <span className={styles.cardTitle}>Game of Thrones</span>
        <ReactStars
            count={5}
            value={5}
            size={24}
            edit={false}
            color2={'#ffd700'}
        />
        <p className={styles.cardDescription}>
            The read was amazing, as well as overwhelming. I could not even anticipate the events that unfolded in the
            end, and I'm still in shock and awe of it all.
        </p>
    </div>
);

const Add = () => (
    <button className={styles.add}>
        +Add Review
    </button>
);

export default class ComponentName extends React.Component {

    render() {

        return (
            <div className={styles.wrapper}>
                <Header/>
                <div className={styles.cardList}>
                    <Add/>
                    <Card/>
                </div>
                <AddReviewPopup/>
            </div>
        );
    }
}

ComponentName.propTypes = {};