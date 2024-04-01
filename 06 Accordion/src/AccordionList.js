function AccordionList({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;
  // const [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    //   setIsOpen((isOpen) => !isOpen);
    onOpen(num);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleOpen}>
      <p className="number">{num <= 9 ? `0${num}` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}

export default AccordionList;
