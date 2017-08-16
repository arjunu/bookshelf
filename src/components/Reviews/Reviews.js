import React from 'react';
import classNames from 'classnames';
import * as styles from './Reviews.css';
import ReactStars from "react-stars";

const Header = () => (
    <div className={styles.header}>
        <span className={styles.title}>
            <a href="/">Bookshelf</a>
        </span>
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

export default class ComponentName extends React.Component {

    render() {

        return (
            <div>
                <Header/>
                <div className={styles.cardList}>
                    <Card/>
                </div>
            </div>
        );
    }
}

ComponentName.propTypes = {};