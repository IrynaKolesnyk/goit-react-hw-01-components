import React from "react";
import PropTypes from "prop-types";
import "./Statistics.css";

const Statistics = ({ title, stats, colors }) => {
  return (
    <section className="statistics">
      {title ? <h2 className="statistics_title">{title}</h2> : ""}

      <ul className="statistics_stat-list">
        {stats.map((stat) => (
          <li key={stat.id} className="statistics_item">
            <span className="statistics_label">{stat.label}</span>
            <span className="statistics_percentage">{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
