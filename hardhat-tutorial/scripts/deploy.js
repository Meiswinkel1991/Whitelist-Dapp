const { ethers } = require("hardhat")

async function main() {
    const whitelistContract = await ethers.getContractFactory("Whitelist")

    const deployedWhitelistContract = await whitelistContract.deploy(10)

    // Wait for it to finish deploying
    await deployedWhitelistContract.deployed()

    console.log(
        `Whitelist Contract Address: ${deployedWhitelistContract.address}`
    )
}

// Call the main function and catch if there is any error
main()
    .then(() => {
        process.exit(0)
    })
    .catch((err) => {
        console.error(err)
        process.exit(1)
    })
