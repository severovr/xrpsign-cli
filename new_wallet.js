#!/usr/bin/env node
const xrpl = require('xrpl')

function createMainnetWallet() {
  const wallet = xrpl.Wallet.generate()
  console.log(JSON.stringify(wallet));
}

createMainnetWallet()
process.exit(0);