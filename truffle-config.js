var HDWalletProvider = require("truffle-hdwallet-provider");
var infura_apikey = "KbQuP7xkP1ZYNhJkUOXF"; // Either use this key or get yours at https://infura.io/signup. It's free.
var mnemonic = "into bacon choose sleep ridge voyage sorry carbon similar borrow victory autumn";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!

  networks: {
    ganache: {
      provider() {
        return new HDWalletProvider(
          process.env.GANACHE_MNEMONIC,
          'http://localhost:7545'
        )
      },
      host: 'localhost',
      port: 7545,
      network_id: 5777,
      gas: 10000000,
      gasPrice: 1000000000
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/" + infura_apikey),
      network_id: 3,
      gas: 4500000
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    },
    version: "^0.5"
  }
};
