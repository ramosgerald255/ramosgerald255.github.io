<template>
  <div
    class="
      about
      flex
      justify-center
      align-middle
      w-full
      h-full
      m-auto
      items-center
    "
  >
    <div class="wrapper-about w-96 my-6 pt-8">
      <div>
        <h2 class="about text-4xl uppercase font-light">{{ title }}</h2>
        <h1 class="description text-xs uppercase py-1">
          {{ description }}
        </h1>
        <div
          class="my-1  block w-1/3 border-t border-solid border-gray-400 mx-auto"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Title",
  props: [
      'title',
      'description'
  ]
};
</script>