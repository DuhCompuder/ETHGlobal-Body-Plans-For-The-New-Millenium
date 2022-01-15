const hre = require("hardhat");
const fs = require('fs');

async function main() {
  const GameItem = await hre.ethers.getContractFactory("GameItem");
  const gameItem = await GameItem.deploy();
  await gameItem.deployed();
  console.log("gameItem deployed to:", gameItem.address);

  let config = `
  export const gameitemaddress = "${gameItem.address}"
  `

  let data = JSON.stringify(config)
  fs.writeFileSync('config.js', JSON.parse(data))
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
