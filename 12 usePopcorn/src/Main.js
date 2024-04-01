// This is a functional component named 'Main'
// It takes a prop object as an argument, specifically the 'children' prop.
// 'children' is a special prop that represents the content between the opening and closing tags when the component is used.

function Main({ children }) {
  // The component returns a 'main' HTML element with a class name of 'main'.
  return <main className="main">{children}</main>;
}

// Exporting the 'Main' component as the default export of this module.
export default Main;
