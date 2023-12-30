<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";

import IconArrowLeft from "../assets/images/arrow-left.svg";
import IconArrowRight from "../assets/images/arrow-right.svg";

import "swiper/css";
import "swiper/scss/navigation";
import "swiper/css/pagination";

const props = defineProps({
  slider: { type: Array, required: true },
  index: { type: String, required: true },
});

const swiperRef = ref(null);

function onSwiper(swiper) {
  swiperRef.value = swiper;
}
const swiperOptions = {
  modules: [Navigation, Pagination],

  navigation: {
    nextEl: `.swiper-button-next${props.index}`,
    prevEl: `.swiper-button-prev${props.index}`,
  },

  pagination: {
    type: "fraction",
  },

  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  watchOverflow: true,
};

onMounted(() => {
  const handlerNext = (swiperInstance) => {
    swiperInstance.slideNext();
  };

  const handlerPrev = (swiperInstance) => {
    swiperInstance.slidePrev();
  };

  if (swiperRef.value) {
    swiperRef.value.on("slideNext", () => {
      handlerNext(swiperRef.value);
    });
    swiperRef.value.on("slidePrev", () => {
      handlerPrev(swiperRef.value);
    });
  }
});
</script>

<template lang="pug">
div.slider
  Swiper.swiper.swiper-container(:modules="swiperOptions.modules" :loop="swiperOptions.loop" :watchOverflow="swiperOptions.watchOverflow" :grab-cursor="swiperOptions.grabCursor" :slides-per-view="swiperOptions.slidesPerView" :space-between="swiperOptions.spaceBetween" :navigation="{ nextEl: `.swiper-button-next${props.index}`, prevEl: `.swiper-button-prev${props.index}` }" :pagination="swiperOptions.pagination" @swiper="onSwiper")
    Swiper-slide(v-for="(slide, index) in slider" :key="index") 
      img(:src="slide")

  img.swiper-button-prev(:class="`swiper-button-prev${props.index}`" :src="IconArrowLeft")

  img.swiper-button-next(:class="`swiper-button-next${props.index}`" :src="IconArrowRight")
  div.swiper-pagination
  
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";
.slider {
  position: relative;
  margin: 100px 0;
  padding: 0 8.51%;
}
.swiper {
  padding-bottom: 50px;
}

.swiper-slide {
  border-radius: 0.3rem;

  img {
    width: 100%;
    display: block;
  }
}

.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  width: 60px;
  height: 60px;
}

.swiper-button-prev {
  left: 4px;

  &:active {
    transform: translateX(-2px);
    transition: 0.1s;
  }
}

.swiper-button-next {
  right: 4px;

  &:active {
    transform: translateX(2px);
    transition: 0.1s;
  }
}

:deep(.swiper-pagination-fraction) {
  position: absolute;
  bottom: 0;
  color: $black-color;
  font-size: 18px;
}

@media screen and (max-width: 1440px) {
  .swiper-button-prev,
  .swiper-button-next {
    width: 40px;
    height: 40px;
  }
}

@media screen and (max-width: 768px) {
  .slider {
    margin: 60px 0;
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: 30px;
    height: 30px;
  }
}

@media screen and (max-width: 480px) {
  .swiper-button-prev,
  .swiper-button-next {
    top: 86%;
  }

  .swiper-button-prev {
    left: 9%;
  }

  .swiper-button-next {
    right: 9%;
  }

  :deep(.swiper-pagination-fraction) {
    font-size: 12px;
  }
}
</style>
