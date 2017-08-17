import React from 'react';
import classNames from 'classnames';
import * as styles from './Reviews.css';
import ReactStars from "react-stars";
import AddReviewPopup from '../../containers/AddReviewPopup/AddReviewPopup';
import PropTypes from 'prop-types';
import {loadUserReviews} from "../../actions";
import {connect} from 'react-redux';

const Header = () => (
    <div className={styles.header}>
        <span className={styles.title}>
            <a href="/">Bookshelf</a>
        </span>
        <span className={styles.logout}>Logout</span>
    </div>
);

const Card = ({title, rating, description}) => (
    <div className={styles.card}>
        <span className={styles.cardTitle}>{title}</span>
        <ReactStars
            count={5}
            value={rating}
            size={20}
            edit={false}
            color2={'#ffd700'}
        />
        <p className={styles.cardDescription}>
            {description}
        </p>
    </div>
);

const Add = () => (
    <button className={styles.add}>
        +Add Review
    </button>
);

class Reviews extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            showAddReviewPopup: false
        };
    }

    componentDidMount() {
        this.props.dispatch(loadUserReviews({
            userId: 1
        }));
    }

    render() {

        const {reviews} = this.props;

        return (
            <div className={styles.wrapper}>
                <Header/>
                <div className={styles.cardList}>
                    <Add/>
                    {reviews && reviews.map(review => <Card key={review.get("id")}
                                                 title={review.get("title")}
                                                 rating={review.get("rating")}
                                                 description={review.get("review")}

                    />)}
                </div>
                {this.state.showAddReviewPopup && <AddReviewPopup/>}
            </div>
        );
    }
}

Reviews.propTypes = {};

export function mapStateToProps(state) {

    return {
        reviews: state.global.get("reviews")
    };
}

export default connect(mapStateToProps)(Reviews);