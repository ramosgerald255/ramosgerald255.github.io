<template>
  <div class="skills h-auto mb-20">
    <div
      class="square xyz-in"
      xyz="fade duration-6 delay-2 flip-up-25% up-100%"
    >
      <Title
        class="title text-gray-800"
        :title="'Skills'"
        :description="'guess im good at'"
      />
    </div>

    <div
      class="flex flex-wrap items-center px-auto mx-auto justify-center"
      xyz="fade small stagger-0.5"
    >
      <div
        class="card p-1 mb-2 xyz-in"
        v-for="(skill, index) in skills"
        :key="index"
      >
        <div class="xyz-in">
          <img
            class="
              img
              h-28
              w-28
              m-8
              duration-500
              transform
              -translate-y-4
              hover:translate-y-0
              ease-in-out
            "
            :src="require(`../assets/img/logos/${skill.filename}`)"
            alt="image"
          />
          <h1 class="name text-gray-500 font-semibold text-xs text-center mt-0">
            {{ skill.name }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Title from "./Title.vue";
// import git from "../assets/img/logos/git.svg"
// const loc = '../assets/img/logos/'
import { ref, watch } from "vue";
export default {
  name: "Skills",
  setup() {
    const xyz = ref("");
    const animationIndex = ref(-1);
    watch(animationIndex, (newValue) => {
      if (newValue > -1)
        xyz.value = "duration-20 ease-in-out-back small iterate-infinite";
      console.log(newValue);
    });
    return {
      xyz,
      animationIndex,
    };
  },
  components: {
    Title,
  },
  props: ["skills"],
};
</script>