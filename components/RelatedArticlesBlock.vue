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
div.related-articles(v-if="articleElement.data.articles && Array.isArray(articleElement.data.articles)")
    h2.related-articles__title {{ articleElement.data.title }}
    div.related-articles__container
      div.related-articles__card(v-for="(oneArticle, index) in articleElement.data.articles" :key="index")
        img(:src="oneArticle.image")
        h3(v-if="oneArticle.title") {{ oneArticle.title }}
        NuxtLink(:to="oneArticle.link") Читать
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.related-articles {
  width: 100%;
  margin: 135px 0 100px;

  &__title {
    margin-bottom: 50px;
  }

  &__container {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }

  &__card {
    @include card;
  }
}
</style>
