
//0xdf71BA382Fe1861B4197DE77759349d7ccf2783E  contract address on ropsten
//deployed using remix 

pragma solidity ^0.4.25;
contract ipfsH {
 string ipfsHash;
 
 function sendHash(string x) public {
   ipfsHash = x;
 }

 function getHash() public view returns (string x) {
   return ipfsHash;
 }
}
