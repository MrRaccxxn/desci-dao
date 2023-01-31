// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "../node_modules/@openzeppelin/contracts/access/AccessControl.sol";


contract SBT is ERC721, ERC721URIStorage, AccessControl {
    bytes32 public constant SBT_OWNER = keccak256("SBT_OWNER");
    bytes32 public constant EDITOR_ROLE = keccak256("EDITOR_ROLE");

    constructor(
        address owner,
        address editor
    ) ERC721("SoulSci", "SST") {
        if(owner != address(0)){
            //if ID SBT
            _setupRole(SBT_OWNER, owner);
            _setupRole(EDITOR_ROLE, editor);
        }
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://gateway.lighthouse.storage/ipfs/";
    }

    function safeMint(address to, string memory uri, bool file) payable public onlyRole(EDITOR_ROLE) returns (uint256) {
        if (file == false){
            //create UserIDSBT
            require(balanceOf(to) == 0, "Err: Only one ID per User");
        } else {
            //create FileSBT
            require(hasRole(SBT_OWNER, msg.sender), "Err: Caller is not SBT owner");
        }
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