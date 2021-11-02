const chai = require('chai')
const expect = chai.expect
const accountType = require('../account-type-check');
const accountTypeA = [
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
        balance: { amount: 200 },
      },
    }
]

const accountTypeB = [
    {
      monthNumber: 0, // current month
      account: {
        balance: { amount: 70 },
      },
    },
    {
      monthNumber: 1, // last month
      account: {
        balance: { amount: 150 },
      },
    },
    {
      monthNumber: 2, // two months ago
      account: {
        balance: { amount: 200 },
      },
    }
]

describe('Check for account type', () => {

	it('should return with error message if array length is less than two', ()=> {
      const inSufficientData = [
        {
          monthNumber: 0, // current month
          account: {
            balance: { amount: 200 },
          },
        }
    ]
      expect(accountType.accountTypeChecker(inSufficientData)).to.equal('Insufficient data to perform a check');

	})

	it('should return account type as B when difference is same', ()=> {
    expect(accountType.accountTypeChecker(accountTypeA)).to.equal('B');

  })

  it('should return account type as A when difference is not same', ()=> {
    expect(accountType.accountTypeChecker(accountTypeB)).to.equal('A');
  })
})