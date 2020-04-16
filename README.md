# USDC Tracker

A simple NdoeJS application to track USC Coin exchanges over the Ehtereum Blockchain

### Prerequisites

This application uses Infura to connect to the Ethereum main net. 

You need to create a free account and get a free key to access the Ethereum network through Infura and use this application.

### Run the application

After cloning the repository, restore the packages using

```
npm install
```

Then, create a file named ".env" in the same directory as usdc-tracker. This file must contain the definition of the INFURA_PROJECT_ID env. variable. Replace accordingly :

.env file content :

```
INFURA_PROJECT_ID=<YOUR_INFURA_PROJECT_ID>
```

You can run the application using

```
node usdc-tracker.js
```

### What is the USD Coin ?

USD Coin (USDC) is a stablecoin backed by US dollars, which are held in reserve by regulated financial institutions.

### Some explanation

The USD Coin is a ERC20 Token that run on top of the Ethereum Blockchain. The ERC20 defines a standard interface to manage fungible tokens with an event called Transfer that should be fired each time the token is transfered between two parties.

The USCD Smart Contract is located at the address 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48. The smart contract uses the OpenZeppelin unstructured storage proxy pattern to forward calls to a 'Logic' contract that contains the real implementation. This 'Logic' contract is based on the OpenZeppelin ERC20  implementation located at the address 0x0882477e7895bdc5cea7cb1552ed914ab157fe56. 

Therefore, to interact with the USDC SmartContract with Web3js, you need the get the ABI of the OpenZeppelin Implementation and use the USDC Smart Contract address. The USDC Smart Contract will forward calls to the implementing contract.

[More on the OpenZeppelin proxy pattern here](https://blog.openzeppelin.com/proxy-patterns/)