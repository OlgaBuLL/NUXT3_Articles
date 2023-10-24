<template lang="pug">
div.error(v-if="store.error")
  Error
div.loading(v-else-if="store.isLoading")
  Loading 
template(v-else v-for="(articleElement, i) in processedArticles" :key="i")

  //- Introduction Block
  div.introduction(v-if="articleElement.type === 'article_intro_block'")
    div.introduction__picture
      img(v-if="articleElement.data.image" :src="articleElement.data.image" alt="Article image")
    div.introduction__info
      div.introduction__title
        h1 {{ articleElement.data.title }}
        div.introduction__statistics
          p
            svg(xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none")
              g(opacity="0.6")
                mask(id="mask0_5_530" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="1" width="14" height="14")
                  path(d="M7.99994 13.6C11.0928 13.6 13.6 11.0929 13.6 8C13.6 4.9071 11.0928 2.39996 7.99994 2.39996C4.90704 2.39996 2.3999 4.9071 2.3999 8C2.3999 11.0929 4.90704 13.6 7.99994 13.6Z" fill="white" stroke="white" stroke-width="1.12001" stroke-linejoin="round")
                  path(d="M8.0022 4.63997V8.00279L10.3763 10.3772" stroke="black" stroke-width="1.12001" stroke-linecap="round" stroke-linejoin="round")
              g(mask="url(#mask0_5_530)")
                path(d="M1.28003 1.27995H14.7201V14.72H1.28003V1.27995Z" fill="#8D959C")
            span {{articleElement.data.reading_time }} мин время чтения 
          p
            svg(xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none")
              g(opacity="0.6")
                path(d="M7.99996 6C7.46953 6 6.96082 6.21071 6.58575 6.58579C6.21067 6.96086 5.99996 7.46957 5.99996 8C5.99996 8.53043 6.21067 9.03914 6.58575 9.41421C6.96082 9.78929 7.46953 10 7.99996 10C8.53039 10 9.0391 9.78929 9.41417 9.41421C9.78925 9.03914 9.99996 8.53043 9.99996 8C9.99996 7.46957 9.78925 6.96086 9.41417 6.58579C9.0391 6.21071 8.53039 6 7.99996 6ZM7.99996 11.3333C7.1159 11.3333 6.26806 10.9821 5.64294 10.357C5.01782 9.7319 4.66663 8.88406 4.66663 8C4.66663 7.11595 5.01782 6.2681 5.64294 5.64298C6.26806 5.01786 7.1159 4.66667 7.99996 4.66667C8.88401 4.66667 9.73186 5.01786 10.357 5.64298C10.9821 6.2681 11.3333 7.11595 11.3333 8C11.3333 8.88406 10.9821 9.7319 10.357 10.357C9.73186 10.9821 8.88401 11.3333 7.99996 11.3333ZM7.99996 3C4.66663 3 1.81996 5.07333 0.666626 8C1.81996 10.9267 4.66663 13 7.99996 13C11.3333 13 14.18 10.9267 15.3333 8C14.18 5.07333 11.3333 3 7.99996 3Z" fill="#8D959C")
            span {{articleElement.data.views_count }} прочитали статью         
      p.introduction__short-description {{articleElement.data.short_description}}
  
  //- Text Block - Article
  div.article(v-if="articleElement.type === 'text_block'" )
    template(v-for="(block, index) in articleElement.blocks" :key="index")
      h2(v-if="block.type === 'h2'") {{block.content}}
      h3(v-if="block.type === 'h3'") {{block.content}}
      p(v-if="block.type === 'p'") {{block.content}}
      ul
        li(v-if="block.type === 'li'") {{block.content}}

      blockquote.article__quote(v-if="block.type === 'blockquote'" )
        svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 64" fill="none")
          g(opacity="0.8" clip-path="url(#clip0_13_591)")
            path(d="M17.58 27C21.0412 27 24.4246 28.0264 27.3025 29.9493C30.1803 31.8722 32.4234 34.6053 33.7479 37.803C35.0724 41.0007 35.419 44.5194 34.7437 47.9141C34.0685 51.3088 32.4018 54.4269 29.9544 56.8744C27.507 59.3218 24.3887 60.9885 20.9941 61.6637C17.5994 62.339 14.0807 61.9924 10.883 60.6679C7.68533 59.3434 4.95221 57.1003 3.02928 54.2225C1.10636 51.3446 0.08 47.9612 0.08 44.5L0 42C0 32.7174 3.68749 23.815 10.2513 17.2513C16.815 10.6875 25.7174 7 35 7V17C31.7155 16.9912 28.4619 17.6335 25.4272 18.89C22.3925 20.1464 19.637 21.992 17.32 24.32C16.4195 25.2188 15.5887 26.185 14.835 27.21C15.73 27.07 16.645 26.995 17.575 26.995L17.58 27ZM62.58 27C66.0412 27 69.4246 28.0264 72.3025 29.9493C75.1803 31.8722 77.4234 34.6053 78.7479 37.803C80.0724 41.0007 80.419 44.5194 79.7437 47.9141C79.0685 51.3088 77.4018 54.4269 74.9544 56.8744C72.507 59.3218 69.3887 60.9885 65.9941 61.6637C62.5994 62.339 59.0807 61.9924 55.883 60.6679C52.6853 59.3434 49.9522 57.1003 48.0293 54.2225C46.1064 51.3446 45.08 47.9612 45.08 44.5L45 42C45 32.7174 48.6875 23.815 55.2513 17.2513C61.815 10.6875 70.7174 7 80 7V17C76.7155 16.9912 73.4619 17.6335 70.4272 18.89C67.3925 20.1464 64.637 21.992 62.32 24.32C61.4195 25.2188 60.5887 26.185 59.835 27.21C60.73 27.07 61.645 27 62.58 27Z" fill="#8D959C")
          defs
            clipPath(id="clip0_13_591")
              rect(width="80" height="64" fill="white")
        div
          p {{block.blocks[0].content}}
          footer {{block.blocks[1].content}}
    
  //- Image Block - Picture
  figure.article__figure(v-if="articleElement.type === 'image_block'")
    img(v-if ="articleElement.data.src" :src="articleElement.data.src")
    figcaption(v-if ="articleElement.data.caption" ) {{articleElement.data.caption}}

  //- Slider Block
  template(v-if="articleElement.type === 'slider_block'")
    Slider(v-if="articleElement.data && Array.isArray(articleElement.data)" :slider="articleElement.data" :index="`slider${i}`")

  //- Related Articles
  div.related-articles(v-if="articleElement.data.articles && Array.isArray(articleElement.data.articles)")
    h2 {{ articleElement.data.title }}
    div.related-articles__container
      div.card(v-for="(oneArticle, index) in articleElement.data.articles" :key="index")
        img(:src="oneArticle.image")
        h3(v-if="oneArticle.title") {{ oneArticle.title }}
        NuxtLink(:to="oneArticle.link") Читать

  //- CTA Form block
  div.form-block(v-if="articleElement.type === 'cta_form_block'")
    img(:src="formImg")
    form
      h2 Стань участником проекта
      div
        input(type="text" placeholder="Имя")
        input(type="tel" placeholder="Телефон")
        input(type="email" placeholder="Email")
      button Присоединиться

  //- subscribe_form_block
  .subscribe.container(v-if="articleElement.type === 'subscribe_form_block'") 
    p Подпишись на рассылку
    form
      input(type="email" placeholder="Email")
      button Подписаться
</template>

<script setup>
import { computed, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useRootStore } from "../store/store";
import formImg from "../assets/images/form-image.png";

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

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

// Introduction Block
.introduction {
  display: flex;
  gap: 30px;
  .introduction__picture {
    max-width: 541px;
    max-height: 580px;
    border-radius: 2px 220px 2px 2px;
    overflow: hidden;
    & img {
      object-fit: cover;
    }
  }
  .introduction__info {
    max-width: 769px;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
}

.introduction__title {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.introduction__statistics {
  & p {
    display: flex;
    align-items: center;
    gap: 8px;
    & span {
      color: $grey-color;
      font-size: 14px;
      font-weight: 400;
      line-height: 142.857%;
    }
  }
}

.introduction__short-description {
  color: $black-color;
  font-weight: 400;
  line-height: 144.444%;
}

// Text Block - Article
.article {
  margin: 100px auto;
  max-width: 884px;
  & p {
    color: $black-color;
    line-height: 144.444%;
    margin-bottom: 15px;
  }

  & ul {
    padding-left: 20.86%;
    margin-bottom: 15px;
    & li {
      position: relative;
      list-style: none;
      color: #000;
      &::before {
        position: absolute;
        content: "";
        width: 8px;
        height: 8px;
        left: -25px;
        top: 50%;
        transform: translateY(-50%);
        rotate: 45deg;
        border-radius: 1px;
        background: $black-color;
      }
    }
  }

  &__quote {
    display: flex;
    gap: 36px;
    margin-top: 30px;
    & svg {
      max-width: 80px;
      width: 100%;
      max-height: 64px;
    }

    & p {
      color: $black-color;
      font-style: italic;
      font-weight: 300;
      line-height: 144.444%;
    }
    & footer {
      color: $grey-color;
      font-size: 14px;
      line-height: 142.857%;
    }
  }
}

// Image Block - Picture
.article__figure {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 50px 0;
  & img {
    width: 100%;
    border-radius: 2px 220px 2px 2px;
  }
  & figcaption {
    align-self: flex-end;
    color: $grey-color;
    text-align: right;
    font-size: 14px;
    line-height: 142.857%;
  }
}

// Related Articles
.related-articles {
  width: 100%;
  margin: 135px 0 100px;
  & h2 {
    margin-bottom: 50px;
  }
  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }
  & .card {
    @include card;
  }
}

// Form block
.form-block {
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  width: 100%;
  margin: 50px 0 100px;
  padding: 60px;
  background: $black-color;
  & img {
    max-width: 595px;
    width: 100%;
    max-height: 326px;
  }
  & form {
    display: grid;
    gap: 50px;
    & h2 {
      color: $white-color;
      margin: 0;
    }
    & div {
      display: flex;
      flex-direction: column;
      gap: 25px;
      & input {
        @include input;
      }
    }
    & button {
      @include button($accent-color, 1px solid $accent-color);
      &:hover {
        background: none;
      }
    }
  }
}

@media screen and (min-width: 320px) and (max-width: 768px) {
  .introduction__picture {
    display: none;
  }

  .article {
    margin: 50px auto;
    & p {
      margin-bottom: 10px;
    }

    &__quote {
      gap: 20px;
      & svg {
        max-width: 40px;
      }
      & footer {
        font-size: 10px;
      }
    }
  }
}
</style>
