<template>
  <q-layout view='lHh Lpr lFf'>
    <q-header elevated>
      <q-toolbar>
        <div class='search row' v-if='displaySearchBox'>
          <a href='#'>
            <q-img :src='logobottom' class='logo' fit='contain' />
          </a>
          <q-input
            v-model='search'
            rounded
            outlined
            disable
            dense
            class='search-box'
            placeholder='Coming soon'
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
        <q-space />
        <a class='tools' href='#/whitepaper'>White Paper</a>
        <a class='tools' href='#/deck'>Deck</a>
        <a class='tools' href='#/blog'>Blog</a>
        <a class='tools' href='#/daily'>Daily</a>
        <a class='tools' href='#/schedule'>Schedule</a>
        <q-btn avatar :icon='"img:" + metamask' flat dense round size='18px' @click='onMetaMaskClick'>
          <q-tooltip>
            {{ account }}
          </q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated>
      <q-toolbar>
        <div class='footer'>© 2022 - Cyber Tracer</div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup lang='ts'>
import { ref, computed } from 'vue'
import { useLocalSettingStore } from 'src/localstore'
import Web3 from 'web3'

import logobottom from '../assets/logo/logo-bottom.png'
import metamask from '../assets/icon/metamask.webp'

const setting = useLocalSettingStore()
const displaySearchBox = computed(() => setting.DisplayToolbarSearchBox)

const web3 = new Web3('ws://localhost:8545')
const search = ref('')

const account = ref('')

const onMetaMaskClick = () => {
  window.ethereum
    .request({
      method: 'eth_requestAccounts',
    })
    .then(async (result) => {
      account.value = (result as Array<string>)[0]
      await getBalance(account.value)
    })
    .catch((error) => {
      console.log('error: ', error)
    })
}

const getBalance = async(account: string) => {
  const balance = await web3.eth.getBalance(account)
  console.log('balance: ', balance)
}
</script>

<style scoped lang='sass'>
.q-layout__section--marginal
  background-color: white
  color: $grey-9
  font-size: 16px

.logo
  width: 120px
  margin-right: 10px
  line-height: 72px
  @media (max-width: 660px)
    display: none

.tools
  margin: 0 10px 0 10px
  text-decoration: none
  color: $grey-9
  @media (max-width: $breakpoint-sm-max)
    display: none

.footer
  color: $blue-14
  font-size: 14px

.search-box
  width: 450px
  max-width: 100%

.search
  height: 56px
  padding: 8px
</style>
