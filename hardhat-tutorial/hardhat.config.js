require("@nomiclabs/hardhat-waffle")
require("dotenv").config({ path: ".env" })

const RINKEBY_URL = process.env.RINKEBY_URL
const ROPSTEN_URL = process.env.ROPSTEN_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    networks: {
        rinkeby: {
            url: RINKEBY_URL,
            chainId: 4,
            accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
        },
        ropsten: {
            url: ROPSTEN_URL,
            chainId: 3,
            accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
        },
    },
    solidity: "0.8.4",
}
