import { defineStore } from 'pinia'
import { NFTMeta } from './types'

export const useNFTMetaStore = defineStore('local-nft', {
  state: () => ({
    NTFMetas: {
      NTFMetas: [] as Array<NFTMeta>
    }
  }),
  getters: {
    setNftMeta () {
      return (rows: Array<NFTMeta>) => {
        this.NTFMetas.NTFMetas = rows
      }
    }
  },
  actions: {}
})
