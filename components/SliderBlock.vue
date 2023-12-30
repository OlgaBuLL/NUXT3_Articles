<script setup>
defineProps({
  articleElement: {
    type: Object,
    required: true,
    default() {
      return {};
    },
  },
});
</script>

<template lang="pug">
template(v-if="articleElement.type === 'slider_block'")
    Slider(v-if="articleElement.data && Array.isArray(articleElement.data)" :slider="articleElement.data" :index="`slider${i}`")
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";
</style>
