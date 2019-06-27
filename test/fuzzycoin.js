const FuzzyCoin = artifacts.require("FuzzyCoin");

contract('FuzzyCoin', (accounts) => {
  it('should put 10000 FuzzyCoin in the first account', async () => {
    const FuzzyCoinInstance = await FuzzyCoin.deployed();
    const balance = await FuzzyCoinInstance.getBalance.call(accounts[0]);

    assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
  });
  it('should call a function that depends on a linked library', async () => {
    const FuzzyCoinInstance = await FuzzyCoin.deployed();
    const FuzzyCoinBalance = (await FuzzyCoinInstance.getBalance.call(accounts[0])).toNumber();
    const FuzzyCoinEthBalance = (await FuzzyCoinInstance.getBalanceInEth.call(accounts[0])).toNumber();

    assert.equal(FuzzyCoinEthBalance, 2 * FuzzyCoinBalance, 'Library function returned unexpected function, linkage may be broken');
  });
  it('should send coin correctly', async () => {
    const FuzzyCoinInstance = await FuzzyCoin.deployed();

    // Setup 2 accounts.
    const accountOne = accounts[0];
    const accountTwo = accounts[1];

    // Get initial balances of first and second account.
    const accountOneStartingBalance = (await FuzzyCoinInstance.getBalance.call(accountOne)).toNumber();
    const accountTwoStartingBalance = (await FuzzyCoinInstance.getBalance.call(accountTwo)).toNumber();

    // Make transaction from first account to second.
    const amount = 10;
    await FuzzyCoinInstance.sendCoin(accountTwo, amount, { from: accountOne });

    // Get balances of first and second account after the transactions.
    const accountOneEndingBalance = (await FuzzyCoinInstance.getBalance.call(accountOne)).toNumber();
    const accountTwoEndingBalance = (await FuzzyCoinInstance.getBalance.call(accountTwo)).toNumber();


    assert.equal(accountOneEndingBalance, accountOneStartingBalance - amount, "Amount wasn't correctly taken from the sender");
    assert.equal(accountTwoEndingBalance, accountTwoStartingBalance + amount, "Amount wasn't correctly sent to the receiver");
  });
});
