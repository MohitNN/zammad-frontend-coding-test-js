<!-- eslint-disable vue/require-v-for-key -->
<template>
    <RouterLink v-bind:to="{name: 'ViewChapters', params: { id: props?.ChaptersData?.id }}">
    <div class="w-full hover:border-[#f3d080] border-2 border-white bg-white rounded-md hover:bg-gray-50 transition-all duration-300 hover:shadow">
       <div class="py-4 w-full text-left px-6">
            <div class="text-lg w-full text-[#c9ac6a]  font-bold">अध्याय {{ convertToHindiDigits(props?.ChaptersData?.chapter_number) }}</div>
            <div class="font-bold flex items-end text-xl">
                {{ props?.ChaptersData?.name }} 
                <div class="text-sm ml-2">
                    ({{ convertToHindiDigits(props?.ChaptersData?.verses_count) }} छंद)
                </div>
            </div>
            <div class="text-gray-400 text-base text-ellipsis line-clamp-4 mt-2">
                {{ props?.ChaptersData?.chapter_summary_hindi }}
            </div>
       </div> 
    </div>
</RouterLink>
</template>
<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps(['ChaptersData'])

function convertToHindiDigits(number) {
    const englishDigits = "0123456789";
    const hindiDigits = "०१२३४५६७८९";
    
    const translationDict = str => str.split('').map(char => hindiDigits[englishDigits.indexOf(char)]).join('');
    return translationDict(String(number));
}
</script>
