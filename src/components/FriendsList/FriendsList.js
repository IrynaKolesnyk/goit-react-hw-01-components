import React from "react";
import PropTypes from "prop-types";
import defaultImg from "../../default-images/unnamed.jpg";
import styles from "./FriendsList.module.css";

const FriendsList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, isOnline, name, avatar }) => (
        <li key={id} className={styles.item}>
          {isOnline ? (
            <span className={styles.online}>{isOnline}</span>
          ) : (
            <span className={styles.offline}>{isOnline}</span>
          )}
          <img className={styles.avatar} src={avatar} alt={name} width="48" />
          <p className={styles.name}>{name}</p>
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
