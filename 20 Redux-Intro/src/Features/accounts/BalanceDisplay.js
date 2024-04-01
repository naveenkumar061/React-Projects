import { useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "INR",
  }).format(value);
}

export default function BalanceDisplay() {
  const { balance } = useSelector((store) => store.account);
  return <div className="balance">{formatCurrency(balance)}</div>;
}
