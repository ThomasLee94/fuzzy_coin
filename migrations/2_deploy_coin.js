const FuzzyCoin = artifacts.require("Ddollar.sol");

module.exports = function(deployer) {
    deployer.deploy(FuzzyCoin, 0)
    ;
}