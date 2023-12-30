<script setup>
import formImg from "../assets/images/form-image.png";

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
div.cta-form-block(v-if="articleElement.type === 'cta_form_block'")
    img.cta-form-block__picture(:src="formImg")
    form.cta-form-block__form
      h2.cta-form-block__form-title Стань участником проекта
      div.cta-form-block__form-group
        input(type="text" placeholder="Имя")
        input(type="tel" placeholder="Телефон")
        input(type="email" placeholder="Email")
      button.cta-form-block__form-button Присоединиться
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.cta-form-block {
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  width: 100%;
  margin: 50px 0 100px;
  padding: 60px;
  background: $black-color;

  &__picture {
    width: 100%;
    max-width: 595px;
    max-height: 326px;
  }

  &__form {
    flex: 1;
    display: grid;
    gap: 50px;
  }

  &__form-title {
    color: $white-color;
    margin: 0;
  }

  &__form-group {
    display: flex;
    flex-direction: column;
    gap: 25px;

    input {
      @include input;
    }
  }

  &__form-button {
    @include button($accent-color, 1px solid $accent-color);

    &:hover {
      background: none;
    }
  }
}

@media screen and (max-width: 767px) {
  .cta-form-block {
    padding: 30px 15px;
  }
}
</style>
