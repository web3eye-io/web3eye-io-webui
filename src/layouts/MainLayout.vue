<template>
  <q-layout view='lHh Lpr lFf'>
    <q-header elevated>
      <q-toolbar>
        <q-space />
        <a class='tools' href='#/whitepaper'>White Paper</a>
        <a class='tools' href='#/deck'>Deck</a>
        <a class='tools' href='#/blog'>Blog</a>
        <a class='tools' href='#/daily'>Daily</a>
        <a class='tools' href='#/schedule'>Schedule</a>
        <q-btn avatar :icon='"img:" + metamask' flat dense round size='18px'>
          <q-tooltip>
            Coming soon
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

import metamask from '../assets/icon/metamask.webp'

</script>

<style scoped lang='sass'>
.q-layout__section--marginal
  background-color: transparent
  color: $grey-9
  font-size: 16px

.logo
  width: 120px

.tools
  margin: 0 10px 0 10px
  text-decoration: none
  color: $grey-9

.footer
  color: $blue-14
  font-size: 14px
</style>
