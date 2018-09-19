# Simple Ethereum + InterPlanetary File System (IPFS)+ React.js DApp

#A simple DApp to upload a document to IPFS and then store the IPFS hash on the Ethereum blockchain. Once the IPFS hash number is sent to the Ethereum blockchain, the user will receive a transaction receipt. We will use Create-React-App framework to make a front-end. This Dapp works with any user that has MetaMask installed in their browser.

## Simple steps for setup

### 1. Clone/Pull the repo & install deps

``` shell
$ npm install
```

to setup the node module dependencies.  

### 2. IPFS configuration

Install `ipfs` for your machine from [ipfs.io](https://ipfs.io/docs/install/) & start the IPFS daemon.

``` shell
$ ipfs daemon
```

**PS:** If you're doing step 2 for the first time, you may want to initiate minimal config at `~/.ipfs/` by doing this:

``` shell
$ ipfs init
```

### 3. Blockchain configuration

We are currently using Ethereum blockchain clients to demonstrate the persistence of IPFS hashes.
If you're looking for a hassle-free minimal setup, you may install [Ganache](https://truffleframework.com/ganache) & initiate a private chain with custom port on the host.

Deploy this simple storage [contract](contracts/AmisIpfsTokens.sol) on Remix IDE(https://remix.ethereum.org/) and update the same value for the constant variable `address` [here](src/storehash.js#5).

PS: In case of private ethereum networks, be sure to update the web3 definition values in the `src/web3.js` with `const web3 = new Web3(new Web3.providers.HttpProvider("http://<<HOST-IP>>:<<PORT>>"));`

### 3. Browser setup

Once setup, add an account from the Ganache/Blockchain net of your choice to Metamask.
You may install metamask for [Firefox](https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/), [Opera](https://addons.opera.com/en/extensions/details/metamask/), [Chrome](https://chrome.google.com/webstore/detail/nkbihfbeogaeaoehlefnkodbefgpgknn).

You may also try [Brave Browser](https://brave.com/) with some of the coolest built-in supports like Metamask, IPFS Browser etc..

### 4. Run 🚀

Once all setup, run the npm script:

``` shell
$ npm run start
```

![Voila](src/images/eth-ipfs.png)
Try it here [https://ami-solution.github.io/eth-ipfs/ipfsurl.html](https://ami-solution.github.io/eth-ipfs/ipfsurl.html)

## Contribution

Original Work: This is a proud work by MICHAEL CHAN [@mcchan1](https://github.com/mcchan1) 💚🏆🙏

Derivative Work:
`eth-ipfs` is adding a few new features & thanks to contributors:

* Ami Solution [@ami-solution](https://github.com/ami-solution/eth-ipfs)
