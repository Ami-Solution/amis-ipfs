pragma solidity ^0.4.23;
import "github.com/Arachnid/solidity-stringutils/strings.sol";

contract IpfsFactory {
    using strings for *;
    string ipfsUrls = "https://ipfs.io/ipfs/";
    uint id = 0;

    mapping (uint => string) public ipfsToNumber;
    
        function ipfsSet(string ipfsHash) public {
            ipfsToNumber[id] = ipfsHash;
            id++;
        }
        
        function ipfsGet(uint ipfsNum) public view returns (string){
            return ipfsUrls.toSlice().concat(ipfsToNumber[ipfsNum].toSlice()); // "abcdef"ipfsUrls
        }    
}
