require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close bone tooth story rescue night mad inner nature swap slight'; 
let testAccounts = [
"0x8c011d335f2484e60aca451f4d45854e117aedc44efdc7b7740aa5a8f557f10a",
"0x7d5075113a80bbd1d597ecacc0267326be324bbedac0a7382d8dd30d0f34a8b9",
"0x2ec74038cceddf92cc4a6789bd18322869dc8fa69b95a74471b150bc4e071f34",
"0x90f3b76ae6283f28da3b3bbd3b70a05f4305f99fd12fd8a563a34cb3be9f08ac",
"0x323a5e63fd50fe8394d87e5f817ea486c5230b3a01c528fc804bfaec7c3a0ba9",
"0xf78ad6fa123d3b49a8f3f4a8d2ac7ff060fa931fe87358c36344b27cc30b2ba9",
"0x5ee54d971025aab9f837e92cd886cce3d45576f230539eba973d1618ae9f2e0f",
"0x0e73b1242012c8258b4c66241cd4405811814e73aeaa10ea7e1d3bbfbbc49d09",
"0xac7577c4b2ab7a356528d45596b0f9a4969eaff4ee4b3004eaa09d289e00c134",
"0xa02c93138f33a068bfe687a36eaa0df868d213e36b0920e50d40a1a77f2761d8"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


