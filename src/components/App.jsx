import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import data from '../data.json';
import profile from '../user.json';
import friends from '../friends.json';
import transactions from '../transactions.json';


export const App = () => {
  return (
    <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#010101'
    }}>
      <Profile
      username={profile.username}
      tag={profile.tag}
      location={profile.location}
      avatar={profile.avatar}
      stats={profile.stats}/>

      <Statistics title='Upload stats' stats={data}/>
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/>
    </div>
  );
};
