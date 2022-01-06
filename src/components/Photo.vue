<template>
    <div>
        <div class="photo">
            <a class="a focus:outline-none ">
                <img class="img w-48 h-48 rounded-full inline-block max-w-full" :src="getImageUrl()" alt="photo"/>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: "Photo",
    methods: {
        getImageUrl() {
            return require('../assets/img/photo.jpg');
        },
    },
}
</script>