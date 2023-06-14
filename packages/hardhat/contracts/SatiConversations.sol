// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import { ERC721Tradable } from "./base/ERC721Tradable.sol";
import { IERC20 } from './openzeppelin/contracts/token/ERC20/IERC20.sol';
import { SafeERC20 } from './openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol';
import { IWETH } from './interfaces/IWETH.sol';
import { Counters } from "./openzeppelin/contracts/utils/Counters.sol";

contract SatiConversations is ERC721Tradable {
    using SafeERC20 for IERC20;
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    error NotAuthorized();

    address public steward;
    address public weth;

    event Conversion(address indexed signer, uint256 amount, uint256 indexed tokenId, string uri);

    modifier onlySteward() {
        if (msg.sender != steward) {
            revert NotAuthorized();
        }
        _;
    }

    constructor(
        address _steward,
        address _weth
    ) ERC721Tradable('Sati Conversations', 'SATI') {
        steward = _steward;
        weth = _weth;
     }

    /**
     * @notice Link to contract metadata
    */
    function contractURI() 
        external 
        pure 
        returns (string memory) 
    {
        return "https://arweave.net/JB096wImG3pVLPLQVe0tmgiJHUjrNSCtWdi-ojxTETg";
    }

    /** @notice          Set the royalties for the whole contract. Our intention is to set it to 10% in perpetuity.
     *  @param recipient the royalties recipient - will always be pr1s0nart, for regulatory reasons.
     *  @param value     royalties value (between 0 and 10000)
    */
    function setRoyalties(address recipient, uint256 value) 
        external
        onlySteward
    {
        _setRoyalties(recipient, value);
    }

    /**
     * @dev        Receives donation and mints new NFT for donor
     * @param uri  a string to be set as the tokenURI pointing at the conversation stored in IPFS
     */
    function converse(string memory uri) 
        external 
        payable 
    {
        require(msg.value >= 0.001 ether, "SATI: Minimum mint is 0.001 ETH");

        uint256 newTokenId = _tokenIdCounter.current();
        _safeMint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, uri);
        _tokenIdCounter.increment();
        emit Conversion(msg.sender, msg.value, newTokenId, uri);

        _safeTransferETHWithFallback(msg.value);
    }

    /** 
    * @notice           Burns a token if egregious content is added instead of a conversation
    * @param tokenId    the tokenId to be burnt by the steward
    */
    function burn(uint256 tokenId) public virtual onlySteward {
        _burn(tokenId);
    }

    /**
     * @notice       Transfer ETH. If the ETH transfer fails, wrap the ETH and try send it as WETH.
     * @param amount the total amount
     */
    function _safeTransferETHWithFallback(uint256 amount) internal {
        if (!_safeTransferETH(amount)) {
            IWETH(weth).deposit{ value: amount }();
            IERC20(weth).safeTransfer(steward, amount);
        }
    }

    /**
     * @notice Transfer ETH and return the success status.
     */
    function _safeTransferETH(uint256 amount) internal returns (bool) {
        (bool success, ) = steward.call{value: amount, gas: 30_000 }(new bytes(0));
        return success;
    }

}