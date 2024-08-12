"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StakingData = void 0;
exports.StakingData = {
    abi: [
        {
            "inputs": [],
            "name": "burnForInformant",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "requestId",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "burnForStoner",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "requestId",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_budsAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_farmerTokenId",
                    "type": "uint256"
                }
            ],
            "name": "addStake",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "raid",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_budsAmount",
                    "type": "uint256"
                }
            ],
            "name": "unStakeBuds",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_budsAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_farmerTokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint32",
                    "name": "destChainId",
                    "type": "uint32"
                }
            ],
            "name": "crossChainStake",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "bytes32",
                            "name": "guid",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint64",
                            "name": "nonce",
                            "type": "uint64"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "nativeFee",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "lzTokenFee",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct MessagingFee",
                            "name": "fee",
                            "type": "tuple"
                        }
                    ],
                    "internalType": "struct MessagingReceipt",
                    "name": "receipt",
                    "type": "tuple"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint32",
                    "name": "destChainId",
                    "type": "uint32"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "crossChainRaid",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "bytes32",
                            "name": "guid",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint64",
                            "name": "nonce",
                            "type": "uint64"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "nativeFee",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "lzTokenFee",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct MessagingFee",
                            "name": "fee",
                            "type": "tuple"
                        }
                    ],
                    "internalType": "struct MessagingReceipt",
                    "name": "receipt",
                    "type": "tuple"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint32",
                    "name": "eId",
                    "type": "uint32"
                },
                {
                    "internalType": "uint256",
                    "name": "budsAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                }
            ],
            "name": "getCctxFees",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "fee",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    address: "0xB2A338Fb022365Aa40a2c7ADA3Bbf1Ae001D6dbe",
};
