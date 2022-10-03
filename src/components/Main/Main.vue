<template>
  <div view='lHh Lpr lFf'>
    <q-img :src='logo' style='width: 600px' fit='contain' />
    <q-input
      v-model="search"
      debounce="500"
      rounded
      outlined
      disable
      placeholder='Coming soon'
    >
      <template v-slot:append>
        <q-icon name="search" />
      </template>
    </q-input>
    <div class='row looking'>
      <q-space />
      <q-btn label='Just looking' rounded flat>
        <q-tooltip>
          Coming soon
        </q-tooltip>
      </q-btn>
      <q-space />
    </div>
    <div class='occupier' />
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

import logo from '../../assets/logo/logo.png'

const search = ref('')

</script>

<style scoped lang='sass'>
.looking
  margin: 10px 0 10px 0
  color: $grey-8

.occupier
  height: 200px
</style>
