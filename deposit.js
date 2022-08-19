
document.getElementById('btn-deposit').addEventListener('click', function () {
    /**
     1. get the element by id
     2. get the value from from element 
     3. convert string value to a number
     * */
    const newDepositAmount = getInputValueById('deposit-field');
    /**
     1. get previous deposit total by id 
     *  */
    const previousDepositTotal = getElementValueById('deposit-total');

    // calculate new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;

    //set deposit total value
    setTextElementValueById('deposit-total', newDepositTotal);

    //get previous balance by using function
    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})