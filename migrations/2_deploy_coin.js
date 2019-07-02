const FuzzyCoin = artifacts.require("FuzzyCoin.sol");

module.exports = function(deployer) {
    deployer.deploy(FuzzyCoin)
    ;
}