<template>
    <section class="mt-6">
        <div class="flex justify-around">
            <div class="">
                <app-upload ref="upload" :addSong="addSong" />
            </div>
            <div class="">
                <div class="bg-white rounded border border-gray-200 relative flex flex-col">
                    <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
                        <span class="card-title">My Songs</span>
                        <i class="fa fa-compact-disc float-right text-green-400 text-2xl"></i>
                    </div>
                    <div class="p-6">
                        <!-- Composition Items -->
                        <composition-item v-for="(song, i) in songs" :key="song.docID" :song="song" :index="i"
                            :updateUnsavedFlag="updateUnsavedFlag" :updateSong="updateSong" :removeSong="removeSong" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import AppUpload from '@/components/Upload.vue';
import CompositionItem from '@/components/CompositionItem.vue';
import { songsCollection, auth } from '@/includes/firebase';
export default {
    name: 'manage',
    components: {
        AppUpload,
        CompositionItem
    },
    data() {
        return {
            songs: [],
            unsavedFlag: false
        }
    },
    async created() {
        // Retrieving songs with its user from firebase
        const snapshot = await songsCollection.where('uid', '==', auth.currentUser.uid)
            .get();
        snapshot.forEach(this.addSong);
    },
    methods: {
        // View changes on the song immediately after updating
        updateSong(i, values) {
            this.songs[i].modified_name = values.modified_name;
            this.songs[i].genre = values.genre;
        },
        // View changes on the song immediately after deleting
        removeSong(i) {
            this.songs.splice(i, 1);
        },
        addSong(document) {
            const song = {
                ...document.data(),
                docID: document.id
            }
            this.songs.push(song);
        },
        updateUnsavedFlag(value) {
            this.unsavedFlag = value
        }
    },
    beforeRouteLeave(to, from, next) {
        if (!this.unsavedFlag) {
            next();
        } else {
            const leave = confirm('You have unsaved changes. Are you you want to leave?');
            next(leave);
        }
    }

    // beforeRouteLeave(to, from, next) {
    //     this.$refs.upload.cancelUploads();
    //     next();
    // }
    // beforeRouteEnter(to, from, next) {
    //     console.log('beforeRouteEnter Guard');
    //     if (store.state.userLoggedIn) {
    //         next()
    //     } else {
    //         next({ name: 'home' })
    //     }
    // }
}
</script>