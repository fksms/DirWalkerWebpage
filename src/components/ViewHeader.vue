<script setup>

// 親から渡されたコンポーネントの参照を受け取る
const props = defineProps({
    iconPath: String
})

</script>

<template>
    <v-container fluid class="d-flex flex-row align-center">
        <a href="https://fksms.github.io/DirWalker">
            <v-row class="align-center ml-15" href="">
                <img :src="iconPath" style="height: 40px;"></img>
                <h3 class="mx-3 mt-1">DirWalker</h3>
            </v-row>
        </a>

        <v-spacer></v-spacer>

        <a href="https://github.com/fksms/DirWalker">
            <img src="../assets/Logo_GitHub.svg" style="height: 35px;" class="mr-15"></img>
        </a>

    </v-container>
</template>

<style>
a,
a:hover,
a:visited {
    color: inherit;
    text-decoration: none;
}
</style>