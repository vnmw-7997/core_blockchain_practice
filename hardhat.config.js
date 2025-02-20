require("@nomicfoundation/hardhat-toolbox");

const { PrivateKey } = require("./secret.json");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",

  networks: {
    hardhat: {},
    core_testnet: {
      url: "https://rpc.test2.btcs.network",
      accounts: [PrivateKey],
      chainId: 1114,
    },
  },
};
