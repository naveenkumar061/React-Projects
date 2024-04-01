import Button from "./Button";
function FriendsList({ friend, onSelection, friendObj }) {
  const isSelected = friend.id === friendObj?.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {-friend.balance}Rs
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owe you {friend.balance}Rs
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
// className={isSelected ? "selected" : ""}
// {
//   isSelected ? "Close" : "Select";
// }
export default FriendsList;
