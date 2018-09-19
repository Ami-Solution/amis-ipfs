import {Table, Grid, Button, Form} from 'react-bootstrap';
import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import ipfs from './ipfs';
import storehash from './storehash';

class App extends Component {

    state = {
        provider: web3.currentProvider,
        ipfsHash: null,
        buffer: '',
        ethAddress: '',
        blockNumber: '',
        transactionHash: '',
        gasUsed: '',
        content: '',
        myHash: '',
        txReceipt: ''
    };

    captureFile = (event) => {
        event.stopPropagation()
        event.preventDefault()
        const file = event.target.files[0]
        let reader = new window.FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = () => this.convertToBuffer(reader)
    };

    convertToBuffer = async (reader) => {
        //file is converted to a buffer to prepare for uploading to IPFS
        const buffer = await Buffer.from(reader.result);
        //set this buffer -using es6 syntax
        this.setState({buffer});
    };

    onClick = async () => {

        try {
            this.setState({blockNumber: "waiting.."});
            this.setState({gasUsed: "waiting..."});

            // get Transaction Receipt in console on click
            // See: https://web3js.readthedocs.io/en/1.0/web3-eth.html#gettransactionreceipt
            await web3.eth.getTransactionReceipt(this.state.transactionHash, (error, txReceipt) => {
                if (error) console.log(error);
                this.setState({txReceipt});
            }); //await for getTransactionReceipt

            await this.setState({blockNumber: this.state.txReceipt.blockNumber});
            await this.setState({gasUsed: this.state.txReceipt.gasUsed});
        } //try
        catch (error) {
            console.log(error);
        } //catch
    } //onClick

    getHash = async () => {
        try {
            var tmp = "Loading ..."
            this.setState({ipfsHash: tmp});

            await storehash.methods.getHash().call().then(function(ipfsHash) {
                tmp = ipfsHash
            })
            this.setState({ipfsHash: tmp});

        } //try
        catch (error) {
            console.log(error);
        } //catch
    } //getHash

    onSubmit = async (event) => {
        event.preventDefault();

        //bring in user's metamask account address
        const accounts = await web3.eth.getAccounts();

        //obtain contract address from storehash.js
        const ethAddress = await storehash.options.address;
        this.setState({ethAddress});

        //save document to IPFS,return its hash#, and set hash# to state
        //https://github.com/ipfs/interface-ipfs-core/blob/master/SPEC/FILES.md#add
        await ipfs.add(this.state.buffer, (error, ipfsHash) => {
            //setState by setting ipfsHash to ipfsHash[0].hash
            if (error) console.log(error);
            this.setState({ipfsHash: ipfsHash[0].hash});

            // call Ethereum contract method "sendHash" and .send IPFS hash to etheruem contract
            //return the transaction hash from the ethereum contract
            //see, this https://web3js.readthedocs.io/en/1.0/web3-eth-contract.html#methods-mymethod-send

            storehash.methods.sendHash(this.state.ipfsHash).send({
                from: accounts[0]
            }, (error, transactionHash) => {
                if (error) console.log(error);
                this.setState({transactionHash});
            }); //storehash
        }) //await ipfs.add
    }; //onSubmit

    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <h1> Wanchain and IPFS with Simple React App</h1>
                </header>

                <hr/>
                { this.state.provider == null ? (
                    <div><h3> No WanMask Found! </h3>
                    Install WanMask first from <a href="https://chrome.google.com/webstore/detail/wanmask/omnkcjdohbnjfjmlaiboojplahajnenj" target="_blank" rel="noopener noreferrer">Google Store</a></div>
                ) : (
                <Grid>
                    <h3> Choose file to send to IPFS </h3>
                    <Form onSubmit={this.onSubmit}>
                        <input
                            type="file"
                            onChange={this.captureFile}
                        />
                        <Button
                            bsStyle="primary"
                            type="submit">
                            Send it
                        </Button>
                    </Form>

                    <hr/>
                    {this.state.transactionHash &&
                        <Button onClick={this.onClick}> Get Transaction Receipt </Button>
                    }
                    <Button onClick={this.getHash}> Get Hash from contract and load image </Button>
                    <Table bordered responsive>
                        <thead>
                        <tr>
                            <th>Tx Receipt Category</th>
                            <th>Values</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>IPFS Hash # stored on Wan Contract</td>
                            <td>{this.state.ipfsHash}</td>
                        </tr>
                        <tr>
                            <td>Wanchain Contract Address</td>
                            <td>{this.state.ethAddress}</td>
                        </tr>

                        <tr>
                            <td>Tx Hash #</td>
                            <td>{this.state.transactionHash}</td>
                        </tr>

                        <tr>
                            <td>Block Number #</td>
                            <td>{this.state.blockNumber}</td>
                        </tr>

                        <tr>
                            <td>Gas Used</td>
                            <td>{this.state.gasUsed}</td>
                        </tr>
                        </tbody>
                    </Table>
                    <div>
                        {this.state.ipfsHash ? (
                            <img width="300"
                                 src={`https://ipfs.io/ipfs/${this.state.ipfsHash}`}
                                 alt={`${this.state.ipfsHash}`} />
                        ) : (
                            <img
                                src="https://api.fnkr.net/testimg/333x180/?text=IPFS"
                                alt="NA"
                            />
                        )}
                    </div>
                </Grid>
                )}
                <div>Build with inspiration of <a href="https://itnext.io/build-a-simple-ethereum-interplanetary-file-system-ipfs-react-js-dapp-23ff4914ce4e" target="_blank" rel="noopener noreferrer">this tutorial</a>. Source code available here on <a href="https://github.com/WanJS/wan-ipfs" target="_blank" rel="noopener noreferrer">Github</a></div>
            </div>
        );
    } //render
}

export default App;
