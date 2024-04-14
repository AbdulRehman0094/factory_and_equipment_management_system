const { getAllEquipments } = require("./interactions/equipmentsContract");
const { updateTotalProduction, updateUnsoldProduction, getProductById, isProductExist, getAllProducts } = require("./interactions/productsContract");

const simulator = async () => {
    while (true) {
        const equipments = await getAllEquipments();
        for (let i = 0; i < equipments.length; i++) {
            const equipment = equipments[i];
            const productId = equipment.productId;
            const isProduct = await isProductExist(productId)
            if (isProduct) {
                if (equipment.state == 'Running') {
                    const allProducts = await getAllProducts();
                    if (allProducts.length) {
                        const product = allProducts.find(product => product.productId == productId);
                        if (product) {
                            await updateTotalProduction(product.productId, 1, equipment.userAddress);
                            await updateUnsoldProduction(product.productId, Number(product.unsoldProduction) + 1, equipment.userAddress);
                            console.log("Production increased for equipment Id", equipment.equipmentId, ' and  ProductId', product.productId)
                        }
                    }
                }
            }
        }
        await sleep(30000);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

simulator();