// This is a React functional component named ErrorMessage
// It takes a prop called 'message' which is a piece of text to be displayed as an error message
function ErrorMessage({ message }) {
  // The component returns a paragraph element (<p>) with a CSS class 'error'
  // This class is likely used for styling the error message with specific colors or formatting
  return (
    <p className="error">
      {/* Inside the paragraph, there is a span element (<span>) with an emoji '⛔' */}
      <span>⛔</span>
      {/* Next to the emoji, it displays the error message received as a prop */}
      {message}
    </p>
  );
}

// This component is then exported to be used in other parts of the application
export default ErrorMessage;
