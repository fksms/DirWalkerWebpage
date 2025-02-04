<script setup>

// 親から渡されたコンポーネントの参照を受け取る
const props = defineProps({
    iconPath: String
})

// Screenshot_1の場所
const screenshotPath_1 = import.meta.env.BASE_URL + "Screenshot_1.webp";

// Screenshot_2の場所
const screenshotPath_2 = import.meta.env.BASE_URL + "Screenshot_2.webp";

// Screenshot_3の場所
const screenshotPath_3 = import.meta.env.BASE_URL + "Screenshot_3.webp";

const msg_0_Header = "Visualize Disk Usage by Directory";
const msg_0_Main = "This tool visualizes the usage of each directory. Utilizing the Tauri framework, it supports cross-platform operation. Binaries are available for Linux, macOS, and Windows.";

const msg_1_Header = "Clear Visualization of Each File and Directory Size";
const msg_1_Main = "Once the directory scan is complete, a sunburst chart is displayed. Larger files and directories are shown with larger areas, making it easy to identify the files and directories occupying your disk space. The scanning process is written in Rust, allowing for fast, multithreaded scanning.";

const msg_2_Header = "Interaction Design";
const msg_2_Main = "After the scan, three elements are displayed: the sunburst chart, a list of files and directories under the directory, and a breadcrumb list. Left-clicking updates the sunburst chart and list each time. Right-clicking allows you to open the corresponding directory in the OS's standard file manager or copy the path of the directory or file to the clipboard.";

const msg_3_Header = "Customizable Scans";
const msg_3_Main = "By default, the tool scans the OS's root directory. However, you can specify the directory you want to scan for faster scanning. You can also set multiple directories that you do not want to scan.";

</script>

<template>
    <div class="bg-grey-lighten-5">

        <div class="py-5"></div>

        <!-- 0: xsの時に表示 -->
        <v-container class="fixed-width-container d-sm-none">
            <v-row class="align-center" justify="center">
                <v-col cols="4">
                    <v-img :src="iconPath"></v-img>
                </v-col>
                <v-col cols="10">
                    <div>
                        <h2 class="center">{{ msg_0_Header }}</h2>
                        <p>{{ msg_0_Main }}</p>
                    </div>
                </v-col>
            </v-row>
        </v-container>

        <!-- 0: sm、md、lgの時に表示 -->
        <v-container class="fixed-width-container d-none d-sm-block">
            <v-row class="align-center" justify="center">
                <v-col sm="2" md="2" lg="2">
                    <v-img :src="iconPath"></v-img>
                </v-col>
                <v-col sm="8" md="8" lg="8">
                    <!-- 左側にパディング -->
                    <div class="pl-10">
                        <h2>{{ msg_0_Header }}</h2>
                        <p>{{ msg_0_Main }}</p>
                    </div>
                </v-col>
            </v-row>
        </v-container>

        <div class="py-2"></div>

        <!-- ダウンロードボタン -->
        <v-card color="amber" class="rounded-lg mx-auto d-flex flex-column align-center"
            href="https://github.com/fksms/DirWalker/releases" width="200" target="_blank">
            <v-row class="pt-4">
                <v-col class="d-flex justify-center" cols="4">
                    <img src="../assets/Logo_Apple.svg" style="height: 35px;" />
                </v-col>
                <v-col class="d-flex justify-center" cols="4">
                    <img src="../assets/Logo_Windows.svg" style="height: 35px;" />
                </v-col>
                <v-col class="d-flex justify-center" cols="4">
                    <img src="../assets/Logo_Linux.svg" style="height: 35px;" />
                </v-col>
            </v-row>
            <v-card-title class="text-grey-darken-3">
                <h4>Download</h4>
            </v-card-title>
        </v-card>

        <div class="py-2"></div>

        <!-- アプリバッジ（Microsoft Store） -->
        <v-container class="d-flex flex-column align-center">
            <a href="https://apps.microsoft.com/detail/9nxz7km9m483">
                <img src="https://get.microsoft.com/images/en-us%20dark.svg" width="200" />
            </a>
        </v-container>

        <div class="py-4"></div>

        <!-- 1: xs、smの時に表示 -->
        <v-container class="fixed-width-container d-md-none">
            <v-row class="align-center" justify="center">
                <v-col cols="10" sm="10">
                    <div>
                        <h2 class="center">{{ msg_1_Header }}</h2>
                        <p>{{ msg_1_Main }}</p>
                    </div>
                </v-col>
                <v-col cols="12" sm="12">
                    <v-img :src="screenshotPath_2"></v-img>
                </v-col>
            </v-row>
        </v-container>

        <!-- 1: md、lgの時に表示 -->
        <v-container class="fixed-width-container d-none d-md-block">
            <v-row class="align-center" justify="center">
                <v-col md="5" lg="5">
                    <!-- 左側にパディング -->
                    <div class="pl-10">
                        <h2>{{ msg_1_Header }}</h2>
                        <p>{{ msg_1_Main }}</p>
                    </div>
                </v-col>
                <v-col md="7" lg="7">
                    <v-img :src="screenshotPath_2"></v-img>
                </v-col>
            </v-row>
        </v-container>

        <div class="py-5"></div>

        <!-- 2: xs、smの時に表示 -->
        <v-container class="fixed-width-container d-md-none">
            <v-row class="align-center" justify="center">
                <v-col cols="10" sm="10">
                    <div>
                        <h2 class="center">{{ msg_2_Header }}</h2>
                        <p>{{ msg_2_Main }}</p>
                    </div>
                </v-col>
                <v-col cols="12" sm="12">
                    <v-img :src="screenshotPath_3"></v-img>
                </v-col>
            </v-row>
        </v-container>

        <!-- 2: md、lgの時に表示 -->
        <v-container class="fixed-width-container d-none d-md-block">
            <v-row class="align-center" justify="center">
                <v-col md="7" lg="7">
                    <v-img :src="screenshotPath_3"></v-img>
                </v-col>
                <v-col md="5" lg="5">
                    <!-- 右側にパディング -->
                    <div class="pr-10">
                        <h2>{{ msg_2_Header }}</h2>
                        <p>{{ msg_2_Main }}</p>
                    </div>
                </v-col>
            </v-row>
        </v-container>

        <div class="py-5"></div>

        <!-- 3: xs、smの時に表示 -->
        <v-container class="fixed-width-container d-md-none">
            <v-row class="align-center" justify="center">
                <v-col cols="10" sm="10">
                    <div>
                        <h2 class="center">{{ msg_3_Header }}</h2>
                        <p>{{ msg_3_Main }}</p>
                    </div>
                </v-col>
                <v-col cols="12" sm="12">
                    <v-img :src="screenshotPath_1"></v-img>
                </v-col>
            </v-row>
        </v-container>

        <!-- 3: md、lgの時に表示 -->
        <v-container class="fixed-width-container d-none d-md-block">
            <v-row class="align-center" justify="center">
                <v-col md="5" lg="5">
                    <!-- 左側にパディング -->
                    <div class="pl-10">
                        <h2>{{ msg_3_Header }}</h2>
                        <p>{{ msg_3_Main }}</p>
                    </div>
                </v-col>
                <v-col md="7" lg="7">
                    <v-img :src="screenshotPath_1"></v-img>
                </v-col>
            </v-row>
        </v-container>

        <div class="py-5"></div>

    </div>
</template>

<style>
.fixed-width-container {
    /* lg（1280px以上、1920px未満）のサイズで設定する */
    max-width: 1400px;
}

h2 {
    margin-bottom: 20px;
}

h2.center {
    text-align: center;
}
</style>