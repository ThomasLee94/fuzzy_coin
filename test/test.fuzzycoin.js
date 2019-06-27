const FuzzyCoin = artifacts.require("FuzzyCoin.sol");

const fuzzyCoinSettings = {
  _totalSupply: 1000000
}

contract('FuzzyCoin', () => {
  
  it('Should pass', async () => {
    assert(
      true === true,
      'this is true'
    )
  });

  it('Should return total number of Fuzzy Coins (1000000)', async () => {
    const fuzzyCoinInstance = await FuzzyCoin.deployed();
    const totalSupply = await fuzzyCoinInstance.totalSupply()

    assert(
      totalSupply === 1000000
    )  
  })

});


