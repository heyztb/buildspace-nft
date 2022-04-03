const { ethers } = require("hardhat");

const main = async () => {
  const NFT = await ethers.getContractFactory("MyNFT");
  const myNFT = await NFT.deploy();
  await myNFT.deployed();

  console.log("NFT contract deployed to: ", myNFT.address);
  let txn = await myNFT.makeNFT();
  await txn.wait();

  txn = await myNFT.makeNFT();
  await txn.wait();
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

runMain();