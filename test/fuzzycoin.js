const FuzzyCoin = artifacts.require("FuzzyCoin.sol");

contract('FuzzyCoin', (accounts) => {
  it('Should pass', async () => {
    assert(
      true === true,
      'this is true'
    )
  });

  it('should put 10000 FuzzyCoins in the first account', async () => {
    const FuzzyCoinInstance = await FuzzyCoin.deployed();
    const balance = await FuzzyCoinInstance.getBalance.call(accounts[0]);

    assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
  });

});


