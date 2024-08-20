// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {Test} from "../lib/forge-std/src/Test.sol";
import {OEPReserve} from "../src/OEPReserve.sol";

contract OEPReserveTest is Test {
    struct Reserver {
        address account;
        uint256 amount;
    }

    event Reserved(address indexed account, uint256 amount);

    function test_ReserveEvents(Reserver memory reserve) public {
        OEPReserve oep = new OEPReserve();

        vm.expectEmit(address(oep));
        emit Reserved(reserve.account, reserve.amount);

        vm.prank(reserve.account);
        oep.reserve(reserve.amount);
    }
}
