// SPDX-License-Identifier: MIT

/// @title ERC721Tradable
///
/// An ERC721 contract that allows us to set contract-wide royalty and URI information. 
/// It also implements the OperatorFilterer standard from OpenSea to ensure the royalties are "enforced" to some degree
/// by filtering out marketplaces and sellers who are known not to honour them.
///
/// After some thought, we did not implement the OpenSea Proxy for gas-less listings, as we assume most people will not
/// be as keen to sell their conversations as they might be for other NFTs. 

pragma solidity 0.8.7;

import { ERC721 } from "../openzeppelin/contracts/token/ERC721/ERC721.sol";
import { ERC721URIStorage } from "../openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import { ERC2981ContractWideRoyalties, ERC2981Royalties } from "./ERC2981ContractWideRoyalties.sol";
import "../OperatorFilter/OperatorFilterer.sol";

contract ERC721Tradable is 
    ERC721URIStorage,
    ERC2981ContractWideRoyalties,
    OperatorFilterer 
{

    constructor(
        string memory _name,
        string memory _symbol
    ) ERC721(_name, _symbol) { 
        OperatorFilterer._init(0x3cc6CddA760b79bAfa08dF41ECFA224f810dCeB6, true);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override(ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC2981Royalties)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
