<template>
  <div class="exp bg-gray-600 h-20 lg:h-auto py-auto pt-2">
    <div class="flex flex-row">
      <h1 class=" w-1/2 text-left pl-5 lg:py-0 py-4  text-gray-100 font-semibold text-sm">©2022 Gerald Ramos | Applications Programmer</h1>
      <SocialBar class="soc py-4 lg:py-0 w-1/2 text-right pr-5 py-auto"/>
    </div>
  </div>
</template>
<script>
import SocialBar from "./SocialBar.vue";
export default {
  name: "Footer",
  components: {
    SocialBar,
  },
  setup() {},
};
</script>