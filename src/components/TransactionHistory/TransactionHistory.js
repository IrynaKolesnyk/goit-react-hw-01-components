import React from "react";
import PropTypes from "prop-types";
import "./TransactionHistory.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th className="transaction-history_title">Type</th>
          <th className="transaction-history_title">Amount</th>
          <th className="transaction-history_title">Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className="transaction-history_data">
            <td className="transaction-history_row">{type}</td>
            <td className="transaction-history_row">{amount}</td>
            <td className="transaction-history_row">{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
