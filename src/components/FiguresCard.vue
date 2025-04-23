<script setup lang="ts">
defineProps<{
  image: string
  title: string
  description: string
}>()
</script>

<template>
  <div class="figures-card">
    <img :src="image" alt="figure" />
    <div class="text">
      <span class="name">{{ title }}</span>
      <span class="description">{{ description }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.figures-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 106rem;
  padding: 0 176rem;

  img {
    width: 429.48rem;
    height: 716.87rem;
    border-radius: 24rem;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 31rem;

    .name {
      font-size: 80rem;
      color: $primary-color;
      font-family: 'Condensed';
      line-height: 96rem;
    }

    .description {
      font-size: 20rem;
      line-height: 24.2rem;
      color: $text-color;
      font-family: 'Inter';
    }
  }
}
</style>
