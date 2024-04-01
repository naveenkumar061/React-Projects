function SelectPercentage({ tip, children, onSetTip }) {
  return (
    <div>
      <label>{children}</label>
      <select value={tip} onChange={(e) => onSetTip(Number(e.target.value))}>
        <option value="0">Dissatified (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amzing! (20%)</option>
      </select>
    </div>
  );
}

export default SelectPercentage;
