<template>
  <div>
    {{ account }}
  </div>
  <q-btn color="white" text-color="black" label="转账" @click='onClick' />
</template>
<script setup lang='ts'>
import { useWeb3jsStore } from 'src/localstore';
import { computed } from 'vue';

const web3js = useWeb3jsStore()
const account = computed(() => web3js.getAccount())
const web3 = computed(() => web3js.getWeb3())

const onClick =  () => {
  web3.value.eth.sendTransaction({
    from: account.value.Address,
    to: '0xD176e299fdc1E21652F0b1bDC085C97b548F5fF1',
    value: '0x9184e72a'

  })
  .then((result) => {
    console.log('result: ', result)
  })
  .catch((error) => {
    console.log('error: ', error)
  })
}
</script>