<template>
  <LandingPage id="landingPage" :isActive="$data.landingOnscreen" />
  <Description id="description" :isActive="$data.aboutOnscreen" />
  <Experience id="career" :career="data.career" :isActive="$data.expOnscreen" />
  <Skills id="skills" :skills="data.skills" :isActive="$data.skillsOnscreen" />
  <Footer />
</template>


<script>
import "@/assets/css/tailwind.css";
import LandingPage from "./components/LandingPage.vue";
import Description from "./components/Description.vue";
import Experience from "./components/Experience.vue";
import Skills from "./components/Skills.vue";
import Footer from "./components/Footer.vue";
import json from "./data/data-resource.json";

export default {
  name: "App",
  components: {
    LandingPage,
    Description,
    Experience,
    Skills,
    Footer,
  },
  data() {
    return {
      data: json,
      landingOnscreen: null,
      aboutOnscreen: null,
      expOnscreen: null,
      skillsOnscreen: null,
    };
  },
  mounted() {
    this.landingObserver = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.landingOnscreen = true;
        this.aboutOnscreen = false;
      } else {
        this.landingOnscreen = false;
        this.aboutOnscreen = true;
      }
    }).observe(document.querySelector("#landingPage"));

    this.aboutObserver = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.aboutOnscreen = true;
      } else {
        this.aboutOnscreen = false;
      }
    }).observe(document.querySelector("#description"));

    this.expObserver = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.expOnscreen = true;
      } else {
        this.expOnscreen = false;
      }
    }).observe(document.querySelector("#career"));

    this.skillsObserver = new IntersectionObserver(([entry]) => {
      entry.intersectionRatio.valueOf(0)
      if (entry && entry.isIntersecting) {
        this.skillsOnscreen = true;
      } else {
        this.skillsOnscreen = false;
      }
    }).observe(document.querySelector("#skills"));
  },
};
</script>


