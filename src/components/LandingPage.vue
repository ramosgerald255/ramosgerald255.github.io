<template>
  <header class="header w-full h-screen overflow-hidden" id="header">
    <div
      class="
        name
        flex
        justify-center
        align-middle
        w-full
        h-full
        m-auto
        items-center
        text-center
      "
    >
      <div class="wrapper-name w-96">
        <div
          class="square"
          :class="{ 'xyz-in': isActive, 'xyz-out': !isActive }"
          xyz="fade duration-15 delay-3 right-100%"
        >
          <h1 class="px-2 py-3 text-2xl lg:text-4xl uppercase text-white">
            Gerald Ramos
          </h1>
        </div>

        <!-- <hr class="border-white border-solid border-1 w-1/2 text-center" /> -->
        <div class="w-1/2 border-t-2 mx-auto lg:w-full" />
        <div
          class="square"
          :class="{ 'xyz-in': isActive, 'xyz-out': !isActive }"
          xyz="fade duration-15 delay-1.5 down-100%"
        >
          <p class="px-2 py-2 text-base lg:text-2xl text-center text-white">
            Applications Programmer
          </p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "LandingPage",
  props: ["user", "isActive"],
  data() {
    return {
      status: null,
    };
  },
  methods: {},
  mounted() {
    window.VANTA.FOG({
      el: "#landingPage",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      highlightColor: 0x1e00ff,
      midtoneColor: 0xff00b4,
      lowlightColor: 0xff1e,
      baseColor: 0x8c81d7,
      blurFactor: 0.63,
      speed: 1.7,
    });
    console.log(this.isActive)
  },
};
</script>