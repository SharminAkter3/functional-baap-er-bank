

document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawAmount);

    const previousBalanceTotal = this.getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})