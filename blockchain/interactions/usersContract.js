const { userContract, web3 } = require("../connection");



export async function addUser(userAddress) {
    try {
        // const accounts = await web3.eth.getAccounts();
        const result = await userContract.methods.addUser().send({ from: userAddress, gas: '500000' });
        console.log('User added:', result.events.UserAdded.returnValues);
        return result;
    } catch (error) {
        console.error('Error adding user:', error);
    }
}

// Example function to get all users
export async function getAllUsers() {
    try {
        const result = await userContract.methods.getAllUsers().call();
        console.log('All users:', result);
        return result;
    } catch (error) {
        console.error('Error getting all users:', error);
    }
}

// Example function to get user by ID
async function getUserById(userId) {
    try {
        const result = await userContract.methods.getUserById(userId).call();
        console.log('User:', result);
        return result;
    } catch (error) {
        console.error('Error getting user by ID:', error);
    }
}

// Example function to check if user exists
async function isUserExist(userAddress) {
    try {
        const result = await userContract.methods.isUserExist(userAddress).call();
        console.log('User exists:', result);
        return result;
    } catch (error) {
        console.error('Error checking if user exists:', error);
    }
}


// addUser('0xb992fc5c1bddd7314d214d8619c3e3cf8ef62165');
// getAllUsers();
// getUserById(1);
// isUserExist('0xb992fc5c1bddd7314d214d8619c3e3cf8ef62165');


module.exports = {
    addUser,
    getAllUsers,
    getUserById,
    isUserExist
}