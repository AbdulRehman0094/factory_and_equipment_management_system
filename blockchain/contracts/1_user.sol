// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract User {
    struct UserData {
        uint256 userId;
        address userAddress;
    }

    mapping(address => bool) public userExists;
    mapping(uint256 => UserData) public users;
    uint256 public userCount;

    event UserAdded(uint256 userId, address userAddress);

    function addUser() external returns (UserData memory newUser) {
        require(!userExists[msg.sender], "User already exists");

        userCount++;
        users[userCount] = UserData(userCount, msg.sender);
        userExists[msg.sender] = true;

        newUser = users[userCount];
        emit UserAdded(userCount, msg.sender);
    }

    function getAllUsers() external view returns (UserData[] memory) {
        UserData[] memory allUsers = new UserData[](userCount);
        for (uint256 i = 1; i <= userCount; i++) {
            allUsers[i - 1] = users[i];
        }
        return allUsers;
    }

    function getUserById(
        uint256 _userId
    ) external view returns (UserData memory) {
        require(_userId > 0 && _userId <= userCount, "User does not exist");
        return users[_userId];
    }

    function isUserExist(address _userAddress) external view returns (bool) {
        for (uint256 i = 1; i <= userCount; i++) {
            if (users[i].userAddress == _userAddress) {
                return true;
            }
        }
        return false;
    }
}
