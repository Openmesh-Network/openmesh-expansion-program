// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract OEPReserve {
    event Reserved(address indexed account, uint256 amount);

    constructor() {}

    function reserve(uint256 amount) external {
        emit Reserved(msg.sender, amount);
    }
}
