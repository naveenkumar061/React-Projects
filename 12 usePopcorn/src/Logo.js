// This is a React functional component named Logo
function Logo() {
  // The component returns a div with the class name "logo"
  return (
    <div className="logo">
      {/* Inside the div, there is an emoji representing popcorn */}
      <span role="img">🍿</span>
      {/* Following the emoji, there is an h1 heading displaying the text "usePopcorn" */}
      <h1>usePopcorn</h1>
    </div>
  );
}

// This component is being exported so it can be used in other parts of the application
export default Logo;
