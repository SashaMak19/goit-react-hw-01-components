import PropTypes, { arrayOf } from 'prop-types';
import { Table, TableRow, TableCell } from './TransactionHistory.styled';

function TransactionHistory({ items }) {
  const tableMarkup = items.map(({ id, type, amount, currency }) => (
    <TableRow key={id}>
      <TableCell>{type}</TableCell>
      <TableCell>{amount}</TableCell>
      <TableCell>{currency}</TableCell>
    </TableRow>
  ));

  return (
    <Table>
      <thead>
        <TableRow>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TableRow>
      </thead>
      <tbody>{tableMarkup}</tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
