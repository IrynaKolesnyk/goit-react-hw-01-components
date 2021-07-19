import React from "react";
import styles from './FriendsListItem.module.css';

const FriendListItem = ({ friend }) => {
    return (
        <li className={styles.item}>
            {friend.isOnline ? (
                <span className={styles.online}>{friend.isOnline}</span>
            ) : (
                <span className={styles.offline}>{friend.isOnline}</span>
            )}
            <img className={styles.avatar} src={friend.avatar} alt={friend.name} width="48" />
            <p className={styles.name}>{friend.name}</p>
        </li>
    );
}

export default FriendListItem;