import React from 'react';
import classNames from 'classnames';
import * as styles from './Reviews.css';
import ReactStars from "react-stars";
import AddReviewPopup from '../../components/AddReviewPopup/AddReviewPopup';
import PropTypes from 'prop-types';
import {addReview, loadUserReviews, logout} from "../../actions";
import {connect} from 'react-redux';

const Header = ({onLogout}) => (
    <div className={styles.header}>
        <span className={styles.title}>
            <a href="/">Bookshelf</a>
        </span>
        <span className={styles.logout}
              onClick={onLogout}
        >
            Logout
        </span>
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

const Add = ({onClick}) => (
    <button className={styles.add}
            onClick={onClick}>
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
            userId: this.props.userId
        }));
    }

    render() {

        const {reviews, dispatch, userId} = this.props;

        return (
            <div className={styles.wrapper}>
                <Header onLogout={() => dispatch(logout())}/>

                <div className={styles.cardList}>
                    <Add onClick={() => this.setState({showAddReviewPopup: true})}/>
                    {reviews && reviews.map(review => <Card key={review.get("id")}
                                                            title={review.get("title")}
                                                            rating={review.get("rating")}
                                                            description={review.get("review")}

                    />)}
                </div>

                {this.state.showAddReviewPopup &&
                <AddReviewPopup onSave={(title, rating, review) => {
                    dispatch(addReview({title, rating, review, userId}));
                    this.setState({showAddReviewPopup: false});
                }}
                                onCancel={() => this.setState({showAddReviewPopup: false})}
                />}
            </div>
        );
    }
}

Reviews.propTypes = {};

export function mapStateToProps(state) {

    return {
        reviews: state.global.get("reviews"),
        userId: state.global.getIn(["user", "id"]),
    };
}

export default connect(mapStateToProps)(Reviews);