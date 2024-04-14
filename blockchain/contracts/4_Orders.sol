// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Orders {
    struct Order {
        uint256 orderId;
        uint256 productId;
        uint256 quantity;
        address buyer;
        address seller;
    }

    mapping(uint256 => Order) public orders;
    uint256 public orderCount;

    event OrderPlaced(
        uint256 orderId,
        uint256 productId,
        uint256 quantity,
        address buyer,
        address seller
    );

    function placeOrder(
        uint256 _productId,
        uint256 _quantity,
        address _seller
    ) external payable returns (bool) {
        require(_quantity > 0, "Quantity must be greater than 0");
        orderCount++;
        orders[orderCount] = Order(
            orderCount,
            _productId,
            _quantity,
            msg.sender,
            _seller
        );
        payable(_seller).transfer(msg.value);
        emit OrderPlaced(
            orderCount,
            _productId,
            _quantity,
            msg.sender,
            _seller
        );
        return true;
    }
}
