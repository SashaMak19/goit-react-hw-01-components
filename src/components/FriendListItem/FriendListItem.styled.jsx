import styled from '@emotion/styled';

const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  border: 1px solid grey;
  box-shadow: 1px 2px 8px 0px grey;
  :hover {
    transform: perspective(1);
  }
`;

const StatusSpan = styled.span`
  width: 12px;
  height: 12px;
  margin-right: 10px;
  border-radius: 10px;
  background-color: ${({ status }) => {
    switch (status) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        throw new Error(`Unsupported status prop value - ${status}`);
    }
  }};
`;

const Image = styled.img`
  margin-right: 10px;
`;

const FriendsName = styled.p`
  font-weight: 500;
`;

export { ListItem, StatusSpan, Image, FriendsName };
