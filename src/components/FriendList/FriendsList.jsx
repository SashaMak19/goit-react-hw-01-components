import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import { List } from './FriendsList.styled.jsx';

function FriendList({ friends }) {
  const listItem = friends.map(({ id, avatar, name, isOnline }) => (
    <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
  ));

  return <List>{listItem}</List>;
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendList;
