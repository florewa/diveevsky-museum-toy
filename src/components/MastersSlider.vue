<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'
import MastersCard from './MastersCard.vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { onMounted, ref } from 'vue'
import { getMasters } from '@/api'

const masters = ref([
  {
    id: 0,
    image: '',
    firstName: '',
    lastName: '',
    patronymic: '',
  },
])

onMounted(async () => {
  masters.value = await getMasters()
})
</script>

<template>
  <div class="masters-slider">
    <h2 class="title">НАШИ МАСТЕРА</h2>
    <Swiper
      :modules="[Navigation, Autoplay]"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :slides-per-view="5"
      :space-between="20"
      :loop="true"
      class="swiper"
    >
      <swiper-slide v-for="master in masters" :key="master.id">
        <MastersCard
          :surname="master.lastName"
          :name="master.firstName"
          :patronymic="master.patronymic"
          :image="master.image"
        />
      </swiper-slide>
    </Swiper>
  </div>
</template>

<style lang="scss" scoped>
.masters-slider {
  width: 1699.2rem;
  margin: 300rem auto 0;
  position: relative;

  .title {
    font-family: 'Arial';
    font-size: 140rem;
    font-weight: 600;
    color: #8050162e;
    margin-left: -100rem;
  }
}
</style>
