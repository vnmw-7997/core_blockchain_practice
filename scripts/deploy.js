const hre = require("hardhat");

async function main() {
  const account = await ethers.getSigners();
  const GuessTokenContract = await hre.ethers.getContractFactory("GuessToken");
  const guessTokenContract = await GuessTokenContract.deploy(account[0]);

  const GuessGameContract =
    await hre.ethers.getContractFactory("GuessTheNumber");
  const guessGameContract = await GuessGameContract.deploy(
    guessTokenContract.target,
    ethers.parseEther("2"),
  );

  await guessTokenContract.mint(
    guessGameContract.target,
    ethers.parseEther("1000"),
  );

  const balance = await guessTokenContract.balanceOf(guessGameContract.target);
  console.log(balance);

  console.log("Guess Token contract deployed to:", guessTokenContract.target);
  console.log("Guess game contract deployed to:", guessGameContract.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
