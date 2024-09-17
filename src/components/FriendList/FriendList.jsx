import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

export const FriendList = ({ friends }) => {
    return (
        <ul className={styles.friendList}>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <li className={styles.item} key={id}>
                    <span className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}></span>
                    <img className={styles.avatar} src={avatar} alt={`${name} avatar`} width="48" />
                    <p className={styles.name}>{name}</p>
                </li>
            ))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ).isRequired,
};
