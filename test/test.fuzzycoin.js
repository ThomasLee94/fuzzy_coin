const FuzzyCoin = artifacts.require("FuzzyCoin.sol");

const fuzzyCoinSettings = {
  _totalSupply: 1000000
}

beforeEach(async () => {
  // Instantiate fuzzy coin
  const fuzzyCoinInstance = await FuzzyCoin.deployed();
});

contract('FuzzyCoin', () => {
  
  it('Should pass', async () => {
    assert(
      true === true,
      'this is true'
    )
  });

  it('Should return total number of Fuzzy Coins (1000000)', async () => {
    const totalSupply = await fuzzyCoinInstance.totalSupply()

    assert(
      totalSupply === 1000000
    )  
  });

  it('Should return the balance of tokens at a given public address', async () => {
    
  });

  it('Should return the number of allowed tokens to be transfered from given public address to another', async () => {
    
  });

  it('Should return the number of fuzzy coins transfered from one address to another', async () => {
    
  });

  it('Should allow owner to delegate account to withdraw tokens from his/her account to transfer to others owned by owner', async () => {
    
  });

  it('Should allow the withdrawal from a 3rd party account', async () => {
     
  });

});


