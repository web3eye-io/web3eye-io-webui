import { defineStore } from 'pinia'
import { Account } from './types'

export const useWeb3jsStore = defineStore('local-setting', {
  state: () => ({
    Account: {} as Account
  }),
  getters: {
    getAccount () {
      return () =>  this.Account
    },
    setAccount () {
      return (account: Account) => this.Account = { ...account }
    }
  },
  actions: {
    // TODO
  }
})
