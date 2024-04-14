const { Web3 } = require('web3');

const web3 = new Web3('http://127.0.0.1:9545');

const { abi: userAbi, networks: userNetwork } = require('./abis/User.json');
const { abi: productsAbi, networks: productsNetwork } = require('./abis/Products.json');
const { abi: equipmentsAbi, networks: equipmentsNetwork } = require('./abis/Equipments.json');
const { abi: ordersAbi, networks: ordersNetwork } = require('./abis/Orders.json');

const userAddress = Object.values(userNetwork)[0].address;
const productsAddress = Object.values(productsNetwork)[0].address;
const equpmentsAddress = Object.values(equipmentsNetwork)[0].address;
const ordersAddress = Object.values(ordersNetwork)[0].address;

const userContract = new web3.eth.Contract(userAbi, userAddress);
const productsContract = new web3.eth.Contract(productsAbi, productsAddress);
const equipmentsContract = new web3.eth.Contract(equipmentsAbi, equpmentsAddress);
const ordersContract = new web3.eth.Contract(ordersAbi, ordersAddress);

// module.exports = {
//     userContract,
//     web3,
//     productsContract,
//     equipmentsContract,
//     ordersContract,
// }

exports.userContract = userContract;
exports.web3 = web3;
exports.productsContract = productsContract;
exports.equipmentsContract = equipmentsContract;
exports.ordersContract = ordersContract;