# install dependencies
`npm install` or `yarn`

# create fibos account
* open `createAccount.js`
* choose an account name
* run `node createAccount.js`
* it should run successfully, copy the private key
* paste the account name and private key into config.json (replace "account" and "privateKey")
* account is created on fibos mainnet

# transfer from eos account to fiboscouncil
* compele your eos account and private key in config.json
* open `transfer.js`, modify the amount
* run `node transfer.js`

# check balance on fibos
* run `node balance.js`
* it should show eos balance just transferred in

# exchange eos to fibos
* change the eos amount
* run `node exchange.js`
* check balance again

# exchange fibos to eos
* change fibos amount in `exchange_to_eos.js`
* run `node exchange_to_eos.js`
* check balance again

# transfer eos to own wallet
* change eos amount in `transfer_to_eos.js`
* run `node transfer_to_eos.js`
* check balance again
