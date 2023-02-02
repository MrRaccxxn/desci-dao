// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./SBT.sol";


contract Editor{
    mapping (address => uint8) public sbtType;
    mapping (address => uint256[]) public tokenIds;
    
    SBT SBTcollection;

    constructor(){
      SBTcollection = new SBT(address(this));
    }
    
    function mintID(string memory uri) external {
      require(sbtType[msg.sender] == 0, "Err: Cannot mint more than one ID");
      tokenIds[msg.sender].push(SBTcollection.safeMint(msg.sender, uri, 1));
      sbtType[msg.sender] = 1;
    }

    function mintPaper(string memory uri) external {
      require(sbtType[msg.sender] == 1, "Err: Must be an ID owner");
      tokenIds[msg.sender].push(SBTcollection.safeMint(msg.sender, uri, 0));
    }

    function getTokenURI(address addr, uint i) external view returns(string memory uri){
      //SBTID is alway at index 0, Files are 1 and greater
      return SBTcollection.tokenURI(tokenIds[addr][i]);
    }

    function getSbtCount(address addr) external view returns(uint256) {
      return tokenIds[addr].length;
    }

}