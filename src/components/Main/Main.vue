<template>
  <div view='lHh Lpr lFf'>
    <div class='row logo'>
      <q-space />
      <q-img :src='logo' style='width: 400px' fit='contain' />
      <q-space />
    </div>
    <q-input
      v-model="search"
      rounded
      outlined
      disable
      style='width: 650px;'
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
.logo
  margin: 10px 0 20px 0

.looking
  margin: 10px 0 10px 0
  color: $grey-8

.occupier
  height: 240px
</style>
