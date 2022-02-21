<template>
  <section id="about" class="h-1/3 mb-20 overflow-hidden">
    <div class="square xyz-in text-center" xyz="fade duration-6 delay-2 up-100%">
      <Title :title="'About Me'" :description="'Hope to know you after'" />
    </div>
    <div class="square xyz-in" xyz="fade duration-8 delay-2.5 right-100%">
      <div class="section-content">
        <div class="text-center mb-4">
          <Photo />
        </div>
        <div class=" flex flex-col lg:flex-row">
          <div class="presentation mr-auto align-middle mt-1 text-left lg:w-1/2">
            <Presentation />
          </div>
          <div class="presentation mr-auto align-middle mt-1 text-left  mx-7 lg:w-1/2">
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
export default {
  name: "AboutMe",
  // props: ['user','content','links'],
  components: {
    Title,
    PersonalCard,
    Presentation,
    Photo,
  },
  mounted() {
    // window.VANTA.RINGS({
    //   el: "#about",
    //   mouseControls: true,
    //   touchControls: true,
    //   gyroControls: false,
    //   minHeight: 200.0,
    //   minWidth: 200.0,
    //   scale: 1.0,
    //   scaleMobile: 1.0,
    // });
  },
};
</script>