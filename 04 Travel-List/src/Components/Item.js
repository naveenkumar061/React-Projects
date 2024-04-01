function Item({ itemObj, onDeleteItem, onToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={itemObj.packed}
        onChange={() => {
          onToggle(itemObj.id);
        }}
      />
      <span style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
        {itemObj.quantity} {itemObj.description}
      </span>
      <button onClick={() => onDeleteItem(itemObj.id)}>❌</button>
    </li>
  );
}

export default Item;
