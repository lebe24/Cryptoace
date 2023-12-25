require("@nomiclabs/hardhat-waffle");

require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  settings: {
    optimizer: {
      enabled: true,
      runs: 1000,
    },
  },
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/PsarISh1179m9QBVuRQt-ycza6J48JM4",
      accounts: ["4b912882d9201ae85369d766014ef05fc1e677936e164f69470983d78c57b749"],
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "../client/src/artifacts",
  },
  etherscan: {
    apiKey: "8H69RF8JMJM3IIWHMZAE6G55XVQUIZHUTR",
  },
};
