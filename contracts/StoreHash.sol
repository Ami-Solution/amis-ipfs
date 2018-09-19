
//0xe830cf8738b77cc7cbed522387ab12959a120e25  contract address on ropsten
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
