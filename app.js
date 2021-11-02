const express = require('express');
const app = express();
const account = require('./account-type-check');
// Set default port
const PORT = 3000;

// To test this function
// Update amount values to different values

const accountBalanceHistory = [
    {
      monthNumber: 0, // current month
      account: {
        balance: { amount: 0 },
      },
    },
    {
      monthNumber: 1, // last month
      account: {
        balance: { amount: 100 },
      },
    },
    {
      monthNumber: 2, // two months ago
      account: {
        balance: { amount: 500 },
      },
    }
]

// Call function to check its output
const accountType = account.accountTypeChecker(accountBalanceHistory);
console.log('====Expected Result===');
console.log(accountType)
console.log('=====End=======');

app.listen(PORT, (error) => {
    if (error) throw error
    console.log(`App running on port ${PORT}`);
});
   
