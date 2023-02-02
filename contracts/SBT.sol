// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract SBT is ERC721, ERC721URIStorage, AccessControl {
    bytes32 public constant EDITOR_ROLE = keccak256("EDITOR_ROLE");
    uint8 public sbt_type;// 1 is ID, 0 is File

    constructor(
        address editor
    ) ERC721("SoulSci", "SST") {
        _setupRole(EDITOR_ROLE, editor);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://gateway.lighthouse.storage/ipfs/";
    }

    function safeMint(address to, string memory uri, uint8 _type) public onlyRole(EDITOR_ROLE) returns (uint256) {
        sbt_type = _type;
        uint256 tokenId = uint256(keccak256(abi.encodePacked(address(this), block.timestamp)));
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        return (tokenId);
    }

    // The following functions are overrides required by Solidity.

    function _afterTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
        internal
        override(ERC721)
    {
        super._afterTokenTransfer(from, to, tokenId, batchSize);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) onlyRole(EDITOR_ROLE){
        super._burn(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    //the following functions are required to override the transferability of ERC-721
    //making this contract SoulBound
    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
        internal
        override(ERC721)
    {
        require(from == address(0), "Err: token is SOUL BOUND");
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

}