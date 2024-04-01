import Friends from "./Friends";
import SplitForm from "./SplitForm";
import FormAddFriend from "./FormAddFriend";
import Button from "./Button";
import { useState } from "react";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function App() {
  const [open, setOpen] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [openSplitForm, setOpenSplitForm] = useState(null);
  function handleOpen() {
    setOpen((open) => !open);
  }
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setOpen((open) => false);
  }
  function handleSplit(friend) {
    setOpenSplitForm((cur) => (cur?.id === friend.id ? null : friend));
    setOpen((open) => false);
  }
  function handleDisplay(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === openSplitForm.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setOpenSplitForm(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <Friends
          friends={friends}
          onSelection={handleSplit}
          friendObj={openSplitForm}
        />
        {!open && <Button onClick={handleOpen}>Add a Friend</Button>}
        {open && (
          <>
            <FormAddFriend onAddFriend={handleAddFriend} />
            <Button onClick={handleOpen}>Close</Button>
          </>
        )}
      </div>
      {openSplitForm && (
        <SplitForm
          friendObj={openSplitForm}
          onDisplay={handleDisplay}
          key={openSplitForm.id}
        />
      )}
    </div>
  );
}

export default App;
