import React from "react";
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
    return (
        <section class="statistics">
            {title ? <h2 class="title">{title}</h2> : ""}

            <ul class="stat-list">
                {stats.map(stat => (
                    <li key={stat.id} class="item">
                        <span class="label">{stat.label}</span>
                        <span class="percentage">{stat.percentage}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Statistics;

// default value props
// Profile.defaultProps = {
//     avatar: defaultImg,
// };

Statistics.propTypes = {
    stat: PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }),
}