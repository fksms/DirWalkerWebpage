<script setup>

// 親から渡されたコンポーネントの参照を受け取る
const props = defineProps({
    iconPath: String
})

</script>

<template>
    <!-- xsの時に表示 -->
    <v-container fluid class="flex-row align-center d-flex d-sm-none">
        <a href="https://fksms.github.io/DirWalker">
            <v-row class="align-center ml-3" href="">
                <img :src="iconPath" style="height: 40px;" alt="DirWalker"></img>
                <h3 class="mx-3 mt-1">DirWalker</h3>
            </v-row>
        </a>

        <v-spacer></v-spacer>

        <a href="https://github.com/fksms/DirWalker">
            <img src="../assets/Logo_GitHub.svg" style="height: 35px;" class="mr-3"></img>
        </a>
    </v-container>

    <!-- sm以上の時に表示 -->
    <v-container fluid class="flex-row align-center d-none d-sm-flex">
        <a href="https://fksms.github.io/DirWalker">
            <v-row class="align-center ml-15" href="">
                <img :src="iconPath" style="height: 40px;" alt="DirWalker"></img>
                <h3 class="mx-3 mt-1">DirWalker</h3>
            </v-row>
        </a>

        <v-spacer></v-spacer>

        <a href="https://github.com/fksms/DirWalker">
            <img src="../assets/Logo_GitHub.svg" style="height: 35px;" class="mr-15" alt="Github"></img>
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