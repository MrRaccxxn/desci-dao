// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./EnumDeclaration.sol";

contract Vote {
    //default status is set to Pending
    VoteStatus public status;

    //return value in uint
    //Pending      - 0
    //Accepted     - 1
    //NeedRevision - 2

    function get() public view returns (VoteStatus) {
        return status;
    }

    function set(VoteStatus _status) public {
        status = _status;
    }

    //defaults it back to Pending
    function reset() public {
        delete status;
    }
}