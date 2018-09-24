
//0xdf71BA382Fe1861B4197DE77759349d7ccf2783E  contract address on ropsten
//deployed using remix

contract Contract {
 string ipfsHash;

 function sendHash(string x) public {
   ipfsHash = x;
 }

 function getHash() public view returns (string x) {
   return ipfsHash;
 }
}
