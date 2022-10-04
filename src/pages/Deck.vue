<template>
  <q-page class='row items-center justify-evenly'>
    <div class='column'>
      <div class='row logo'>
        <q-img :src='logo' style='width: 640px;' />
      </div>
      <q-btn flat class='btn btn1' label='Download English Version' rounded />
      <q-btn flat class='btn btn2' label='下载中文版' rounded />
      <div class='occupier' />
    </div>
  </q-page>
</template>

<script setup lang='ts'>

import logo from '../assets/logo/logo.png'

</script>

<style scoped lang='sass'>
.logo
  margin-bottom: 48px

.btn
  margin-bottom: 16px
  height: 48px
  font-size: 20px

.occupier
  height: 200px

.btn1
  background-color: rgb(4, 143, 244)
  color: white

.btn2
  border: 1px solid rgb(231, 94, 1)
  color: $grey-8
  font-weight: bold
</style>
