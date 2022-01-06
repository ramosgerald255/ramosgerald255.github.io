<template>
  <div>
    <h3 class="title uppercase text-lg font-semibold">Gerald Ramos</h3>
    <br>
    <div class="data mb-2.5 text-sm"><strong>E-mail:</strong> ramosgerald255@gmail.com</div>
    <div class="data mb-2.5 text-sm"><strong>Phone:</strong> +63 955 802 0250</div>
    <div class="data mb-2.5 text-sm"><strong>City:</strong> Tarlac, Philippines</div>
    <div class="data mb-2.5 text-sm"><strong>Languages:</strong> Tagalog, English</div>
    <SocialBar/>
  </div>
</template>
<script>
import SocialBar from './SocialBar.vue'

export default {
  name: "PersonalCard",
  components: {
      SocialBar,
  }
};
</script>