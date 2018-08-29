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
    const rst = await fibos_client.getTableRows(true, 'eosio.token', localConfigs.account, 'accounts')
    console.log(JSON.stringify(rst, null, 4))
}
run()
