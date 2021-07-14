import Web3 from 'web3';
import * as tellorABI from './../contracts/TellorMesosphere.json';

// Setting up smart contract for Polygon
const web3 = new Web3("https://polygon-mainnet.infura.io/v3/5186860ac32a42758846a4735922ec46");
let abi = tellorABI.default
const addr = "0xACC2d27400029904919ea54fFc0b18Bf07C57875";
export const tellorPriceFeed = new web3.eth.Contract(abi, addr);