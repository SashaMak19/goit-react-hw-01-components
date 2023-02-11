import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './friendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      {/* ---------------1 --------------*/}
      {
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      }
      {/* ------------------2----------------- */}
      <Statistics title={'Upload stats'} stats={data} />
      <Statistics stats={data} />
      {/* ----------------3------------------- */}
      <FriendList friends={friends} />
      {/* -------------------4---------------- */}
      {/* <TransactionHistory items={transactions} /> */}
    </div>
  );
};
