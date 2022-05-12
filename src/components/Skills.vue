<template>
  <div class="skills h-auto overflow-hidden text-center" id="skills">
    <div class="square " :class="{'xyz-in': isActive, 'xyz-out': !isActive}" xyz="fade duration-6 delay-2 up-100%">
      <Title
        class="title text-gray-100"
        :title="'Skills'"
        :description="'guess im good at'"
      />
    </div>

    <div
      class="flex flex-wrap items-center px-auto mx-auto justify-center"
      xyz="fade small stagger-0.5 delay-6 duration-5"
    >
      <div
        class="card p-1 mb-2 " :class="{'xyz-in': isActive, 'xyz-out': !isActive}"
        v-for="(skill, index) in skills"
        :key="index"
      >
        <div>
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
          <h1 class="name text-gray-100 font-semibold text-xs text-center mt-0">
            {{ skill.name }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Title from "./Title.vue";
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
  props: ["skills", "isActive"],
  mounted() {
    window.VANTA.CELLS({
      el: "#skills",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      color1: 0x8c4100,
      color2: 0x35f2f2,
      size: 1.6,
      speed: 2.4,
    });
  },
};
</script>