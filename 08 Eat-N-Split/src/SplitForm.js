import { useState } from "react";
import Button from "./Button";
function SplitForm({ friendObj, onDisplay }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("You");
  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onDisplay(whoIsPaying === "You" ? paidByFriend : -paidByUser);
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {friendObj.name}</h2>
      <label>💰Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>🚹Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />
      <label>👬{friendObj.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />
      <label>💰Who is paying bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="you">You</option>
        <option value={friendObj.name}>{friendObj.name}</option>
      </select>
      <Button onClick={handleSubmit}>Split Bill</Button>
    </form>
  );
}

export default SplitForm;
