
const Ddollar = artifacts.require("FuzzyCoin.sol");
// Courtesy of @maurelian
const { assertRevert } = require('./helper/assertRevert');

let ddollarInstance;

contract('DDollar', async function (accounts) {

  before(done => {
    (async () => {
      try {
        // Deploy Ddollar.sol
        let ddollarInstance = await Ddollar.new("Ddollar", "DDLR");
        ddollarInstance = await Ddollar.deployed();
        console.log('hi')
        done()
      } catch (error){
        console.log(error);
        done(false)
      }
    })();
  })
  
  describe("Ddollar.sol", function () {

    it('Sanity check', async () => {
      assert(
        true === true,
        'this is true'
      )
    });

    // TRANSFERS & BALANCE
    // normal transfers without approvals
    it('BALANCE: should return total number of Fuzzy Coins (1000000)', async () => {
      const totalSupply = await ddollarInstance.totalSupply();
  
      assert(
        totalSupply === 1000000
      )  
    });

    it('BALANCE: should return the balance of tokens at a given public address', async () => {
      const mockAddress = 1234;
      const mockAmount = 20;
      await ddollarInstance._mint(mockAddress, mockAmount);
      const balance = await ddollarInstance.balanceOf()

      assert(
        balance === mockAmount
      )
      
    });

    it('TRANSFERS: should transfer 10000 to accounts[1] from accounts[0] containing 10000', async () => {
      await ddollarInstance.transfer(accounts[1], 10000, { from: accounts[0] });
      const balance = await ddollarInstance.balanceOf.call(accounts[1]);
      assert.strictEqual(
        balance.toNumber(), 10000
        );
    });

    it('TRANSFERS: should fail when trying to transfer 10001 to accounts[1] with accounts[0] having 10000', async () => {
      await assertRevert(ddollarInstance.transfer.call(accounts[1], 10001, { from: accounts[0] }));
    });
  
    it('TRANSFERS: should handle zero-transfers normally', async () => {
      assert(
        await ddollarInstance.transfer.call(accounts[1], 0, { from: accounts[0] }), 
        'zero-transfer has failed'
        );
    });

    // APPROVALS & ALLOWANCE
    it('APPROVALS: msg.sender should approve 100 to accounts[1]', async () => {
      await ddollarInstance.approve(accounts[1], 100, { from: accounts[0] });
      const allowance = await ddollarInstance.allowance.call(accounts[0], accounts[1]);
      assert.strictEqual(
        allowance.toNumber(),
        100
        );
    });

    it('APPROVALS: allow accounts[1] 100 to withdraw from accounts[0]. Withdraw 60 and then approve 0 & attempt transfer.', async () => {
      await ddollarInstance.approve(accounts[1], 100, { from: accounts[0] });
      await ddollarInstance.transferFrom(accounts[0], accounts[2], 60, { from: accounts[1] });
      await ddollarInstance.approve(accounts[1], 0, { from: accounts[0] });
      await assertRevert(ddollarInstance.transferFrom.call(accounts[0], accounts[2], 10, { from: accounts[1] }));
    });

    it('ALLOWENCE: Should return the number of allowed tokens to be transfered from given public address to another', async () => {
      
    });

    // TRANSFER WITH APPROVALS & ALLOWANCES

    it('TRANSFER: Should allow the withdrawal from a 3rd party account', async () => {
       
    });

    it('TRANSFER: Should allow owner to delegate account to withdraw tokens from his/her account to transfer to others owned by owner', async () => {
      
    });
  
    it('TRANSFER: Should return the number of fuzzy coins transfered from one address to another', async () => {
      
    });
    
  })

});




