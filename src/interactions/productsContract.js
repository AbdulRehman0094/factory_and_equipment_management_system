const { web3, productsContract: contract } = require("../connection");


// Example function to add a new product
export async function addProduct(productName, price, userAddresss) {
    try {
        const result = await contract.methods.addProduct(productName, price, userAddresss).send({ from: userAddresss, gas: '500000' });
        console.log('Product added:', result.events.ProductAdded.returnValues);
    } catch (error) {
        console.error('Error adding product:', error);
    }
}

// Example function to get product by ID
async function getProductById(productId) {
    try {
        const result = await contract.methods.getProductById(productId).call();
        console.log('Product:', result);
    } catch (error) {
        console.error('Error getting product by ID:', error);
    }
}

// Example function to update product price
async function updatePrice(productId, price, userAddress) {
    try {
        const result = await contract.methods.updatePrice(productId, price).send({ from: userAddress, gas: '500000' });
        console.log('Product price updated:', result);
    } catch (error) {
        console.error('Error updating product price:', error);
    }
}

// Example function to get all products
export async function getAllProducts() {
    try {
        const result = await contract.methods.getAllProducts().call();
        console.log('All products:', result);
        return result;
    } catch (error) {
        console.error('Error getting all products:', error);
    }
}

// Example function to update unsold production
export async function updateUnsoldProduction(productId, delta, userAddress) {
    try {
        const result = await contract.methods.updateUnsoldProduction(productId, delta).send({ from: userAddress, gas: '500000' });
        console.log('Unsold production updated:', result);
        return result;
    } catch (error) {
        console.error('Error updating unsold production:', error);
    }
}

// Example function to update total production
async function updateTotalProduction(productId, delta, userAddress) {
    try {

        const result = await contract.methods.updateTotalProduction(productId, delta).send({ from: userAddress, gas: '500000' });
        console.log('Total production updated:', result);
    } catch (error) {
        console.error('Error updating total production:', error);
    }
}

// Example function to update sold production
export async function updateSoldProduction(productId, delta, userAddress) {
    try {
        const result = await contract.methods.updateSoldProduction(productId, delta).send({ from: userAddress, gas: '500000' });
        console.log('Sold production updated:', result);
        return result;
    } catch (error) {
        console.error('Error updating sold production:', error);
    }
}

// Example usage of the functions
const userAddress = '0xb992fc5c1bddd7314d214d8619c3e3cf8ef62165';
// addProduct('Product 1', 100, userAddress);
// getProductById(2);
// updatePrice(1, 150, userAddress);
// getAllProducts();
// updateUnsoldProduction(1, 50, userAddress);
// updateTotalProduction(1, 80, userAddress);
// updateSoldProduction(1, 30, userAddress);
