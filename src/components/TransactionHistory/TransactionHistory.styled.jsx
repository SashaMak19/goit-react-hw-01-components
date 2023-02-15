import styled from '@emotion/styled';

const Table = styled.table`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  border: solid 1px blue;
  border-radius: 4px;
  box-shadow: 1px 1px 5px #565656;

  :hover {
    box-shadow: 2px 2px 10px grey;
  }
`;

const TableRow = styled.tr`
  display: flex;
  justify-content: space-around;
  :nth-of-type(even) {
    background-color: #e6e6e6;
  }
`;

const TableCell = styled.td`
  width: 150px;
  text-align: center;
  padding: 5px 0;
  border: 1px gray solid;
`;

export { Table, TableRow, TableCell };
