<script setup>

import ViewHeader from "./components/ViewHeader.vue";
import ViewMain from "./components/ViewMain.vue";
import ViewFooter from "./components/ViewFooter.vue";

</script>

<template>
    <v-app>
        <v-app-bar class="bg-grey-lighten-4" height="80" elevation="0">
            <ViewHeader></ViewHeader>
        </v-app-bar>

        <v-main>
            <ViewMain></ViewMain>
        </v-main>

        <v-footer>
            <ViewFooter></ViewFooter>
        </v-footer>
    </v-app>
</template>

<style>
:root {
    /* フォントの指定 */
    font-family: Avenir, YuGothic, 'Yu Gothic', Futura, 'Century Gothic', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
}
</style>
