<script setup>
import { computed, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useRootStore } from "../store/store";

const route = useRoute();
const store = useRootStore();

onBeforeMount(() => {
  const id = route.params.id;
  store.fetchArticle(id);
});

// Разбор text_block на массив элементов.
const blocksInArticle = (articleElement) => {
  let parser = new DOMParser();
  let doc = parser.parseFromString(articleElement.data, "text/html");

  // Объявление пустого массива.
  let blocks = [];

  // Извлечение всех "потомков" элемента body.
  let children = Array.from(doc.body.children);

  // И распечатаем их.
  for (let child of children) {
    // h2
    if (child.tagName.toLowerCase() === "h2") {
      blocks.push({
        type: "h2",
        content: child.innerText,
      });
    }

    // h3
    if (child.tagName.toLowerCase() === "h3") {
      blocks.push({
        type: "h3",
        content: child.innerText,
      });
    }

    // <p> и он не находится внутри <blockquote>...
    if (child.tagName.toLowerCase() === "p" && !child.closest("blockquote")) {
      blocks.push({
        type: "p",
        content: child.innerText,
      });
    }

    // ul
    if (child.tagName.toLowerCase() === "ul") {
      for (let li of Array.from(child.children)) {
        blocks.push({
          type: "li",
          content: li.innerText,
        });
      }
    }

    // blockquote
    if (child.tagName.toLowerCase() === "blockquote") {
      let blockquote = { type: "blockquote", blocks: [] };

      for (let innerChild of Array.from(child.children)) {
        if (innerChild.tagName.toLowerCase() === "p") {
          blockquote.blocks.push({
            type: "p",
            content: innerChild.innerText,
          });
        }

        if (innerChild.tagName.toLowerCase() === "footer") {
          blockquote.blocks.push({
            type: "footer",
            content: innerChild.innerText,
          });
        }
      }

      blocks.push(blockquote);
    }
  }

  return blocks;
};

const processedArticles = computed(() => {
  return store.article.map((articleElement) => {
    if (articleElement.type === "text_block") {
      return {
        ...articleElement,
        blocks: blocksInArticle(articleElement),
      };
    }
    return articleElement;
  });
});
</script>

<template lang="pug">
div.error(v-if="store.error")
  Error
div.loading(v-else-if="store.isLoading")
  Loading 
template(v-else v-for="(articleElement, i) in processedArticles" :key="i")


  <IntroductionBlock :articleElement="articleElement" />

  <TextBlock :articleElement="articleElement" />
    
  <ImageBlock :articleElement="articleElement" />

  <SliderBlock :articleElement="articleElement" />
  
  <RelatedArticlesBlock :articleElement="articleElement" />

  <CtaFormBlock :articleElement="articleElement" />

  <SubscribeFormBlock :articleElement="articleElement" />
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";
</style>
