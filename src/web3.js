// //overrides metamask v0.2 for our 1.0 version.
//1.0 lets us use async and await instead of promises

import Web3 from 'web3';
var web3tmp
//overrides metamask v0.2 for our v 1.0
if (typeof window.web3 !== 'undefined') {
    web3tmp = new Web3(window.web3.currentProvider);
} else {
    web3tmp = new Web3();
    console.log("No WanMask Found")
}
const web3 = web3tmp
export default web3;
