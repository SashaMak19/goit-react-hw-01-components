import PropTypes, { shape } from 'prop-types';
import {
  Container,
  Description,
  UserName,
  UserInfo,
  StatisticsList,
  StatisticsItem,
  StatisticsName,
  StatisticsAmount,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <Description>
        <img src={avatar} alt="User avatar" className="avatar" />
        <UserName>{username}</UserName>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Description>
      <StatisticsList>
        <StatisticsItem>
          <StatisticsName>Followers</StatisticsName>
          <StatisticsAmount>{stats.followers}</StatisticsAmount>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsName>Views</StatisticsName>
          <StatisticsAmount>{stats.views}</StatisticsAmount>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsName>Likes</StatisticsName>
          <StatisticsAmount>{stats.likes}</StatisticsAmount>
        </StatisticsItem>
      </StatisticsList>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
