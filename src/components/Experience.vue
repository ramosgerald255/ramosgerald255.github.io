<template>
  <section id="experience" class="exp bg-gray-600 h-auto pb-10 overflow-hidden">
    <!-- Animate fade down goes here -->
    <div
      class="square xyz-in text-center"
      xyz="fade duration-6 delay-2 up-100%"
    >
      <Title
        class="title text-white"
        :title="'Experience'"
        :description="'Professionals and Academic'"
      />
    </div>
    <div
      class="square xyz-in"
      xyz="fade duration-6 delay-2 down-100%"
    >
      <div class="container mx-auto">
        <div class="flex flex-col lg:flex-row mx-2">
          <ExperienceColumn
            :posts="career.academic"
            title="Education"
            class="a text-center w-full  lg:w-1/2 lg:text-right lg:mx-4"
          />
          <hr class="border-white border-solid border-1 my-3 w-auto mx-2  lg:hidden" />
          <div class="separator w-0.5 bg-white" />
          <ExperienceColumn
            :posts="career.professional"
            title="Professional"
            class=" text-center w-full lg:w-1/2 lg:text-left lg:mx-4"
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