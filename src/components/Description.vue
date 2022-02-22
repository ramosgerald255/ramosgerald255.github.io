<template>
  <section id="about" class="h-1/3 mb-20 overflow-hidden">
    <div
      class="square text-center"
      :class="{ 'xyz-in ': isActive, 'xyz-out': !isActive }"
      xyz="fade duration-6 delay-2 up-100%"
    >
      <Title :title="'About Me'" :description="'Hope to know you after'" />
    </div>
    <div
      class="square"
      :class="{ 'xyz-in': isActive, 'xyz-out': !isActive }"
      xyz="fade duration-8 delay-2.5 right-100%"
    >
      <div class="section-content">
        <div class="text-center mb-4">
          <Photo />
        </div>
        <div class="flex flex-col-reverse lg:flex-row">
          <div
            class="presentation mr-auto align-middle mt-1 text-left lg:w-1/2"
          >
            <Presentation />
          </div>
          <div
            class="
              presentation
              mr-auto
              align-middle
              my-2
              text-left
              mx-7
              lg:w-1/2
            "
          >
            <PersonalCard />
          </div>
        </div>
      </div>
      <!-- <h1>Something goes here</h1> -->
      <!-- Presentation Section -->
      <!-- Personal Card Section -->
    </div>
  </section>
</template>
<script>
import Title from "./Title.vue";
import PersonalCard from "./PersonalCard.vue";
import Presentation from "./Presentation.vue";
import Photo from "./Photo.vue";
// export {aboutStatus}
export default {
  name: "AboutMe",
  props: ['isActive',],
  components: {
    Title,
    PersonalCard,
    Presentation,
    Photo,
  },
  data() {
    return {
      aboutStatus: false,
    };
  },
  mounted() {
    // this.observer = new IntersectionObserver(([entry2]) => {
    //   if (entry2 && entry2.isIntersecting) {
    //     this.$data.aboutStatus = true;
    //     // entry2.isIntersecting.valueOf(true)
    //     console.log("About is intersecting", entry2.isIntersecting);
    //   } else {
    //     this.$data.aboutStatus = false;
    //     // entry2.isIntersecting.valueOf(false)
    //     console.log("About is not intersecting", entry2.isIntersecting);
    //     entry2.target.classList.remove("in-viewport");
    //   }
    // });

    // this.observer.observe(document.querySelector("#about"));
  },
};
</script>