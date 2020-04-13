// Load dotenv config if not in a production setup
if((process.env.ENVIRONMENT || "dev") != "prod") {
    require("dotenv").config();
}

// Load modules
const fs = require("fs");

// Get Infura Project ID to connect to the Ethereum main net through Infura
// using a websocket provider
const infuraProjectID = process.env.INFURA_PROJECT_ID;
const infuraBase = process.env.INFURA_WSS_BASE || "wss://mainnet.infura.io/ws/v3/";

// Connect to the Ethereum main network through Infura
const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.WebsocketProvider(infuraBase + infuraProjectID));

// Create USDC Contract using its ABI and address
const usdcAbi = JSON.parse(fs.readFileSync(process.env.USDC_CONTRACT_ABI_PATH || "resources/usdc-abi.json"));
const usdcAddress = process.env.USDC_CONTRACT_ADDRESS || "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
const usdcContract = new web3.eth.Contract(usdcAbi, usdcAddress);

// Subscribe to Transfer events of the USDC Smart Contract
usdcContract.events.Transfer(async (error, event) => {
    if (error) { console.log(error) }
    else { console.log(event) }  
})