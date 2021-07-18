import React from "react";
import PropTypes from "prop-types";
import defaultImg from "../../default-images/unnamed.jpg";
import "./FriendsList.css";

const FriendsList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ id, isOnline, name, avatar }) => (
        <li key={id} className="friend-list_item">
          <span className="friend-list_status">{isOnline}</span>
          <img
            className="friend-list_avatar"
            src={avatar}
            alt={name}
            width="48"
          />
          <p className="friend-list_name">{name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendsList;

FriendsList.defaultProps = {
  avatar: defaultImg,
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
