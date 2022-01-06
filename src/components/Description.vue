<template>
  <section id="about" class="h-1/3 mb-20">
    <div
      class="square xyz-in"
      xyz="fade duration-6 delay-2 flip-up-25% up-100%"
    >
      <Title :title="'About Me'" :description="'Hope to know you after'"/>
    </div>
    <div
      class="square xyz-in"
      xyz="fade duration-8 delay-2.5 flip-right-25% right-100%"
    >
      <div class="section-content">
        <div class="row">
          <Photo />
        </div>
        <div class="grid grid-cols-2 mt-3">
            <div class="presentation mr-auto align-middle mt-2 text-left mx-20">
                <Presentation/>
            </div>
            <div class="presentation mr-auto align-middle mt-2 text-left mx-20">
                <PersonalCard/>
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
import PersonalCard from './PersonalCard.vue'
import Presentation from './Presentation.vue'
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
};
</script>