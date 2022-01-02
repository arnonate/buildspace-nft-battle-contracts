const { getGameContract } = require("../utils/contractInitializers");

const main = async () => {
  const gameContract = await getGameContract();

  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
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
