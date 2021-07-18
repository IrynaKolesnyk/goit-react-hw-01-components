import React from "react";
import PropTypes from 'prop-types';
import defaultImg from '../../default-images/unnamed.jpg';

const FriendsList = ({ friends }) => {

    return (
        <ul class="friend-list">
            {friends.map(({ id, isOnline, name, avatar }) => (
                <li key={id} class="item">
                    <span class="status">{isOnline}</span>
                    <img class="avatar" src={avatar} alt={name} width="48" />
                    <p class="name">{name}</p>
                </li>
            ))}
        </ul>

    );
}

export default FriendsList;


FriendsList.defaultProps = {
    avatar: defaultImg,
};

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
}