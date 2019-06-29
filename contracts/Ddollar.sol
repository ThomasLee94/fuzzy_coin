pragma solidity >= 0.4.21 < 0.6.0;

import "./math/SafeMath.sol";

contract FuzzyCoin {

  using SafeMath for uint256;

  string public constant name = "Ddollar";
  string public constant symbol = "DDLR";
  uint8 public constant decimals = 18;
  uint256 _totalSupply = 1000000;

  // TODO: Should balances be public?
	mapping (address => uint) balances;
  mapping (address => mapping (address => uint256)) allowed;
  mapping (address => string) username;
  mapping (string => address) adresses;
  // TODO: transaction history? 

  event Transfer(address indexed from, address indexed to, uint256 tokens);
  event Approval(address indexed owner, address indexed spender, uint tokens);

  constructor(uint256 total) public {
    _totalSupply = total;
		balances[msg.sender] = _totalSupply;
	}

  /**
   * The totalSupply() function will return the number of all tokens allocated by
   * this contract regardless of owner.
   */
  function totalSupply() public view returns (uint256) {
    return _totalSupply;
  }

  /**
   * The balanceOf() function provides the number of tokens held by a given address.
   * Note that anyone can query any address’ balance, as all data on the blockchain
   * is public.
   */
  function balanceOf(address tokenOwner) public view returns (uint) {
    return balances[tokenOwner];
  }

  /**
   * The allowance() function provides the number of tokens allowed to be transferred
   * from a given address by another given address. Note that anyone can query any
   * address’ allowance, as all data on the blockchain is public. It is important to
   * understand that allowances are “soft”, in that both individual and cumulative
   * allowances can exceed an address’ balance.
   */
  function allowance(address tokenOwner, address spender) public view returns (uint) {
    return allowed[tokenOwner][spender];
  }

  /**
   * The transfer() function transfers a number of tokens directly from the message
   * sender to another address. Note that there are no checks made on the recipient
   * address, so it is incumbent on the sender to ensure that the recipient is as
   * intended.
   */
  function transfer(address to, uint tokens) public returns (bool) {
    require(tokens <= balances[msg.sender], "You're too poor.");

    balances[msg.sender] -= tokens;
    balances[to] += tokens;

    emit Transfer(msg.sender, to, tokens);
  }

  /**
   * The approve() function allows an owner (msg.sender) to approve a delegate account
   * to withdraw tokens from his account and to transfer them to other accounts.
   */
  function approve(address spender, uint tokens) public returns (bool) {
    allowed[msg.sender][spender] = tokens;
    emit Approval(msg.sender, spender, tokens);
    return true;
  }

  /**
   * The transferFrom() function is the peer of the approve() function. It allows a
   * delegate approved for withdrawal to transfer owner funds to a third-party account.
   */
  function transferFrom(address owner, address buyer, uint tokens) public returns (bool) {
    require(tokens <= balances[owner], "Transfer cannot exceed account balance.");
    require(tokens <= allowed[owner][msg.sender], "Transfer cannot exceed allowance.");

    balances[owner] -= tokens;
    balances[buyer] += tokens;
    allowed[owner][msg.sender] -= tokens;

    emit Transfer(owner, buyer, tokens);

    return true;
  }

  /**
     * Creates `amount` tokens and assigns them to `account`, increasing
     * the total supply.
     *
     * Emits a `Transfer` event with `from` set to the zero address.
     *
     * Requirements
     *
     * - `to` cannot be the zero address.
     * - WILL BE USED FOR TESTING PURPOSES
     */
  function _mint(address account, uint256 amount) internal {
        require(account != address(0), "ERC20: mint to the zero address");

        _totalSupply = _totalSupply.add(amount);
        balances[account] = balances[account].add(amount);
        emit Transfer(address(0), account, amount);
    }

}