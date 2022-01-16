const hre = require("hardhat");
const fs = require('fs');

async function main() {
  const EncrabmentSeries = await hre.ethers.getContractFactory("EncrabmentSeries");
  const encrabmentSeries = await EncrabmentSeries.deploy();
  await encrabmentSeries.deployed();
  console.log("encrabmentSeries deployed to:", encrabmentSeries.address);

  let config = `
  export const nftaddress = "${encrabmentSeries.address}"
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
