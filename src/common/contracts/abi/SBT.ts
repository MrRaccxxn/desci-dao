export const SBTContractAbi = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_soul",
                "type": "address"
            }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_soul",
                "type": "address"
            },
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "identity",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "url",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "score",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "timestamp",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct SBT.Soul",
                "name": "_soulData",
                "type": "tuple"
            }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_ticker",
                "type": "string"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "_soul",
                "type": "address"
            }
        ],
        "name": "Burn",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "_soul",
                "type": "address"
            }
        ],
        "name": "Mint",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_profiler",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_soul",
                "type": "address"
            }
        ],
        "name": "removeProfile",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "_profiler",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "_soul",
                "type": "address"
            }
        ],
        "name": "RemoveProfile",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_soul",
                "type": "address"
            },
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "identity",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "url",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "score",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "timestamp",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct SBT.Soul",
                "name": "_soulData",
                "type": "tuple"
            }
        ],
        "name": "setProfile",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "_profiler",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "_soul",
                "type": "address"
            }
        ],
        "name": "SetProfile",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_soul",
                "type": "address"
            },
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "identity",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "url",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "score",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "timestamp",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct SBT.Soul",
                "name": "_soulData",
                "type": "tuple"
            }
        ],
        "name": "update",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "_soul",
                "type": "address"
            }
        ],
        "name": "Update",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_profiler",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_soul",
                "type": "address"
            }
        ],
        "name": "getProfile",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "identity",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "url",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "score",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "timestamp",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct SBT.Soul",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_soul",
                "type": "address"
            }
        ],
        "name": "getSoul",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "identity",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "url",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "score",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "timestamp",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct SBT.Soul",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_profiler",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_soul",
                "type": "address"
            }
        ],
        "name": "hasProfile",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_soul",
                "type": "address"
            }
        ],
        "name": "hasSoul",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_soul",
                "type": "address"
            }
        ],
        "name": "listProfiles",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "operator",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "ticker",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];