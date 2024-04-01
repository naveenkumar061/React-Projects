function Output({ bill, tip }) {
  return (
    <h3>
      You pay {bill + tip} (&#8377;{bill} + &#8377;{tip} tip)
    </h3>
  );
}

export default Output;
