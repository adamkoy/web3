// interact.js
const ethers = require("ethers");
require("dotenv").config();

// Load contract ABI
const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");
const contractABI = contract.abi;

// Provider
const alchemyProviderUrl = `https://eth-sepolia.g.alchemy.com/v2/${process.env.API_KEY}`;
const alchemyProvider = new ethers.providers.JsonRpcProvider(alchemyProviderUrl);

// Signer
const sepoliaPrivateKey = process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(sepoliaPrivateKey, alchemyProvider);

// Contract
const contractAddress = process.env.CONTRACT_ADDRESS;
const helloWorldContract = new ethers.Contract(contractAddress, contractABI, wallet);

(async () => {
  const currentMessage = await helloWorldContract.message();
  console.log("The message is:", currentMessage);

  console.log("Updating the message...");
  const updateTx = await helloWorldContract.update("This is the new message");
  await updateTx.wait();

  const newMessage = await helloWorldContract.message();
  console.log("The new message is:", newMessage);
})();