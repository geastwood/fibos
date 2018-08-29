const FIBOS = require('fibos.js')

const run = async () => {
    const prikey = await FIBOS.modules.ecc.randomKey()
    const pubkey = await FIBOS.modules.ecc.privateToPublic(prikey)
    console.log(prikey, pubkey)
}

run()
