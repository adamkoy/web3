const { Network, Alchemy } = require("alchemy-sdk");

// Optional config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: "-_HOpivT8VS", // Replace with your Alchemy API Key.
  network: Network.ETH_MAINNET, // Replace with your network.
};
const alchemy = new Alchemy(settings);

alchemy.core
  .getTransactionReceipt(
    "0x68ea69fd8b5dfa589a7a983c324ab153a33356320207885a9bba84425598dcaa" // Transaction hash of the transaction for which you want to get information.
  )
  .then(console.log);