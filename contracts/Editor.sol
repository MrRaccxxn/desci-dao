// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./SBT.sol";

contract Editor{
    mapping (address => uint8) public sbtType;
    SBT SBTcollection;

    //function createCollections() external {
    constructor(){
      SBTcollection = new SBT(address(this));
    }
    
    function mintID(string memory uri) external {
      require(sbtType[msg.sender] == 0, "Err: Cannot mint more than one ID");
      SBTcollection.safeMint(msg.sender, uri, 1);
      sbtType[msg.sender] = 1;
    }

    function mintPaper(string memory uri) external {
      require(sbtType[msg.sender] == 1, "Err: Must be an ID owner");
      SBTcollection.safeMint(msg.sender, uri, 0);
    }

}