const FuzzyCoin = artifacts.require("FuzzyCoin.sol");

contract('DDollar', async function (accounts) {

  before(done => {
    (async () => {
      try {
        // Deploy Ddollar.sol
        let fuzzyCoinInstance = await FuzzyCoin.deployed();
        done()
      } catch (error){
        console.log(error);
        done(false)
      }
    })
  })
  
  describe("Ddollar.sol", function () {

    it('DDollar.sol', async () => {
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
      const balanceOf = await fuzzyCoinInstance.balanceOf(accounts[0])
    });
  
    it('Should return the number of allowed tokens to be transfered from given public address to another', async () => {
      
    });
  
    it('Should return the number of fuzzy coins transfered from one address to another', async () => {
      
    });
  
    it('Should allow owner to delegate account to withdraw tokens from his/her account to transfer to others owned by owner', async () => {
      
    });
  
    it('Should allow the withdrawal from a 3rd party account', async () => {
       
    });
  })

});




// contract('DDollar', () => {
  
//   it('DDollar.sol', async () => {
//     assert(
//       true === true,
//       'this is true'
//     )
//   });

//   it('Should return total number of Fuzzy Coins (1000000)', async () => {
//     const totalSupply = await fuzzyCoinInstance.totalSupply()

//     assert(
//       totalSupply === 1000000
//     )  
//   });

//   it('Should return the balance of tokens at a given public address', async () => {
//     const balanceOf = await fuzzyCoinInstance.balanceOf(accounts[0])
//   });

//   it('Should return the number of allowed tokens to be transfered from given public address to another', async () => {
    
//   });

//   it('Should return the number of fuzzy coins transfered from one address to another', async () => {
    
//   });

//   it('Should allow owner to delegate account to withdraw tokens from his/her account to transfer to others owned by owner', async () => {
    
//   });

//   it('Should allow the withdrawal from a 3rd party account', async () => {
     
//   });

// });


