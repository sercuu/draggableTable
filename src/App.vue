<template>
    <div id="app">
        <DefaultLayout>
            <router-view></router-view>
        </DefaultLayout>
    </div>
</template>

<script>
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export default {
    name: "App",
    components: {
        DefaultLayout,
    },
};
</script>
