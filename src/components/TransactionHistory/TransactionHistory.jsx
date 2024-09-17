import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css'; // Подключение стилей

export const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.tableHeader}>
        <tr>
          <th className={styles.tableHeaderPart}>Type</th>
          <th className={styles.tableHeaderPart}>Amount</th>
          <th className={styles.tableHeaderPart}>Currency</th>
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={styles.tableRow}>
            <td className={styles.tableMainPart}>{type}</td>
            <td className={styles.tableMainPart}>{amount}</td>
            <td className={styles.tableMainPart}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
