const FIBOS = require('fibos.js')
var httpServerHost = 'http://tunnel.fibos.io/1.0/app/token/create'
var account = 'xxxxxxxxxxxx' //选一个FIBOS账户名

const run = async () => {
    const prikey = await FIBOS.modules.ecc.randomKey()
    const pubkey = await FIBOS.modules.ecc.privateToPublic(prikey)
    const rep = await fetch(httpServerHost, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
            account,
            pubkey,
        }),
    })
    const data = await rep.json()

    console.log('fibos response', data)
    console.log('private key', prikey)
    console.log('public key', pubkey)
}
run()
