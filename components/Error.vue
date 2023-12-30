<script setup>
import { useRootStore } from "../store/store";

import errorIcon from "../assets/images/error-emoji.svg";

const store = useRootStore();
</script>

<template lang="pug">
h2 Error
img.error-icon(:src="errorIcon")
  
p Oops, something went wrong...
p {{ store.error  }}
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

h2 {
  font-size: 30px;
  color: $grey-color;
}

.error-icon {
  max-width: 55px;
}

p {
  color: $grey-color;

  &:last-child {
    font-weight: 600;
  }
}

@media screen and (max-width: 768px) {
  .error-icon {
    max-width: 40px;
  }
}
</style>
