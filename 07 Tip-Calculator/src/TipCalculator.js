import BillInput from "./BillInput";
import SelectPercentage from "./SelectPercentage";
import Output from "./Output";
import Reset from "./Reset";
import { useState } from "react";

function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [selfTip, setSelfTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);
  const tip = (bill * (selfTip / 2 + friendTip / 2)) / 100;
  function handleReset() {
    setBill(0);
    setSelfTip(0);
    setFriendTip(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage tip={selfTip} onSetTip={setSelfTip}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage tip={friendTip} onSetTip={setFriendTip}>
        How did your friend like the service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

export default TipCalculator;
