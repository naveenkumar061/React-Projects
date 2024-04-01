function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );
  }
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / totalItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage !== 100
          ? `💼You have ${totalItems} items on your list, and you already packed ${packedItems}(${percentage}%)`
          : "You got everything! Ready to go ✈"}
      </em>
    </footer>
  );
}

export default Stats;
