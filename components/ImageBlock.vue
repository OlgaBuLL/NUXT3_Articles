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
figure.image-block(v-if="articleElement.type === 'image_block'")
    img.image-block__image(v-if ="articleElement.data.src" :src="articleElement.data.src")
    figcaption.image-block__figcaption(v-if ="articleElement.data.caption" ) {{articleElement.data.caption}}
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.image-block {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 50px 0;

  &__image {
    width: 100%;
    border-radius: 2px 220px 2px 2px;
  }

  &__figcaption {
    align-self: flex-end;
    color: $grey-color;
    text-align: right;
    font-size: 14px;
    line-height: 142.857%;
  }
}
</style>
