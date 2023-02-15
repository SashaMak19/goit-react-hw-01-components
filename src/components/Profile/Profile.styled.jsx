import styled from '@emotion/styled';

const Container = styled.div`
  width: 400px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 15px;
  border: solid 1px blue;
  border-radius: 4px 4px 0 0;
  box-shadow: 1px 1px 5px #565656;

  :hover {
    box-shadow: 2px 2px 10px grey;
  }

  img {
    transition: 300ms;
    :hover {
      transform: scale(0.9);
    }
  }
`;

const UserName = styled.p`
  font-size: 24px;
  font-weight: 800;
`;

const UserInfo = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: grey;
`;

const StatisticsList = styled.ul`
  display: flex;
  justify-content: center;
  border: solid 1px blue;
  border-radius: 0 0 4px 4px;
  box-shadow: 1px 1px 5px #565656;
  background-color: #e1e1e1;
`;

const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 15px;
`;

const StatisticsName = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: grey;
`;

const StatisticsAmount = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: black;
  margin-top: 5px;
`;

export {
  Container,
  Description,
  UserName,
  UserInfo,
  StatisticsList,
  StatisticsItem,
  StatisticsName,
  StatisticsAmount,
};
