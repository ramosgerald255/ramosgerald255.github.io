<template>
    <div class="exp text-white">
        <h3 class="title text-xl pb-4 text-gray-100 font-semibold mx-7">{{ title }}</h3>
        <div class="resume-item" v-for="(post, index) in posts" :key="index">
            <div class="year font-semibold text-sm mb-1">
                {{ post.year }}
            </div>
            <div class="resume-description text-base pb-1">
                <strong class="" v-html="post.title"></strong>
            </div>
            <p class="content font-light text-sm leading-normal mt-0 mb-4 mx-7">
            {{ post.content }}
            </p>
        </div>
    </div>
</template>
<script>
export default {
  name: "ExperienceColumn",
  props: ["posts", "title"],
  setup() {},
};
</script>