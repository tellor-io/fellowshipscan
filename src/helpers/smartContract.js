import Web3 from 'web3';
import * as tellorABI from './../contracts/TellorMesosphere.json';

// Setting up smart contract for Polygon
const web3 = new Web3("https://polygon-mainnet.infura.io/v3/5186860ac32a42758846a4735922ec46");
let abi = tellorABI.default
const addr = "0xACC2d27400029904919ea54fFc0b18Bf07C57875";
export const tellorPriceFeed = new web3.eth.Contract(abi, addr);

// Reference Info for Mumbai TestNet
// const addr = "0x32704dCEb8dA339516f4AE561Cd40a6cBE6d98c9";
// const web3 = new Web3("https://polygon-mumbai.infura.io/v3/ced3bacceb3b493aa7528b410f74a8fe");