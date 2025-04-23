<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import FiguresCard from './FiguresCard.vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { onMounted, ref } from 'vue'
import { getToys } from '@/api'

const figures = ref([
  {
    id: 0,
    image: '',
    title: '',
    description: '',
  },
])

onMounted(async () => {
  figures.value = await getToys()
})
</script>

<template>
  <div class="figures-slider">
    <Swiper
      :modules="[Navigation]"
      :navigation="{
        prevEl: '.swiper-button-prev-custom',
        nextEl: '.swiper-button-next-custom',
      }"
      :slides-per-view="1"
      :loop="true"
      class="swiper"
    >
      <swiper-slide v-for="figure in figures" :key="figure.id">
        <FiguresCard
          :image="figure.image"
          :title="figure.title"
          :description="figure.description"
        />
      </swiper-slide>
    </Swiper>
    <div class="swiper-button-prev-custom">
      <img src="@/assets/images/arrow-left.svg" alt="prev" />
    </div>
    <div class="swiper-button-next-custom">
      <img src="@/assets/images/arrow-right.svg" alt="next" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.figures-slider {
  width: 1738.48rem;
  margin: 100rem auto 0;
  position: relative;

  .swiper-button-prev-custom,
  .swiper-button-next-custom {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 10;
  }

  .swiper-button-prev-custom {
    left: 0;
    img {
      width: 100rem;
    }
  }

  .swiper-button-next-custom {
    right: 0;
    img {
      width: 100rem;
    }
  }
}
</style>
