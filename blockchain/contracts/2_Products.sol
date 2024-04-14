// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Products {
    struct Product {
        uint256 productId;
        string productName;
        uint256 unsoldProduction;
        uint256 totalProduction;
        uint256 soldProduction;
        uint256 price;
        address userAddress;
    }

    mapping(uint256 => Product) public products;
    uint256 public productCount;

    event ProductAdded(
        uint256 productId,
        string productName,
        address userAddress
    );

    function addProduct(
        string memory _productName,
        uint256 _price,
        address _userAddress
    ) external {
        productCount++;
        products[productCount] = Product(
            productCount,
            _productName,
            0,
            0,
            0,
            _price,
            _userAddress
        );
        emit ProductAdded(productCount, _productName, _userAddress);
    }

    function updateProduction(
        uint256 _productId,
        uint256 _unsoldProduction,
        uint256 _totalProduction,
        uint256 _soldProduction
    ) external {
        require(_productId <= productCount, "Invalid Product ID");
        Product storage product = products[_productId];
        product.unsoldProduction = _unsoldProduction;
        product.totalProduction = _totalProduction;
        product.soldProduction = _soldProduction;
    }

    function productExists(uint256 _productId) public view returns (bool) {
        return _productId > 0 && _productId <= productCount;
    }

    function updatePrice(uint256 _productId, uint256 _price) external {
        require(_productId <= productCount, "Invalid Product ID");
        products[_productId].price = _price;
    }

    function getProductPrice(
        uint256 _productId
    ) external view returns (uint256) {
        return products[_productId].price;
    }

    function updateUnsoldProduction(
        uint256 _productId,
        int256 _delta
    ) external {
        require(
            _delta >= 0 ||
                products[_productId].unsoldProduction >= uint256(-_delta),
            "Insufficient unsold production"
        );
        products[_productId].unsoldProduction = uint256(_delta);
    }

    function updateTotalProduction(
        uint256 _productId,
        uint256 _delta
    ) external {
        products[_productId].totalProduction += _delta;
    }

    function updateSoldProduction(uint256 _productId, uint256 _delta) external {
        products[_productId].soldProduction = _delta;
    }

    function getAllProducts() external view returns (Product[] memory) {
        Product[] memory allProducts = new Product[](productCount);
        for (uint256 i = 1; i <= productCount; i++) {
            allProducts[i - 1] = products[i];
        }
        return allProducts;
    }

    function getProductById(
        uint256 _productId
    ) public view returns (Product memory) {
        return products[_productId - 1];
    }

    function isProductExist(uint256 _productId) public view returns (bool) {
        return _productId > 0 && _productId <= productCount;
    }
}
