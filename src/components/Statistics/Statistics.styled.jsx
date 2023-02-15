import styled from '@emotion/styled';

const Section = styled.section`
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

const Title = styled.h2`
  text-align: center;
  padding: 23px;
  border-bottom: solid 1px blue;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: calc(100% / 5);
  padding: 15px;
  background-color: ${getRandomHexColor};
`;

const Label = styled.span`
  font-size: 18px;
`;
const Percentage = styled.span`
  font-size: 22px;
  margin-top: 5px;
  color: ${getRandomHexColor};
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export { Section, Title, List, ListItem, Label, Percentage };
