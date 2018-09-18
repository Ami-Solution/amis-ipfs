
//0x70d4683c3d6d05258b658213792133a5fa8d52fb  contract address on ropsten
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
