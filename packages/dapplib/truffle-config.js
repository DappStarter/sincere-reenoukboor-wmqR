require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note sister protect hover knife food shadow'; 
let testAccounts = [
"0xd7aa6514d18588a4551eaf62e9f28ecf46a475a5166ff774d637981353b19c67",
"0xf4775b7b04f9ec0b5c8a63507ff371fd95f162d5a883a140857412aa50c4ed90",
"0xc296536faf0a2eb47f6eb9456a0413f1f7860f3b163d4f528f06fca9556d8880",
"0x0ee0605a619e7ff97e2b363f9eebfcb338fb5aab527ecc6a782534314dfed471",
"0x06b8220c95981a56abd1056f0b3143da89d00ae62809214785fdd259b41ef85b",
"0xe063458ab0a21d0ed5871af6f8352b516b6856cdaec24dd110ac1eb99dfe6f3e",
"0x45fd26e838900bc0f57a2b2510f967a9573365a885286fd64d8a9c93ae10575d",
"0x7dc2803644d46dfe5c35d57b4f3f8cc2bb3f8318f75c8b20cbcc56d35e0416a3",
"0x2164424062dea119531c6553fd960efeedc805bb0bcf820817ec47db5ced40f5",
"0x3a07b56900efbc52283e0ebddd0cca3f94eb94f4b8c62323712e9cffc224f75d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

