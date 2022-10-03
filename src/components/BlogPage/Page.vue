<template>
  <div class='content'>
    <div>
      <div class='title row'>
        <q-item-label>White Paper</q-item-label>
        <q-space />
        <div class='column'>
          <q-space />
          <div class='row'>
            <div class='cursor-pointer lang'>
              {{ lang }}
              <q-menu>
                <q-list style="min-width: 100px">
                  <q-item clickable v-close-popup @click='lang = "EN"' dense>
                    <q-item-section>EN</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup @click='lang = "CN"' dense>
                    <q-item-section>CN</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </div>
            <q-btn icon='download' flat dense rounded />
          </div>
        </div>
      </div>
    </div>
    <div class='blog-body'>
      <slot name='EN' />
      <slot name='CN' />
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

const lang = ref('EN')

</script>

<style scoped lang='sass'>
.title
  font-size: 64px
  color: $grey-8
  border-bottom: 4px solid $grey-4
  padding-bottom: 20px
  width: calc(100% - 24px)

.content
  max-width: 1440px
  margin: 48px auto 0 auto

.lang
  font-size: 18px
  font-weight: bold
  color: blue
  width: 24px

.blog-body
  margin: 48px 0 48px 0
</style>
