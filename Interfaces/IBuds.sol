// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

interface IBudsToken {
    function initialize(
        string memory name_,
        string memory symbol_,
        uint64 subscriptionId,
        bytes32 _vrfKeyHash,
        address _vrfCoordinatorAddress,
        address _informantToken_,
        address _stonerToken_
    ) external;

    function name() external view returns (string memory);

    function symbol() external view returns (string memory);

    function decimals() external view returns (uint8);

    function totalSupply() external view returns (uint256);

    function balanceOf(address account) external view returns (uint256);

    function changeMinter(address newMinter) external;

    function transfer(address to, uint256 amount) external returns (bool);

    function allowance(address owner, address spender) external view returns (uint256);

    function approve(address spender, uint256 amount) external returns (bool);

    function transferFrom(address from, address to, uint256 amount) external returns (bool);

    function increaseAllowance(address spender, uint256 addedValue) external returns (bool);

    function decreaseAllowance(address spender, uint256 subtractedValue) external returns (bool);

    function mint(address to, uint256 amount) external;

    function burnFrom(address from, uint256 amount) external;

    function burnForInformant() external returns (uint256);

    function burnForStoner() external returns (uint256);

    function fulfillRandomWords(uint256 _requestId, uint256[] memory _randomWords) external;

    function getRequestStatus(uint256 _requestId) external view returns (bool fulfilled, uint256[] memory randomWords);

    function setGasLimit(uint32 _gasLimit) external;
}
