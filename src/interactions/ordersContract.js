const { web3, ordersContract } = require("../connection");

export async function placeOrder(productId, quantity, sellerAddress, buyerAddress, value) {
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
    } catch (error) {
        console.error('Error checking contract balance:', error);
    }
}

// Call the placeOrder function
const sellerAddress = '0xb992fc5c1bddd7314d214d8619c3e3cf8ef62165';
const buyerAddress = '0xa6c9bbe3767e02100993ba13c509fb8cfbfcc3c6';
checkBalance(sellerAddress);
checkBalance(buyerAddress);
checkBalance('0x91AB7A3c4A1ca824eCa4a0B654DB408ca7e9787B');

// placeOrder(1, 10, sellerAddress, buyerAddress, web3.utils.toWei('10', 'ether'));


