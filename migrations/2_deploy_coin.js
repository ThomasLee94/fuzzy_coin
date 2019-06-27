const FuzzyCoin = artifacts.require("FuzzyCoin.sol");

const fuzzyCoinSettings = {
    _totalSupply: 1000000
}

module.exports = function(deployer) {
    deployer.deploy(FuzzyCoin, fuzzyCoinSettings._totalSupply)
    ;
}