pragma solidity ^0.5.0;

import 'openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol';
import 'openzeppelin-solidity/contracts/token/ERC721/ERC721Mintable.sol';

contract HashnodeToken is MintableToken {
  string public name = "Hashnode Token";
  string public symbol = "HT";
  uint8 public decimals = 18;
}