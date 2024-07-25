const ChainId = {
  mainnet : 1,
  polygon : 137,
  amoy : 80002,
  sepolia : 11155111,
  arbitrum : 42161,
  arbitrumGoerli : 421613,
}

const config = {
  solidity: '0.8.9',
  paths: {
    cache: '/tmp/cache',
  },
  networks: {
    hardhat: {
      chainId: ChainId.sepolia,
      forking: {
        url: "https://eth-sepolia.g.alchemy.com/v2/oDj71HCrnWLR4oGNfdTEzDft4IUXJeX_"
      },
      chains: {
        [ChainId.polygon]: {
          hardforkHistory: {
            cancun: 1,
            london: 1
          },
        }
      },
      chains: {
      //   // chains are configured to fork from blocks around the time of
      //   // March 15th 2023. it seems like a safe timespan for our use case.

      //   // CAUTION:
      //   // we shouldn't fork from too old blocks, because of getting errors of
      //   // too many requests per second
      //   [ChainId.polygon]: {
      //     hardforkHistory: {
      //       cancun: 0,
      //     },
      //   },
      //   [ChainId.mumbai]: {
      //     hardforkHistory: {
      //       cancun: 33_130_000,
      //     },
      //   },
        [ChainId.sepolia]: {
          hardforkHistory: {
            cancun: 3_100_000,
          },
        },
      //   [ChainId.arbitrum]: {
      //     hardforkHistory: {
      //       cancun: 70_000_000,
      //     },
      //   },
      //   [ChainId.arbitrumGoerli]: {
      //     hardforkHistory: {
      //       cancun: 11_500_000,
      //     },
      //   },
      },
    },
  },
}

module.exports = config
