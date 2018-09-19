
//0x9c5b2de90000b29ffec374c857ed5db77e46941e  contract address on rinkeby
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
