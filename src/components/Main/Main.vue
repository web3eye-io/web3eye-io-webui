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
      @keyup.enter='handleEnter'
      placeholder="input text here"
    >
      <template v-slot:append>
        <InputOption v-model:option='curOption' />
      </template>
    </q-input>
    <q-file
      v-if='!isText'
      display-value=''
      class='input-container'
      v-model="file"
      rounded
      outlined
      name='upload'
      @update:model-value='onUpdate'
      placeholder="drag a image here"
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
import { api } from 'src/boot/axios';

const curOption = ref('File')
const isText = computed(() => curOption.value === 'Text')

const search = ref('')
const file = ref({} as File)

const router = useRouter()

const nft = useNFTMetaStore()

const handleEnter = () => {
  console.log('enter......')
}

const onUpdate  = () => {
  const reader = new FileReader()
  reader.onload = function () {
    console.log(reader.result)
    api.post('/api/nft-meta/search/file', {
      'topN': 10,
      'file': reader.result
    }, {
      headers: {'Content-Type': 'multipart/form-data'}}
    )
    .then((response) => {
      //TOD
      console.log('response: ', response.data)
    })
    .catch((error)=> {
      // TODO
    })
  }
  reader.readAsBinaryString(file.value)
}

const onUploaded = (info: {
    /**
     * Uploaded file
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    file: readonly any[];
    /**
     * XMLHttpRequest that has been used to upload this batch of file
     */
    xhr: XMLHttpRequest;
  }) => {
  const reader = new FileReader()
  reader.readAsDataURL(info.file[0] as Blob)
  reader.onload = function() { 
    // console.log('result: ', this.result) // binary
    nft.NTFMetas.Current = window.URL.createObjectURL(info.file[0] as Blob)
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
