import { ChainId } from '@sushiswap/chain'

export const GRAPH_HOST = 'api.thegraph.com/subgraphs/name'
export const PENDING_GRAPH_HOST = 'api.thegraph.com/subgraphs/id'

export const KAVA_HOST = 'pvt.graph.kava.io/subgraphs/name'
export const PENDING_KAVA_HOST = 'pvt.graph.kava.io/subgraphs/id'

export const METIS_HOST = 'andromeda.thegraph.metis.io/subgraphs/name'
export const PENDING_METIS_HOST = ''

export const CHAIN_NAME: Record<number | string, string> = {
  [ChainId.ARBITRUM]: 'Arbitrum',
  [ChainId.AVALANCHE]: 'Avalanche',
  [ChainId.BSC]: 'Bsc',
  [ChainId.ETHEREUM]: 'Ethereum',
  [ChainId.FANTOM]: 'Fantom',
  [ChainId.GNOSIS]: 'Gnosis',
  [ChainId.GÖRLI]: 'Görli',
  [ChainId.HARMONY]: 'Harmony',
  [ChainId.MOONBEAM]: 'Moonbeam',
  [ChainId.MOONRIVER]: 'Moonriver',
  [ChainId.OPTIMISM]: 'Optimism',
  [ChainId.POLYGON]: 'Polygon',
  [ChainId.TELOS]: 'Telos',
  [ChainId.CELO]: 'Celo',
  [ChainId.FUSE]: 'Fuse',
  [ChainId.OKEX]: 'OKEx',
  [ChainId.HECO]: 'HECO',
  [ChainId.PALM]: 'Palm',
  [ChainId.KAVA]: 'Kava',
  [ChainId.METIS]: 'Metis',
}

export const SUBGRAPH_HOST: Record<number | string, string> = {
  [ChainId.ARBITRUM]: GRAPH_HOST,
  [ChainId.AVALANCHE]: GRAPH_HOST,
  [ChainId.BSC]: GRAPH_HOST,
  [ChainId.ETHEREUM]: GRAPH_HOST,
  [ChainId.FANTOM]: GRAPH_HOST,
  [ChainId.GNOSIS]: GRAPH_HOST,
  [ChainId.GÖRLI]: GRAPH_HOST,
  [ChainId.HARMONY]: GRAPH_HOST,
  [ChainId.MOONBEAM]: GRAPH_HOST,
  [ChainId.MOONRIVER]: GRAPH_HOST,
  [ChainId.OPTIMISM]: GRAPH_HOST,
  [ChainId.POLYGON]: GRAPH_HOST,
  [ChainId.METIS]: METIS_HOST,
  [ChainId.KAVA]: KAVA_HOST,
  [ChainId.HARMONY]: GRAPH_HOST,
  [ChainId.FUSE]: GRAPH_HOST,
  [ChainId.CELO]: GRAPH_HOST,
}

export const BENTOBOX_SUBGRAPH_NAME: Record<number | string, string> = {
  [ChainId.ARBITRUM]: 'matthewlilley/bentobox-arbitrum',
  [ChainId.AVALANCHE]: 'matthewlilley/bentobox-avalanche',
  [ChainId.BSC]: 'matthewlilley/bentobox-bsc',
  [ChainId.ETHEREUM]: 'matthewlilley/bentobox-ethereum',
  [ChainId.FANTOM]: 'matthewlilley/bentobox-fantom',
  [ChainId.GNOSIS]: 'matthewlilley/bentobox-gnosis',
  [ChainId.GÖRLI]: 'matthewlilley/bentobox-goreli',
  [ChainId.HARMONY]: 'matthewlilley/bentobox-harmony',
  [ChainId.MOONBEAM]: 'matthewlilley/bentobox-moonbeam',
  [ChainId.MOONRIVER]: 'matthewlilley/bentobox-moonriver',
  [ChainId.OPTIMISM]: 'matthewlilley/bentobox-optimism',
  [ChainId.POLYGON]: 'matthewlilley/bentobox-polygon',
}

export const BLOCKS_SUBGRAPH_NAME: Record<number | string, string> = {
  [ChainId.ETHEREUM]: 'blocklytics/ethereum-blocks',
  [ChainId.GNOSIS]: 'matthewlilley/xdai-blocks',
  [ChainId.POLYGON]: 'matthewlilley/polygon-blocks',
  [ChainId.FANTOM]: 'matthewlilley/fantom-blocks',
  [ChainId.BSC]: 'matthewlilley/bsc-blocks',
  [ChainId.HARMONY]: 'sushiswap/harmony-blocks',
  [ChainId.AVALANCHE]: 'matthewlilley/avalanche-blocks',
  [ChainId.CELO]: 'ubeswap/celo-blocks',
  [ChainId.ARBITRUM]: 'sushiswap/arbitrum-blocks',
  [ChainId.OKEX]: 'okexchain-blocks/oec',
  [ChainId.HECO]: 'hecoblocks/heco',
  [ChainId.MOONRIVER]: 'sushiswap/moonriver-blocks',
  [ChainId.FUSE]: 'sushiswap/fuse-blocks',
  [ChainId.KOVAN]: 'blocklytics/kovan-blocks',
  [ChainId.MOONBEAM]: 'sushiswap/moonbeam-blocks',
  [ChainId.OPTIMISM]: 'kybernetwork/optimism-blocks',
  [ChainId.KAVA]: 'sushiswap/blocks-kava',
  [ChainId.METIS]: 'sushiswap/blocks-metis',
}

export const EXCHANGE_SUBGRAPH_NAME: Record<number | string, string> = {
  [ChainId.AVALANCHE]: 'sushiswap/exchange-avalanche',
  [ChainId.ARBITRUM]: 'sushiswap/exchange-arbitrum-backup',
  [ChainId.BSC]: 'sushiswap/bsc-exchange',
  [ChainId.CELO]: 'sushiswap/exchange-celo',
  [ChainId.ETHEREUM]: 'sushiswap/exchange-ethereum',
  [ChainId.FANTOM]: 'sushiswap/exchange-fantom',
  [ChainId.FUSE]: 'sushiswap/exchange-fuse',
  [ChainId.GNOSIS]: 'sushiswap/exchange-gnosis',
  [ChainId.MOONBEAM]: 'sushiswap/exchange-moonbeam',
  [ChainId.MOONRIVER]: 'sushiswap/exchange-moonriver',
  [ChainId.POLYGON]: 'sushiswap/matic-exchange',
  [ChainId.HARMONY]: 'sushiswap/exchange-harmony',
}

export const TRIDENT_SUBGRAPH_NAME: Record<number | string, string> = {
  [ChainId.POLYGON]: 'sushi-labs/trident-polygon',
  [ChainId.KOVAN]: 'sushi-labs/trident-kovan',
  [ChainId.OPTIMISM]: 'sushi-labs/trident-optimism',
  [ChainId.KAVA]: 'sushiswap/trident-kava',
  [ChainId.METIS]: 'sushiswap/trident-metis',
}

export const DEFAULT_CHAIN_ID = ChainId.ETHEREUM
export const DEFAULT_CHAIN_NAME = CHAIN_NAME[DEFAULT_CHAIN_ID]
