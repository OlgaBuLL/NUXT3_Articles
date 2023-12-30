<script setup>
import IconBlockquote from "../assets/images/blockquote.svg";

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
div.article(v-if="articleElement.type === 'text_block'" )
    template(v-for="(block, index) in articleElement.blocks" :key="index")
        h2(v-if="block.type === 'h2'") {{block.content}}
        h3(v-if="block.type === 'h3'") {{block.content}}
        p(v-if="block.type === 'p'") {{block.content}}
        ul
            li(v-if="block.type === 'li'") {{block.content}}

        blockquote.article__quote(v-if="block.type === 'blockquote'" )
            img(:src="IconBlockquote")
            div
                p {{block.blocks[0].content}}
                footer {{block.blocks[1].content}}
    
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.article {
  margin: 100px auto;
  max-width: 884px;

  p {
    color: $black-color;
    line-height: 144.444%;
    margin-bottom: 15px;
  }

  ul {
    padding-left: 20.86%;
    margin-bottom: 15px;

    li {
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

    img {
      max-width: 80px;
      width: 100%;
      max-height: 64px;
    }

    p {
      color: $black-color;
      font-style: italic;
      font-weight: 300;
      line-height: 144.444%;
    }

    footer {
      color: $grey-color;
      font-size: 14px;
      line-height: 142.857%;
    }
  }
}

@media screen and (max-width: 768px) {
  .article {
    margin: 50px auto;

    p {
      margin-bottom: 10px;
    }

    &__quote {
      gap: 20px;

      img {
        max-width: 40px;
      }

      footer {
        font-size: 10px;
      }
    }
  }
}
</style>
