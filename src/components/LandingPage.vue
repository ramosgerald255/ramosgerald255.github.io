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
      "
    >
      <div class="wrapper-name w-96">
        <div class="square xyz-in" xyz="fade duration-15 delay-2 right-100%">
          <h1 class="px-2 py-6 text-4xl uppercase text-white">Gerald Ramos</h1>
        </div>

        <hr class="border-white border-solid border-1" />
        <div class="square xyz-in" xyz="fade duration-15 delay-1 down-100%">
          <p class="px-2 py-4 text-2xl text-center text-white">
            Applications Programmer
          </p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
// import "@animxyz/core";

export default {
  name: "LandingPage",
  props: ["user"],
  mounted() {
    // window.VANTA.HALO("#header");
    // window.VANTA.HALO({
    //   el: "#header",
    //   mouseControls: true,
    //   touchControls: true,
    //   gyroControls: false,
    //   minHeight: 200.0,
    //   minWidth: 200.0,
    //   amplitudeFactor: 1.7,
    //   size: 2.7,
    // });
    window.VANTA.FOG({
      el: "#header",
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
  },
};
</script>