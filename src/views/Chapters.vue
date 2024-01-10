<!-- eslint-disable vue/require-v-for-key -->
<template>
  <Loader v-if="loder" />
  <div class="flex justify-center">
    <div class="w-10/12 mt-8">
      <div class="text-3xl text-[#c9ac6a] font-bold font-gita">भागवद गीता <span class="text-xl">(अध्याय)</span></div>
      <div class="flex items-center flex-wrap justify-start">
        <div v-for="(item, index) in chapters" v-bind:key="index" class="w-4/12 p-4">
          <Chapter v-if="item" v-bind:ChaptersData="item" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { apiGetchaptersDataList } from '../../API/https'
import Chapter from '../components/Chapter.vue'
import Loader  from '../components/Loader.vue'

const chapters = ref()
const loder = ref(false)
onMounted(() => {
  loder.value = true
  apiGetchaptersDataList().then((res) => {
    chapters.value = res
    loder.value = false 
  })
})
</script>

