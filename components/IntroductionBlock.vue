<script setup>
import IconClock from "../assets/images/clock.svg";
import IconEye from "../assets/images/eye.svg";

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
div.introduction(v-if="articleElement.type === 'article_intro_block'")
    div.introduction__picture
      img(v-if="articleElement.data.image" :src="articleElement.data.image" alt="Article image")
    div.introduction__info
      div.introduction__title
        h1 {{ articleElement.data.title }}
        div.introduction__statistics
          p
            img(:src="IconClock")
            span {{articleElement.data.reading_time }} мин время чтения 
          p
            img(:src="IconEye")
            span {{articleElement.data.views_count }} прочитали статью         
      p.introduction__short-description {{articleElement.data.short_description}}
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.introduction {
  display: flex;
  gap: 30px;

  &__picture {
    max-width: 541px;
    max-height: 580px;
    border-radius: 2px 220px 2px 2px;
    overflow: hidden;

    img {
      object-fit: cover;
    }
  }

  &__info {
    max-width: 769px;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  &__title {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  &__statistics {
    p {
      display: flex;
      align-items: center;
      gap: 8px;

      span {
        color: $grey-color;
        font-size: 14px;
        font-weight: 400;
        line-height: 142.857%;
      }
    }
  }

  &__short-description {
    color: $black-color;
    font-weight: 400;
    line-height: 144.444%;
  }
}

@media screen and (max-width: 768px) {
  .introduction__picture {
    display: none;
  }
}
</style>
