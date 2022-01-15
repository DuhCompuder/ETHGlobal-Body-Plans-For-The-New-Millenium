require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY || '';
const ROPSTEN_PRIVATE_KEY = process.env.ROPSTEN_PRIVATE_KEY || '';
const MATIC_MUMBAI_PRIVATE_KEY = process.env.MATIC_MUMBAI_PRIVATE_KEY || '';
const MATIC_MAINNET_PRIVATE_KEY = process.env.MATIC_MAINNET_PRIVATE_KEY || '';
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    // ropsten: {
    //   url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
    //   accounts: [`${ROPSTEN_PRIVATE_KEY}`]
    // },
    // mumbai: {
    //   // Infura
    //   // url: `https://polygon-mumbai.infura.io/v3/${infuraId}`
    //   // Alchemy
    //   // url: `https://polygon-mumbai.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
    //   url: "https://rpc-mumbai.matic.today",
    //   accounts: [`${MATIC_MUMBAI_PRIVATE_KEY}`]
    // },
    // matic: {
    //   // Infura
    //   // url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
    //   // Alchemy
    //   // url: `https://polygon-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
    //   url: "https://rpc-mainnet.maticvigil.com",
    //   accounts: [`${MATIC_MAINNET_PRIVATE_KEY}`]
    // }
  },
  solidity: {
    compilers: [
      {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
    ],
  }
};

