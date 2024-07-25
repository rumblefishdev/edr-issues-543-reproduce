const hardhat = require('hardhat')
const { extendConfig } = require('hardhat/config')
const { TASK_NODE_GET_PROVIDER } = require('hardhat/builtin-tasks/task-names')

async function main() {
  const chainId = 11155111

  const hardhatProvider = await hardhat.run(TASK_NODE_GET_PROVIDER, {
    chainId
  })
  console.log('hardhatProvider', hardhatProvider);

  const txHash = '0xed9a921a8644538e97b4148cf28ccea8e925d52d12f13176dab9314a9fd9e6a4'
  const traceResult = await hardhatProvider.send('debug_traceTransaction', [txHash])

  console.log(`Finished debug_traceTransaction for ${chainId}/${txHash} with ${traceResult.structLogs.length} structLogs`)

}


main().then(() => console.log('don')).catch(e => console.error(e))
