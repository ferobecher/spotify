<script setup>
import { onMounted, ref, toRefs } from 'vue';
import Heart from 'vue-material-design-icons/Heart.vue';
import Pause from 'vue-material-design-icons/Pause.vue';
import Play from 'vue-material-design-icons/Play.vue';

import { storeToRefs } from 'pinia';
import { useSongStore } from '../stores/song.js';
const useSong = useSongStore()
const {isPlaying, currentSong } = storeToRefs(useSong)

let isHover = ref(false)
let isSongTime = ref(null)

const props = defineProps({
    song: Object,
    album: Object,
    index: Number,
})

const { song, album, index } = toRefs(props)

onMounted(() => {
    const audio = new Audio(song.value.path);
    audio.addEventListener('loadedmetadata', function() {
        const duration = audio.duration;
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        isSongTime.value = minutes+':'+seconds.toString().padStart(2, '0')
    })
})
</script>

<template>
    <li
        class="flex items-center justify-between rounded-md hover:bg-[#2A2929]"
        @mouseenter="isHover=true"
        @mouseleave="isHover=false"
    >
        <div class="flex items-center w-full py-1.5">
            <div v-if="isHover" class="w-[40px] ml-[14px] mr-[6px] cursor-pointer"> 
                <Play 
                    v-if="!isPlaying" 
                    fillColor="#FFFFFF" 
                    :size="25"
                    @click="useSong.playOrPauseThisSong(album, song)"
                />
                <Play 
                    v-else-if="isPlaying && currentSong.name != song.name" 
                    fillColor="#FFFFFF" 
                    :size="25"
                    @click="useSong.loadSong(album, song)"
                />
                <Pause v-else fillColor="#FFFFFF" :size="25" @click="useSong.playOrPauseSong()"/>
            </div>
            <div v-else class="text-white font-semibold w-[40px] ml-5" >
                <span :class="{'text-green-500': currentSong && currentSong.name === song.name}">
                    {{ index }}
                </span>
            </div>
            <div> 
                <div 
                    class="text-gray-200 font-semibold"
                    :class="{'text-green-500': currentSong && currentSong.name === song.name}"
                > 
                    {{ song.name }}
                </div>
                <div class="text-sm font-semibold text-gray-400">{{ album.name }}</div>
            </div>
        </div>
        <div class="flex items-center "> 
            <button type="button" v-if="isHover">
                <Heart fillColor="#1BD760" :size="22"/>
            </button>
            <div
                v-if="isSongTime"
                class="text-xs mx-5 text-gray-400"
            > 
                {{ isSongTime }}
            </div>
        </div>
    </li>
</template>