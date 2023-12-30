<script setup>
import { onBeforeMount } from "vue";
import { useRootStore } from "../store/store";

const store = useRootStore();

onBeforeMount(async () => {
  await store.renderArticles();
});
</script>

<template lang="pug">
div.error(v-if="store.error")
    Error
div.loading(v-else-if="store.isLoading")
    Loading
div.cards-container(v-else)
    template(v-if="store.articles && store.articles.length")
        div.card(v-for="(article, index) in store.articles" :key="index")
            img(v-if="article.image" :src="article.image" alt="Article image")
            h3(v-if="article.title") {{ article.title }}
            NuxtLink(:to="article.link") Читать
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.cards-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin: 30px auto;
}

.card {
  @include card;
}
</style>
