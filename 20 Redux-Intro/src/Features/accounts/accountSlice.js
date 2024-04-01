import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const host = "api.frankfurter.app";

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(amount, loanPurpose) {
        return { payload: { amount, loanPurpose } };
      },
      reducer(state, action) {
        if (state.loan > 0) return;
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.loanPurpose;
        state.balance += action.payload.amount;
      },
    },
    payLoan(state, action) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});

console.log(accountSlice);

export function deposit(amount, currency) {
  if (currency === "INR") return { type: "account/deposit", payload: amount };
  return async function (dispacth, getState) {
    dispacth({ type: "account/convertingCurrency" });
    // API Call
    const response = await fetch(
      `https://${host}/latest?amount=${amount}}&from=${currency}&to=INR`
    );
    const result = await response.json();
    console.log(result);
    const converted = result.rates.INR;
    // return Action
    dispacth({ type: "account/deposit", payload: converted });
  };
}

export const { withdraw, requestLoan, payLoan } = accountSlice.actions;

export default accountSlice.reducer;

// export default function acccountReducer(state = initialStateAccount, action) {
//   switch (action.type) {
//     case "account/deposit":
//       return {
//         ...state,
//         balance: state.balance + action.payload,
//         isLoading: false,
//       };
//     case "account/withdraw":
//       return { ...state, balance: state.balance - action.payload };
//     case "account/requestLoan":
//       if (state.loan > 0) return state;
//       return {
//         ...state,
//         loan: action.payload.amount,
//         loanPurpose: action.payload.purpose,
//         balance: state.balance + action.payload.amount,
//       };
//     case "account/payLoan":
//       return {
//         ...state,
//         loan: 0,
//         loanPurpose: "",
//         balance: state.balance - state.loan,
//       };
//     case "account/convertingCurrency":
//       return {
//         ...state,
//         isLoading: true,
//       };
//     default:
//       return state;
//   }
// }

// export function deposit(amount, currency) {
//   if (currency === "INR") return { type: "account/deposit", payload: amount };
//   return async function (dispacth, getState) {
//     dispacth({ type: "account/convertingCurrency" });
//     // API Call
//     const response = await fetch(
//       `https://${host}/latest?amount=${amount}}&from=${currency}&to=INR`
//     );
//     const result = await response.json();
//     console.log(result);
//     const converted = result.rates.INR;
//     // return Action
//     dispacth({ type: "account/deposit", payload: converted });
//   };
// }
// export function withdraw(amount) {
//   return { type: "account/withdraw", payload: amount };
// }
// export function requestLoan(amount, purpose) {
//   return {
//     type: "account/requestLoan",
//     payload: {
//       amount,
//       purpose,
//     },
//   };
// }
// export function payLoan() {
//   return { type: "account/payLoan" };
// }