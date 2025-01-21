<script setup>

// 親から渡されたコンポーネントの参照を受け取る
const props = defineProps({
    iconPath: String
})

</script>

<template>
    <div style="text-align:center;" class="mx-auto">
        <a href="https://fksms.github.io/DirWalker">
            <v-row class="align-center ml-15" href="">
                <img :src="iconPath" style="height: 40px;"></img>
                <h3 class="mx-3 mt-1">DirWalker</h3>
            </v-row>
        </a>
        <p class="pt-7 pb-0">The MIT License</p>
        <p class="pt-0 pb-3">Copyright © 2025 Shogo Fukushima</p>
        <a href="https://github.com/fksms/DirWalker">
            <img src="../assets/Logo_GitHub.svg" style="height: 30px;"></img>
        </a>
    </div>
</template>

<style></style>