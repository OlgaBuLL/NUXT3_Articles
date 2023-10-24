<template lang="pug">
div.slider
  Swiper.swiper.swiper-container(:modules="swiperOptions.modules" :loop="swiperOptions.loop" :watchOverflow="swiperOptions.watchOverflow" :grab-cursor="swiperOptions.grabCursor" :slides-per-view="swiperOptions.slidesPerView" :space-between="swiperOptions.spaceBetween" :navigation="{ nextEl: `.swiper-button-next${props.index}`, prevEl: `.swiper-button-prev${props.index}` }" :pagination="swiperOptions.pagination" @swiper="onSwiper")
    Swiper-slide(v-for="(slide, index) in slider" :key="index") 
      img(:src="slide")

  svg.swiper-button-prev(:class="`swiper-button-prev${props.index}`" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" fill="none")
    path(d="M0 0.999999C0 0.447714 0.447715 0 1 0H59C59.5523 0 60 0.447715 60 1V59C60 59.5523 59.5523 60 59 60H0.999999C0.447714 60 0 59.5523 0 59V0.999999Z" fill="#1B1B1B")
    path(d="M33.4351 39L25.6569 31.2218C25.2664 30.8313 25.2664 30.1981 25.6569 29.8076L33.4351 22.0294" stroke="#D9D9D9" stroke-width="3" stroke-linecap="round")
  svg.swiper-button-next(:class="`swiper-button-next${props.index}`" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" fill="none")
    path(d="M60 59C60 59.5523 59.5523 60 59 60L1 60C0.447716 60 3.91405e-08 59.5523 8.74228e-08 59L5.15794e-06 0.999995C5.20623e-06 0.447711 0.447721 -5.20623e-06 1.00001 -5.15794e-06L59 -8.74227e-08C59.5523 -3.91404e-08 60 0.447716 60 1L60 59Z" fill="#1B1B1B")
    path(d="M26.5649 21L34.3431 28.7782C34.7336 29.1687 34.7336 29.8019 34.3431 30.1924L26.5649 37.9706" stroke="#D9D9D9" stroke-width="3" stroke-linecap="round")
  div.swiper-pagination
  
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";

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
  & img {
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
    & path {
      transition: none;
      fill: $accent-color;
    }
  }
}

.swiper-button-next {
  right: 4px;
  &:active {
    transform: translateX(2px);
    transition: 0.1s;
    & path {
      transition: none;
      fill: $accent-color;
    }
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
