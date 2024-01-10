<template>
    <Loader v-if="loder" />
    <div class="w-10/12">
        <div class="py-4 mt-4 text-center px-6">
            <div class="text-2xl w-full text-[#c9ac6a]  font-bold">
                अध्याय {{ convertToHindiDigits(chapters?.chapter_number) }}
            </div>
            <div class="my-12 font-black text-4xl">
                {{ chapters?.name }}
            </div>
            <div class="text-gray-700 leading-10 text-lg ">
                {{ chapters?.chapter_summary_hindi }}
            </div>
        </div>
        <div class="border px-5 flex justify-between border-gray-300 text-lg font-bold w-full border-x-0 py-4">
            <div>
                {{ convertToHindiDigits(verse?.length) }} छंद
            </div>
            <div>

            </div>
        </div>
        <div class="py-5">
            <div v-for="(item, index) in paginatedVerse" v-bind:key="index" class="my-3">
                <Verse v-bind:verseData="item" />
            </div>
        </div>
        <div class="example-six pb-8">
            <vue-awesome-paginate v-bind:total-items="verse?.length" v-model="currentPage" v-bind:items-per-page="5"
                v-bind:max-pages-shown="5">
                <template #prev-button>
                    <span>
                        <Left />
                    </span>
                </template>

                <template #next-button>
                    <span>
                        <Right />
                    </span>
                </template>
            </vue-awesome-paginate>
        </div>
    </div>
</template>
<script setup>
// eslint-disable-next-line import/no-extraneous-dependencies
import { toast } from 'vue3-toastify';
// eslint-disable-next-line import/no-extraneous-dependencies
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import Verse from './Verse.vue';
import Loader from "./Loader.vue"
import Left from "./icons/Left.vue"
import Right from "./icons/Right.vue"
import { apiGetChaptersData, apiGetChaptersVerseData } from '../../API/https'

const route = useRoute()
const currentPage = ref(1);
const verse = ref([])
const chapters = ref()
const loder = ref(false)
onMounted(async () => {
    loder.value = true
    // eslint-disable-next-line no-use-before-define
    toastLoad(route?.params?.id)
        await apiGetChaptersData(route?.params?.id).then((res) => {
            chapters.value = res
        })
        await apiGetChaptersVerseData(route?.params?.id).then((res) => {
            verse.value = res
        })
        loder.value = false
})
const paginatedVerse = computed(() => {
    const startIndex = (currentPage.value - 1) * 5;
    const endIndex = startIndex + 5;
    return verse.value?.slice(startIndex, endIndex);
});
function convertToHindiDigits(number) {
    const englishDigits = "0123456789";
    const hindiDigits = "०१२३४५६७८९";

    const translationDict = str => str.split('').map(char => hindiDigits[englishDigits.indexOf(char)]).join('');
    return translationDict(String(number));
}
const toastLoad = (val) =>{
    toast.success(`अध्याय ${val}`, {
        autoClose: 1000,
      });
}
</script>
