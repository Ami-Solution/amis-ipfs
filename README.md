# Simple Amischain + InterPlanetary File System (IPFS)+ React.js DApp

A simple DApp to upload a document to IPFS and then store the IPFS hash on the Amischain blockchain. Once the IPFS hash number is sent to the Amischain blockchain, the user will receive a transaction receipt. We will use Create-React-App framework to make a front-end. This Dapp works with any user that has MetaMask installed in their browser.

This repository was created originally for this great tutorial and has been adapted to work with Amischain
https://itnext.io/build-a-simple-ethereum-interplanetary-file-system-ipfs-react-js-dapp-23ff4914ce4e

## Installation

### Deploy contract
To recreate this site first create the contract (StoreHash.sol). You can use Remix(https://remix.ethereum.org) for that together with MetaMask(https://Metamask.io/). Create a new file, paste the contents of the .sol file and deploy.

### Update files
Then update the contract address in storehash.js with your contract address (and ABI if you changed the contract). Then run the app with `npm start`

### Make production build
run `npm run build` to make a build in the build directory. You can then upload the complete dApp to IPFS to run it from the cloud with `npm run upload`. You can find the url by looking at the last hash:
```
  ...
  { path: 'build',
    hash: 'Qmc5m94Gu7z62RC8waSKkZUrCCBJPyHbkpmGzEePxy2oXJ',
    size: 2426590 } ]

```
Your url would be: 
- https://ipfs.infura.io/ipfs/Qmc5m94Gu7z62RC8waSKkZUrCCBJPyHbkpmGzEePxy2oXJ but it's available on all ipfs nodes (after a while):
- http://localhost:8080/ipfs/Qmc5m94Gu7z62RC8waSKkZUrCCBJPyHbkpmGzEePxy2oXJ/ or
- http://ipfs.io/ipfs/Qmc5m94Gu7z62RC8waSKkZUrCCBJPyHbkpmGzEePxy2oXJ/ or


First time loading from IPFS takes a while and might require an F5 ;)
