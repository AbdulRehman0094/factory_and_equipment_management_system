const Equipments = artifacts.require("Equipments");
module.exports = function (deployer) {
    deployer.deploy(Equipments);
};