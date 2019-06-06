pragma solidity ^0.4.10;

contract fuzzyToken {

  string public name;
  string public symbol;
  uint8 public decimals;
  uint256 public totalSupply;

  // Balances for each account
  mapping(address => uint256) balances;
  address devAddress;

  // EVENTS
  event Transfer(address indexed from, address indexed to, uint256 value);
  // Approval MUST trigger when tokens are transfered (ERC20 Complient)
  event Approval(address indexed _owner, address indexed _spender, uint256 _value);
  

  // Owner of account approves the transfer of an amount to another account
  mapping(address => mapping (address => uint256)) allowed;

  // Constructor
  function fuzzyToken() {
      name = "Fuzzy Token";
      symbol = "FZYT";
      decimals = 10;
      // Add the address that you will distribute tokens from here
      devAddress = 0x0000000000000000000000000000000000000000;
      // 1M tokens
      uint initialBalance = 1000000000000000000 * 1000000;
      balances[devAddress] = initialBalance;
      // Set the total suppy
      totalSupply += initialBalance;
  }

  function balanceOf(address _owner) private constant returns (uint256 balance) {
      return balances[_owner];
  }

  // Transfer fuzzy coins from one account to another (REQUIRED TO BE ERC20 COMPLIENT)
  function transfer(address _to, uint256 _amount) public returns (bool success) {
      if (balances[msg.sender] >= _amount
          && _amount > 0
          && balances[_to] + _amount > balances[_to]) {
          balances[msg.sender] -= _amount;
          balances[_to] += _amount;
          Transfer(msg.sender, _to, _amount);
          return true;
      } else {
          return false;
      }
  }
  function transferFrom(
      address _from,
      address _to,
      uint256 _amount
  ) public returns (bool success) {
      if (balances[_from] >= _amount
          && allowed[_from][msg.sender] >= _amount
          && _amount > 0
          && balances[_to] + _amount > balances[_to]) {
          balances[_from] -= _amount;
          allowed[_from][msg.sender] -= _amount;
          balances[_to] += _amount;
          return true;
      } else {
          return false;
      }
  }
  // Allow _spender to withdraw from your account, multiple times, up to the _value amount.
  // If this function is called again it overwrites the current allowance with _value.
  function approve(address _spender, uint256 _amount) private  returns (bool success) {
      allowed[msg.sender][_spender] = _amount;
      Approval(msg.sender, _spender, _amount);
      return true;
  }
}