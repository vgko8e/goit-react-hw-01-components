import css from "./Profile.module.css"
import PropTypes from 'prop-types';

export function ProfileStats ({stats: {followers, views, likes}}) {
    return (
    <div>
        <ul className={css.stats}>
        <li className={css.stats__item}>
            <span className={css.label}>Followers</span>
            <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.stats__item}>
            <span className={css.label}>Views</span>
            <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.stats__item}>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}>{likes}</span>
        </li>
        </ul>
    </div>
    )
}

ProfileStats.propTypes = {
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    })
};