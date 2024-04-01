import "./index.css";
function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};
  return (
    // <h1 style={style} className="header">
    //   Fast React Pizza Co.
    // </h1>
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

export default Header;
