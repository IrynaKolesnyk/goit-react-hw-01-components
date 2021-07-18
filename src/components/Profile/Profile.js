import React from "react";
import PropTypes from "prop-types";
import defaultImg from "../../default-images/unnamed.jpg";
import "./Profile.css";

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className="Profile">
    <div className="Profile_description">
      <img src={avatar} alt="Аватар пользователя" className="Profile_avatar" />
      <p className="Profile_name">{name}</p>
      <p className="Profile_tag">@{tag}</p>
      <p className="Profile_location">{location}</p>
    </div>

    <ul className="Profile_stats">
      <li className="Profile_stats_item">
        <span className="Profile_label">Followers</span>
        <span className="Profile_quantity">{stats.followers}</span>
      </li>
      <li className="Profile_stats_item">
        <span className="Profile_label">Views</span>
        <span className="Profile_quantity">{stats.views}</span>
      </li>
      <li className="Profile_stats_item">
        <span className="Profile_label">Likes</span>
        <span className="Profile_quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
);

export default Profile;

Profile.defaultProps = {
  avatar: defaultImg,
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
