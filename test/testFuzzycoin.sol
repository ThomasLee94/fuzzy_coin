pragma solidity ^0.5.8;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/FuzzyCoin.sol";

contract TestFuzzycoin {

  function testInitialBalanceUsingDeployedContract() public {
    FuzzyCoin meta = FuzzyCoin(DeployedAddresses.FuzzyCoin());

    uint expected = 10000;

    Assert.equal(meta.getBalance(tx.origin), expected, "Owner should have 10000 FuzzyCoin initially");
  }

  function testInitialBalanceWithNewMetaCoin() public {
    FuzzyCoin meta = new FuzzyCoin();

    uint expected = 10000;

    Assert.equal(meta.getBalance(tx.origin), expected, "Owner should have 10000 FuzzyCoin initially");
  }

}
