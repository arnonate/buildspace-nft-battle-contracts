async function getGameContract() {
  const imgBase = "https://ipfs.infura.io/ipfs";

  const gameContractFactory = await hre.ethers.getContractFactory(
    "BattleForMiddleEarth"
  );

  const gameContract = await gameContractFactory.deploy(
    ["Gimli", "Aragorn", "Legolas"],
    [
      `${imgBase}/QmQbzHd9MU3FxMZAFatANeq25xKuu29VjRGkkhtaFCMwiN`,
      `${imgBase}/QmedcXR4tNJ4QzQkriCMi6fE46hrmzcV8tjhQVbTqTHyWb`,
      `${imgBase}/QmPotCJaqoVJdozpFHWv8Rx3934w3pvqh4svi8FRQJ4LBA`,
    ],
    [200, 150, 100], // HP values
    [25, 50, 100], // Attack damage values
    "Sauron", // Boss name
    `${imgBase}/QmenEdbm9SYgtHw6mhEoT2sRe6gubNhCCPBDd5YVWU84SR`, // Boss image
    10000, // Boss hp
    50 // Boss attack damage
  );

  return gameContract;
}

module.exports = {
  getGameContract,
};
