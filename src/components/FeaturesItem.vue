<script setup lang="ts">
import { getFeatures } from '@/api'
import { onMounted, ref } from 'vue'

const features = ref({
  title: '',
  description: '',
})

onMounted(async () => {
  features.value = await getFeatures()
})
</script>

<template>
  <div class="features-item">
    <div class="text">
      <h2>{{ features.title }}</h2>
      <pre>
        {{ features.description }}
      </pre>
    </div>
    <div class="images">
      <img src="@/assets/images/feature-1.webp" alt="features-img-1" class="img-1" />
      <img src="@/assets/images/feature-2.webp" alt="features-img-2" class="img-2" />
      <img src="@/assets/images/feature-3.webp" alt="features-img-3" class="img-3" />
      <img src="@/assets/images/feature-4.webp" alt="features-img-4" class="img-4" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.features-item {
  margin-top: 160.5rem;

  .text {
    width: 1303rem;
    margin: 0 auto;
    background-color: $secondary-color;
    padding: 80rem;
    border-radius: 24rem;

    h2 {
      font-size: 80rem;
      line-height: 96rem;
      font-family: 'Condensed';
      color: $primary-color;
      text-align: center;
      text-transform: uppercase;
    }

    pre {
      margin-top: 31rem;
      font-size: 20rem;
      line-height: 24.2rem;
      font-family: 'Inter';
      white-space: pre-line;
      font-family: inherit;
      text-align: center;
      color: $text-color;
    }
  }

  .images {
    position: relative;
    height: 760rem;
    max-width: 100vw;
    overflow: hidden;
    margin-top: -50rem;

    img {
      border-radius: 24rem;
      position: absolute;
    }

    .img-1 {
      width: 498.7rem;
      height: 618.51rem;
      top: 120rem;
      left: -250rem;
      transform: rotate(-15deg);
    }
    .img-2 {
      width: 509.71rem;
      height: 338.44rem;
      top: 200rem;
      left: 358rem;
      transform: rotate(3.96deg);
    }
    .img-3 {
      width: 440.2rem;
      height: 399.73rem;
      top: 220rem;
      left: 936.9rem;
      transform: rotate(-4.94deg);
    }
    .img-4 {
      width: 498.7rem;
      height: 618.51rem;
      top: 35rem;
      left: 1500rem;
      transform: rotate(9.32deg);
    }
  }
}
</style>
