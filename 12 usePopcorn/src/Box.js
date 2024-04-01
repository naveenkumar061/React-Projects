import { useState } from "react";

// Box component takes 'children' as a prop
function Box({ children }) {
  // State variable 'isOpen' and function 'setIsOpen' are created using the useState hook
  const [isOpen, setIsOpen] = useState(true);

  // Render a div with className 'box'
  return (
    <div className="box">
      {/* Button with className 'btn-toggle', onClick event toggles the 'isOpen' state */}
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {/* Display '-' if 'isOpen' is true, otherwise display '+' */}
        {isOpen ? "–" : "+"}
      </button>
      {/* Display 'children' only if 'isOpen' is true */}
      {isOpen && children}
    </div>
  );
}

// Export the Box component as the default export
export default Box;
