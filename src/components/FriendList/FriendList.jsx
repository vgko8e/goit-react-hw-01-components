import css from "./FriendList.module.css"
import PropTypes from 'prop-types';

export const FriendList = function ({friends}) {
    return (<ul className={css.friendList}>
    {friends.map(({avatar, name, isOnline, id}) => (
                <li className={css.item} key={id}>
                    <span className={isOnline ? css.itemOnline : css.itemOffline}></span>
                    <img className={css.avatar} src={avatar} alt={name} width="48" />
                    <p className={css.name}>{name}</p>
                </li>))}
        </ul>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
        })
    ),
};