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
.subscribe.container(v-if="articleElement.type === 'subscribe_form_block'") 
    p Подпишись на рассылку
    form
      input(type="email" placeholder="Email")
      button Подписаться
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";
</style>
