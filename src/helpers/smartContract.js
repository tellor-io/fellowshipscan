import Web3 from 'web3';
import * as tellorABI from './../contracts/TellorMesosphere.json';

// Setting up smart contract for Polygon
const web3 = new Web3("https://polygon-mumbai.infura.io/v3/ced3bacceb3b493aa7528b410f74a8fe");
let abi = tellorABI.default
const addr = "0x32704dCEb8dA339516f4AE561Cd40a6cBE6d98c9";
export const tellorPriceFeed = new web3.eth.Contract(abi, addr);