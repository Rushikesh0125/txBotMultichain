// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

interface IStaking {
    function addStake(uint256 _budsAmount, uint256 _farmerTokenId) external;
    function unStakeBuds(uint256 _budsAmount) external;
    function unStakeFarmer() external;
    function raid(uint256 tokenId) external payable;
    function finalizeRaid(address raider, bool isSuccess, bool isboosted, uint256 _boosts) external;
    function crossChainRaid(uint64 chainSelector, uint256 tokenId) external payable;
    function crossChainStake(uint256 _budsAmount, uint256 _farmerTokenId, uint64 chainSelector) external payable;
    function reqData() external;
    function fetchData(uint256 _globalStakedBudsCount) external;
    function checkUpkeep(bytes calldata checkData) external view returns (bool upkeepNeeded, bytes memory performData);
    function performUpkeep(bytes calldata performData) external;
    function onERC721Received(address operator, address from, uint256 tokenId, bytes calldata data) external returns (bytes4);
}
