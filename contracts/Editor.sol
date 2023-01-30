// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "../node_modules/@openzeppelin/contracts/access/AccessControl.sol";
import "./UserSBT.sol";
import "./FileSBT.sol";

abstract contract Editor is AccessControl{
  
  function createPaper(string memory uri) external returns (address) {
    FileSBT Paper = new FileSBT();
    Paper.safeMint(msg.sender, uri);
    return address (Paper);
  }

  //mapping(address => SBT[]) internal _userCollection;
  //mapping(string => address) internal _paperCollection;
  function createID(string memory uri) external returns (address) {
  UserSBT ID = new UserSBT(msg.sender, address(this));
  ID.safeMint(msg.sender, uri);
  return address( ID );
}
}