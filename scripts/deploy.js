const main = async () => {
  const imgBase = "https://ipfs.infura.io/ipfs";
  const gameContractFactory = await hre.ethers.getContractFactory(
    "TolkienTokens"
  );
  const gameContract = await gameContractFactory.deploy(
    ["Gimli", "Aragorn", "Legolas"],
    [
      `${imgBase}/QmQbzHd9MU3FxMZAFatANeq25xKuu29VjRGkkhtaFCMwiN`,
      `${imgBase}/QmedcXR4tNJ4QzQkriCMi6fE46hrmzcV8tjhQVbTqTHyWb`,
      `${imgBase}/QmPotCJaqoVJdozpFHWv8Rx3934w3pvqh4svi8FRQJ4LBA`,
    ],
    [200, 150, 100], // HP values
    [25, 50, 100] // Attack damage values
  );

  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  txn = await gameContract.mintCharacterNFT(0);
  await txn.wait();
  console.log("Minted NFT #1");

  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();
  console.log("Minted NFT #2");

  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();
  console.log("Minted NFT #3");

  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();
  console.log("Minted NFT #4");

  console.log("Done deploying and minting!");
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
