<template>
    <!-- Header -->
    <header id="header" class="bg-gray-700">
        <nav class="container mx-auto flex justify-start items-center py-5 px-4">
            <!-- App Name -->
            <router-link :to="{ name: 'home' }" exact-active-class="no-active"
                class="text-white font-bold uppercase text-2xl mr-4">
                Music
            </router-link>

            <div class="flex flex-grow items-center">
                <!-- Primary Navigation -->
                <ul class="flex flex-row mt-1">
                    <!-- Navigation Links -->
                    <li>
                        <router-link class="px-2 text-white" to="/about">
                            About
                        </router-link>
                    </li>
                    <li v-if="!userLoggedIn">
                        <a class="px-2 text-white" href="#" @click.prevent="toggleAuthModal">Login / Register</a>
                    </li>
                    <template v-else>
                        <li>
                            <router-link class="px-2 text-white" to="/manage">
                                Manage
                            </router-link>
                        </li>
                        <li>
                            <a @click.prevent="signout" class="px-2 text-white" href="#">Logout</a>
                        </li>
                    </template>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
    name: 'Header',
    computed: {
        ...mapState(['userLoggedIn']),
    },
    methods: {
        ...mapMutations(['toggleAuthModal']),
        // ...mapActions(['signout']),

        // Does the same thing with above mapActions 
        signout() {
            this.$store.dispatch('signout', {
                router: this.$router,
                route: this.$route
            });
            console.log(this.$route);
            console.log("Logged Out", this.$route.meta.requiresAuth);
            if (this.$route.meta.requiresAuth) {
                this.$router.push({ name: 'home' })
            }
        }
        // toggleAuthModal() {
        //     this.$store.commit('toggleAuthModal'); // commit the mutation to toggle the authModalShow state
        //     console.log(this.$store.state.authModalShow);
        // }
    }
}
</script>