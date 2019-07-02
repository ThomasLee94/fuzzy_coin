abi = [{
  "constant": true,
  "inputs": [],
  "name": "name",
  "outputs": [
    {
      "name": "",
      "type": "string"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "decimals",
  "outputs": [
    {
      "name": "",
      "type": "uint8"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "symbol",
  "outputs": [
    {
      "name": "",
      "type": "string"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
    {
      "name": "total",
      "type": "uint256"
    }
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": true,
      "name": "from",
      "type": "address"
    },
    {
      "indexed": true,
      "name": "to",
      "type": "address"
    },
    {
      "indexed": false,
      "name": "tokens",
      "type": "uint256"
    }
  ],
  "name": "Transfer",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": true,
      "name": "owner",
      "type": "address"
    },
    {
      "indexed": true,
      "name": "spender",
      "type": "address"
    },
    {
      "indexed": false,
      "name": "tokens",
      "type": "uint256"
    }
  ],
  "name": "Approval",
  "type": "event"
},
{
  "constant": true,
  "inputs": [],
  "name": "totalSupply",
  "outputs": [
    {
      "name": "",
      "type": "uint256"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [
    {
      "name": "tokenOwner",
      "type": "address"
    }
  ],
  "name": "balanceOf",
  "outputs": [
    {
      "name": "",
      "type": "uint256"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [
    {
      "name": "tokenOwner",
      "type": "address"
    },
    {
      "name": "spender",
      "type": "address"
    }
  ],
  "name": "allowance",
  "outputs": [
    {
      "name": "",
      "type": "uint256"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": false,
  "inputs": [
    {
      "name": "to",
      "type": "address"
    },
    {
      "name": "tokens",
      "type": "uint256"
    }
  ],
  "name": "transfer",
  "outputs": [
    {
      "name": "",
      "type": "bool"
    }
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "constant": false,
  "inputs": [
    {
      "name": "spender",
      "type": "address"
    },
    {
      "name": "tokens",
      "type": "uint256"
    }
  ],
  "name": "approve",
  "outputs": [
    {
      "name": "",
      "type": "bool"
    }
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "constant": false,
  "inputs": [
    {
      "name": "owner",
      "type": "address"
    },
    {
      "name": "buyer",
      "type": "address"
    },
    {
      "name": "tokens",
      "type": "uint256"
    }
  ],
  "name": "transferFrom",
  "outputs": [
    {
      "name": "",
      "type": "bool"
    }
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}]

const provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:7545');
const signer = provider.getSigner(0);
const contract = new ethers.Contract('0x18Def52F0dd7A967dcec09ccBB1208a97CA7925d', abi, signer)
const wallet = new ethers.Wallet('223774a8f9e9147e0c81ce5650c3ed72700c0fe99000620c501c5f587c67b4f1');
