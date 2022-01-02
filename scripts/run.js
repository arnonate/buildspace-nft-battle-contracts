const { getGameContract } = require("../utils/contractInitializers");

const main = async () => {
  const gameContract = await getGameContract();

  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();
  console.log("Characters minted!");

  txn = await gameContract.attackBoss();
  await txn.wait();
  console.log("Boss attacked!");

  txn = await gameContract.attackBoss();
  await txn.wait();

  // Get the value of the NFT's URI.
  // let returnedTokenUri = await gameContract.tokenURI(1);
  // console.log("Token URI:", returnedTokenUri);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
