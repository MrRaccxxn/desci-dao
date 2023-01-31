// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./SBT.sol";

contract Editor{
    mapping(address => uint256[]) internal _sbts;

  function createPaper(string memory uri) external returns (address) {
    SBT Paper = new SBT(address(0), address(this));
    //use address to check if address has more than one SBT, if address has non-zero amount of contracts
    //that means if the address has at least one contract then it must be an ID SBT therefore we can mint a file
    _sbts[msg.sender].push(Paper.safeMint(msg.sender, uri, true));
    return address (Paper);
  }

  function createID(string memory uri) external returns (address) {
    SBT ID = new SBT(msg.sender, address(this));
    //Use mapping to check if address has more than one SBT, if address has non-zero amount of contracts
    //that means it at least has an ID SBT, therefore we cannot mint another Id
    _sbts[msg.sender].push(ID.safeMint(msg.sender, uri, false));
    return address( ID );
  }
}