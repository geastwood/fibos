var FIBOS = require('fibos.js')
var localConfigs = require('./config.json')
var config = {
    chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
    priKey: localConfigs.eosPrivateKey,
    httpEndpoint: 'https://api.eosnewyork.io',
    verbose: false,
}
var eos_client = FIBOS({
    chainId: config.chainId,
    keyProvider: config.priKey,
    httpEndpoint: config.httpEndpoint,
    verbose: false,
    logger: {
        log: null,
        error: null,
    },
})

const run = async () => {
    let eosaccount = localConfigs.eosAccount
    let value = 'x.0000' + ' EOS' // amount of eos to transfer
    let ctx = await eos_client.contract('eosio.token')
    let memo = localConfigs.account
    let result = await ctx.transfer(eosaccount, 'fiboscouncil', value, memo)
    console.log(result)
}

run()
