/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  14355: {
    FlashLoanRecipient: {
      address: "0xAEF9024367Ed29e606dE713845f93A82882a84Ef",
      abi: [
        {
          inputs: [],
          name: "hello",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IERC20[]",
              name: "tokens",
              type: "address[]",
            },
            {
              internalType: "uint256[]",
              name: "amounts",
              type: "uint256[]",
            },
            {
              internalType: "bytes",
              name: "userData",
              type: "bytes",
            },
          ],
          name: "makeFlashLoan",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_tokenIn",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_amountIn",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "_tokenOut",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_amountOutMin",
              type: "uint256",
            },
          ],
          name: "pancakeswapTokens",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IERC20[]",
              name: "tokens",
              type: "address[]",
            },
            {
              internalType: "uint256[]",
              name: "amounts",
              type: "uint256[]",
            },
            {
              internalType: "uint256[]",
              name: "feeAmounts",
              type: "uint256[]",
            },
            {
              internalType: "bytes",
              name: "userData",
              type: "bytes",
            },
          ],
          name: "receiveFlashLoan",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_tokenIn",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_amountIn",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "_tokenOut",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_amountOutMin",
              type: "uint256",
            },
          ],
          name: "sushiswapTokens",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "userData",
              type: "bytes",
            },
          ],
          name: "swap",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_tokenIn",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_amountIn",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "_tokenOut",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_amountOutMin",
              type: "uint256",
            },
          ],
          name: "uniswapTokens",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
