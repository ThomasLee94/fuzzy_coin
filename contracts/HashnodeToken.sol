pragma solidity ^0.5.8;

import 'zeppelin-solidity/contracts/token/MintableToken.sol';

contract HashnodeToken is MintableToken {
  string public name = "Hashnode Token";
  string public symbol = "ligmaco";
  uint8 public decimals = 18;
}