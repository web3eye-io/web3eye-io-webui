<template>
  <div view='lHh Lpr lFf'>
    <div class='row logo'>
      <q-space />
      <q-img :src='logo' style='width: 400px' fit='contain' />
      <q-space />
    </div>
    <q-input
      v-if='isText'
      class='icontainer'
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
    <q-uploader
      v-if='!isText'
      class='upload-box'
      url="/api/entrance/search/file"
      color='white'
      :square='false'
      field-name='upload'
      :form-fields='[{name: "topN", value: "10"}]'
      auto-upload
      flat
      @failed='onFailed'
      @uploaded='onUploaded'
    >
      <template v-slot:header>
          <q-input
            class='icontainer'
            rounded
            outlined
            v-model="fileName"
          >
          <q-uploader-add-trigger />
          <template v-slot:append>
            <InputOption v-model:option='curOption' />
          </template>
        </q-input>
      </template>
      <template v-slot:list>
      </template>
    </q-uploader>
  </div>
    <div class='occupier' />
</template>

<script setup lang='ts'>
import { useNFTMetaStore } from 'src/localstore/nft';
import { UploadResponse } from 'src/localstore/nft/types';
import { computed, ref } from 'vue'
// import { useRouter } from 'vue-router';
import InputOption from 'src/components/Main/InputOption.vue'
import logo from '../../assets/logo/logo.png'
import { useRouter } from 'vue-router'
// import { api } from 'src/boot/axios';

const curOption = ref('File')
const isText = computed(() => curOption.value === 'Text')

const search = ref('')
const fileName = ref('')
// const file = ref({} as File)

// const router = useRouter()

// const nft = useNFTMetaStore()

// const uploading = ref(false)
// Contract search
const handleEnter = () => {
  console.log('enter......')
}

// // image search
// const onUpdate  = (file: File) => {
//   // const imageUrl = URL.createObjectURL(file);
//   // console.log('url: ', imageUrl)
//   // console.log('file: ', file)
//   uploading.value = true
//   const formData = new FormData()
//   formData.append('topN', '10')
//   formData.append('upload',  new Blob([file], {type: 'image/*'}))
//   api.post('/api/entrance/search/file', formData, { headers: {'Content-Type': 'multipart/form-data'},})
//   .then((response) => {
//     console.log('response: ', response.data)
//     nft.setNftMeta(response.data as Array<NFTMeta>)
//     void router.push({
//       path: '/result'
//     })
//   })
//   .catch((error)=> {
//     console.log('error: ', error)
//   })
//   .finally(() => {
//     uploading.value = false
//   })

//   const reader = new FileReader()
//   // reader.readAsArrayBuffer(file)
//   reader.onload = function () {
//     // console.log('result', reader.result)
    
//   }
// }

// const handleReject = () => {
//   console.log('handleReject')
//   uploading.value = false
// }

// const handleClear = () => {
//   console.log('clear')
//   file.value = {} as File
// }

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

const onFailed = () => {
  console.log('onFailed...')
}

</script>

<style scoped lang='sass'>
.logo
  margin: 10px 0 20px 0

.icontainer
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
  // ::v-deep .q-uploader__list 
  //   display: hidden
</style>
