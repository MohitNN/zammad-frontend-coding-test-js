<template>
    <div class="w-full py-4 px-6 hover:shadow bg-white rounded-md hover:border-[#c9ac6a] border-2 transition-all duration-300 border-white">
        <div class="flex justify-between items-center">
            <div class="text-[#c9ac6a] font-bold text-base">
                <span class="mr-1">छंद</span>{{ convertToHindiDigits(props?.verseData?.verse_number) }}
            </div>    
            <div class="w-10/12 text-left">
                {{ props?.verseData?.text.replace(/।।\d+(\.\d+)?।।/g, '\n') }}|
            </div>  
        </div>
    </div>
</template>
<script setup>

const props = defineProps(['verseData'])

function convertToHindiDigits(number) {
    const englishDigits = "0123456789";
    const hindiDigits = "०१२३४५६७८९";
    
    const translationDict = str => str.split('').map(char => hindiDigits[englishDigits.indexOf(char)]).join('');
    return translationDict(String(number));
}
</script>