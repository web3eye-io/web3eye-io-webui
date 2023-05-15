<template>
  <div view='lHh Lpr lFf'>
    <div class='row logo'>
      <q-space />
      <q-img :src='logo' style='width: 400px' fit='contain' />
      <q-space />
    </div>
    <q-input
      v-if='isText'
      class='input-container'
      rounded
      outlined
      v-model="search"
      placeholder="input text here" 
    >
      <template v-slot:append>
        <InputOption v-model:option='curOption' />
      </template>
    </q-input>
    <q-file
      v-if='!isText'
      class='input-container'
      v-model="files"
      rounded
      outlined
      label="drag a image here"
      multiple
    >
      <template v-slot:append>
        <InputOption v-model:option='curOption' />
      </template>
    </q-file>
    <div class='occupier' />
  </div>
</template>

<script setup lang='ts'>
import { useNFTMetaStore } from 'src/localstore/nft';
import { UploadResponse } from 'src/localstore/nft/types';
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router';
import InputOption from 'src/components/Main/InputOption.vue'
import logo from '../../assets/logo/logo.png'

const curOption = ref('File')
const isText = computed(() => curOption.value === 'Text')

const search = ref('')
const files = ref(null)




const router = useRouter()

const nft = useNFTMetaStore()

const onUploaded = (info: {
    /**
     * Uploaded files
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    files: readonly any[];
    /**
     * XMLHttpRequest that has been used to upload this batch of files
     */
    xhr: XMLHttpRequest;
  }) => {
  const reader = new FileReader()
  reader.readAsDataURL(info.files[0] as Blob)
  reader.onload = function() { 
    // console.log('result: ', this.result) // binary
    nft.NTFMetas.Current = window.URL.createObjectURL(info.files[0] as Blob)
	}
  const response = JSON.parse(info.xhr.response as string) as UploadResponse
  nft.setNftMeta(response.data)
  void router.push({
    path: '/result'
  })
}

const factoryFn = () => {
  return new Promise((resolve) => {
    resolve({
      url: '/api/nft-meta/search/file',
      method: 'POST'
    })
  })
}

const onFailed = () => {
  console.log('onFailed...')
}
</script>

<style scoped lang='sass'>
.logo
  margin: 10px 0 20px 0

.input-container
  width: 650px
.looking
  margin: 10px 0 10px 0
  color: $grey-8

.occupier
  height: 240px

.upload-box
  width: 100%
  height: 300px
  max-height: 300px
</style>
