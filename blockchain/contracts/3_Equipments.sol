// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Equipments {
    struct Equipment {
        uint256 equipmentId;
        string equipmentName;
        address userAddress;
        string state;
        uint256 productId;
    }

    mapping(uint256 => Equipment) public equipments;
    uint256 public equipmentCount;

    event EquipmentAdded(
        uint256 equipmentId,
        string equipmentName,
        address userAddress,
        string state,
        uint256 productId
    );

    event EquipmentStateChanged(uint256 equipmentId, string newState);
    function addEquipment(
        string memory _equipmentName,
        uint256 _productId,
        address _userAddress
    ) external {
        equipmentCount++;
        equipments[equipmentCount] = Equipment(
            equipmentCount,
            _equipmentName,
            _userAddress,
            "Stopped",
            _productId
        );
        emit EquipmentAdded(
            equipmentCount,
            _equipmentName,
            _userAddress,
            "Stopped",
            _productId
        );
    }

    function equipmentExists(uint256 _equipmentId) public view returns (bool) {
        return _equipmentId > 0 && _equipmentId <= equipmentCount;
    }

    function getAllEquipments() external view returns (Equipment[] memory) {
        Equipment[] memory allEquipments = new Equipment[](equipmentCount);
        for (uint256 i = 1; i <= equipmentCount; i++) {
            allEquipments[i - 1] = equipments[i];
        }
        return allEquipments;
    }

    function getEquipmentById(
        uint256 _equipmentId
    ) public view returns (Equipment memory) {
        Equipment memory equipment = equipments[_equipmentId - 1];
        return equipment;
    }

    function changeEquipmentState(
        uint256 _equipmentId,
        string memory _newState
    ) public {
        require(equipmentExists(_equipmentId), "Equipment does not exist");
        equipments[_equipmentId].state = _newState;
        emit EquipmentStateChanged(_equipmentId, _newState);
    }
}
