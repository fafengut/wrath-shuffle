<script setup lang="ts">
  import { useHead } from '@vueuse/head'
  import AuctionData from '@/components/AuctionData.vue'

  const whTooltips = {
    colorLinks: true,
    iconizeLinks: true,
    renameLinks: true,
  }
  useHead({
    script: [
      {
        src: 'https://wow.zamimg.com/js/tooltips.js',
      },
      {
        textContent: `const whTooltips = {
          colorLinks: true, 
          iconizeLinks: true, 
          renameLinks: true,
          iconSize: 'large'
        }`,
      },
    ],
  })
</script>

<template>
  <h1>Saronite Shuffle</h1>
  <p>
    Saronite Shuffle is a strategy for turning as much profit as possible out of
    Saronite Ore. The basic idea behind this is to prospect the Saronite Ore as
    Jewelcrafter to acquire uncommon and rare Gems. With Proffesion like
    Jewelcrafting, Alchemy and Enchanting you'll be able to turn these Gems into
    other Items, that are worth way more then the Ore itself.
  </p>
  <p>
    You can find a great Guide on WoWHead
    <a href="https://www.wowhead.com/wotlk/guide/saronite-shuffle-gold-making"
      >here</a
    >
  </p>
  <AuctionData />
</template>

<style scoped></style>
