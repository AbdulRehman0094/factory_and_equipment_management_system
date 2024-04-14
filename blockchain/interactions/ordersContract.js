const { web3, ordersContract } = require("../connection");

// Example function to place an order
async function placeOrder(productId, quantity, sellerAddress, buyerAddress, value) {
    try {
        const result = await ordersContract.methods
            .placeOrder(productId, quantity, sellerAddress)
            .send({ from: buyerAddress, value: value, gas: '3000000' });
        console.log('Order placed:', result);
        return result;
    } catch (error) {
        console.error('Error placing order:', error);
    }
}

async function checkBalance(address) {
    try {
        const balance = await web3.eth.getBalance(address);
        console.log('Contract balance:', web3.utils.fromWei(balance, 'ether'), 'ETH');
        return balance;
    } catch (error) {
        console.error('Error checking contract balance:', error);
    }
}

// Call the placeOrder function
// const sellerAddress = '0x836f01347a1451efd68257a157e7a6064f171f6a';
const buyerAddress = '0x2a43f1264b2c22a525bb7387e81d106823086248';
// checkBalance(sellerAddress);
checkBalance(buyerAddress);
// checkBalance('0x91AB7A3c4A1ca824eCa4a0B654DB408ca7e9787B');

placeOrder(1, 10, sellerAddress, buyerAddress, 200);

module.exports = {
    checkBalance,
    placeOrder
}


