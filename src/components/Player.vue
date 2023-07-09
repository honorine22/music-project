<template>
    <div class="fixed bottom-0 left-0 bg-white p-5 pb-4 text-left align-top w-full h-14">
        <div class="relative">
            <!-- Play/Pause Button -->
            <div class="float-left w-7 h-7 leading-3">
                <button @click.prevent="toggleAudio" type="button">
                    <i class="fa text-gray-500 text-xl" :class="{ 'fa-play': !playing, 'fa-pause': playing }"></i>
                </button>
            </div>
            <!-- Current Position -->
            <div class="float-left w-14 h-8 text-gray-400 mt-0 text-lg ml-5">
                <span class="player-currenttime pt-16">{{ seek }}</span>
            </div>
            <!-- Scrub -->
            <div class="float-left w-7 h-7 leading-3 ml-7 mt-2 player-scrub">
                <div class="absolute left-0 right-0 text-lg text-center mx-auto player-song-info"
                    v-if="currentSong.modified_name">
                    <span class="song-title">{{ currentSong.modified_name }}</span>
                    <span class="song-artist">
                        (Uploaded by {{ currentSong.display_name }})
                    </span>
                </div>
                <!-- Scrub Container  -->
                <span class="block w-full h-2 rounded m-1 mt-2 bg-gray-200 relative cursor-pointer"
                    @click.prevent="updateSeek">
                    <!-- Player Ball -->
                    <span class="absolute top-neg-8 text-gray-800 text-lg" :style="{ left: playerProgress }">
                        <i class="fas fa-circle"></i>
                    </span>
                    <!-- Player Progress Bar-->
                    <span class="block h-2 rounded bg-gradient-to-r from-green-500 to-green-400"
                        :style="{ width: playerProgress }"></span>
                </span>
            </div>
            <!-- Duration w-14 h-8-->
            <div class="float-left w-7 h-7 text-gray-400 text-lg ml-8">
                <!-- pt-16 -->
                <span class="player-duration">{{ duration }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
export default {
    name: 'Player',
    computed: {
        ...mapGetters(['playing']),
        ...mapState(['seek', 'duration', 'playerProgress', 'currentSong'])
    },
    methods: {
        ...mapActions(['toggleAudio', 'updateSeek'])
    }
}
</script>