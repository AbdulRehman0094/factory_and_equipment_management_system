const { web3, equipmentsContract: contract } = require("../connection");



// Example function to add a new equipment
async function addEquipment(equipmentName, productId, userAddress) {
    try {
        const result = await contract.methods.addEquipment(equipmentName, productId, userAddress).send({ from: userAddress, gas: '500000' });
        console.log('Equipment added:', result.events.EquipmentAdded.returnValues);
        return result;
    } catch (error) {
        console.error('Error adding equipment:', error);
    }
}

// Example function to get equipment by ID
async function getEquipmentById(equipmentId) {
    try {
        const result = await contract.methods.getEquipmentById(equipmentId).call();
        console.log('Equipment:', result);
        return result;
    } catch (error) {
        console.error('Error getting equipment by ID:', error);
    }
}

// Example function to get all equipments
async function getAllEquipments() {
    try {
        const result = await contract.methods.getAllEquipments().call();
        console.log('All equipments:', result);
        return result;
    } catch (error) {
        console.error('Error getting all equipments:', error);
    }
}

async function changeEquipmentState(equipmentId, newState, userAddress) {
    try {
        const result = await contract.methods
            .changeEquipmentState(equipmentId, newState)
            .send({ from: userAddress });
        console.log('Equipment state changed:', result);
        return result;
    } catch (error) {
        console.error('Error changing equipment state:', error);
    }
}

async function equipmentExists(equipmentId) {
    try {
        const result = await contract.methods.equipmentExists(equipmentId).call();
        console.log('Equipment exists:', result);
        return result;
    } catch (error) {
        console.error('Error checking if equipment exists:', error);
    }
}

// Example usage of the functions
const userAddress = '0xb992fc5c1bddd7314d214d8619c3e3cf8ef62165';
// addEquipment('Equipment 1', 1, userAddress);
// addEquipment('Equipment 2', 2, userAddress);
// addEquipment('Equipment 3', 3, userAddress);
// changeEquipmentState(1, 'Running', userAddress);
// changeEquipmentState(2, 'Running', userAddress);
// changeEquipmentState(3, 'Running', userAddress);

// equipmentExists(1);
// getEquipmentById(2);
// getAllEquipments();

module.exports = {
    getAllEquipments,
    getEquipmentById,
    changeEquipmentState,
    addEquipment,
    equipmentExists
}