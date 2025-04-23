<script setup lang="ts">
defineProps<{
  surname: string
  name: string
  patronymic: string
  image: string
}>()
</script>

<template>
  <div class="masters-card">
    <img :src="image" :alt="name" />
    <span class="surname">{{ surname }}</span>
    <span class="name">{{ name + ' ' + patronymic }}</span>
  </div>
</template>

<style lang="scss" scoped>
.masters-card {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    height: 469rem;
    border-radius: 24rem;
  }

  .surname {
    font-size: 40rem;
    line-height: 48rem;
    font-family: 'Condensed';
    color: $primary-color;
    margin-top: 39rem;
    text-transform: uppercase;
  }

  .name {
    font-size: 16rem;
    margin-top: 9rem;
    text-transform: uppercase;
  }
}
</style>
