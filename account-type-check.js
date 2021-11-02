module.exports.accountTypeChecker = (items) => {
    if(items.length < 2) {
        return 'Insufficient data to perform a check';
    }
    // consider account type is A
    // Where difference in transaction is same
    let accountType = 'B';
    const initialDiff = Math.abs(items[0].account.balance.amount - items[1].account.balance.amount);
    // return initialDiff;
    for (let index = 0; index < items.length; index++) {
        if(index === items.length - 1) {
            break;
        }
        const currentDiff = Math.abs(items[index].account.balance.amount - items[index + 1].account.balance.amount);
        
        if (initialDiff ===  currentDiff) {
             continue;
        }
        else {
            accountType = 'A';
            break;
        }
    }
    
    return accountType;
}