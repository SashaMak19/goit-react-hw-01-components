import styled from '@emotion/styled';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 370px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  border: solid 1px blue;
  border-radius: 4px;
  box-shadow: 1px 1px 5px #565656;

  :hover {
    box-shadow: 2px 2px 10px grey;
  }
`;

export { List };
