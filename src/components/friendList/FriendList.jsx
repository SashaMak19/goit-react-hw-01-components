import { PropTypes, arrayOf } from 'prop-types';
import FriendListItem from './FriendListItem';
import './FriendList.styled.jsx';

function FriendList({ friends }) {
  const listItem = friends.map(({ id, avatar, name, isOnline }) => (
    <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
  ));

  return <ul className="friend-list">{listItem}</ul>;
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
