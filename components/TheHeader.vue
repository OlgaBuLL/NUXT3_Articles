<script setup>
import IconLogo from "../assets/images/logo.svg";
</script>

<template lang="pug">
header.header
  nav.header__nav.container 
    img.header__logo(:src="IconLogo")

</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.header {
  min-height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $white-color;

  &__nav {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: $main-font;
  }

  &__logo {
    width: 133px;
    height: 32px;
  }
}
</style>
