<template>
  <section id="experience" class="exp bg-gray-600 h-auto pb-20 overflow-hidden">
    <!-- Animate fade down goes here -->
    <div
      class="square xyz-in"
      xyz="fade duration-6 delay-2 flip-up-25% up-100%"
    >
      <Title
        class="title text-white"
        :title="'Experience'"
        :description="'Professionals and Academic'"
      />
    </div>
    <div
      class="square xyz-in"
      xyz="fade duration-6 delay-2 flip-down-25% down-100%"
    >
      <div class="container mx-auto px-6">
        <div class="flex space-x-6">
          <ExperienceColumn
            :posts="career.academic"
            title="Education"
            class="text-right w-1/2"
          />
          <div class="separator w-0.5 bg-white" />
          <ExperienceColumn
            :posts="career.professional"
            title="Professional"
            class="text-left w-1/2"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Title from "./Title.vue";
import ExperienceColumn from "./ExperienceColumn.vue";
export default {
  name: "Experience",
  setup() {},
  components: {
    Title,
    ExperienceColumn,
  },
  props: ["career"],
};
</script>