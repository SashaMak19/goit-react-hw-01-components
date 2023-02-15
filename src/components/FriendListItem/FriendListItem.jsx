import PropTypes from 'prop-types';
import {
  ListItem,
  StatusSpan,
  Image,
  FriendsName,
} from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ListItem>
      <StatusSpan status={isOnline}></StatusSpan>
      <Image src={avatar} alt="User avatar" width="48" />
      <FriendsName>{name}</FriendsName>
    </ListItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
