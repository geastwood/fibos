var FIBOS = require('fibos.js')
var localConfigs = require('./config.json')
var config = {
    chainId: '6aa7bd33b6b45192465afa3553dedb531acaaff8928cf64b70bd4c5e49b7ec6a',
    priKey: localConfigs.privateKey,
    httpEndpoint: 'http://ca-rpc.fibos.io:8870',
    verbose: false,
}
var fibos_client = FIBOS({
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
    let ctx = await fibos_client.contract('eosio.token')
    var result = await ctx.exchange(
        localConfigs.account,
        `1.0000 EOS@eosio`, // Change here
        `0.0000 FO@eosio`,
        `exchange EOS to FO from fei`,
        {
            authorization: localConfigs.account,
        },
    )
    console.log(result)
}

run()
