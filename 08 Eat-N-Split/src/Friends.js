import FriendsList from "./FriendsList";

function Friends({ friends, onSelection, friendObj }) {
  return (
    <ul>
      {friends.map((friend) => (
        <FriendsList
          key={friend.id}
          friend={friend}
          onSelection={onSelection}
          friendObj={friendObj}
        />
      ))}
    </ul>
  );
}

export default Friends;
