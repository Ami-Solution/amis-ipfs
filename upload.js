const IPFS = require('ipfs-api');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

ipfs.util.addFromFs('./build/', { recursive: true, ignore: ['**/*.js.map', '**/*.css.map']}, (err, result) => {
  console.log(err)
  console.log(result)
})
