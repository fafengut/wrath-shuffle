<script lang="ts">
  import { defineComponent } from 'vue'
  import { useHead } from '@vueuse/head'
  import AuctionData from '@/components/AuctionData.vue'
  import DropDownVue from './components/DropDown.vue'
  import { realmsApi } from '@/api'
  import axios from 'axios'
  import { onMounted, ref } from 'vue'
  import Realm from '@/types/Realm'

  export default defineComponent({
    name: 'App',
    components: { AuctionData, DropDownVue },
    setup() {
      const realms = ref<Realm[]>([])

      onMounted(async () => {
        const token = await axios.post(
          'https://oauth.battle.net/token',
          new URLSearchParams({
            grant_type: 'client_credentials',
          }),
          {
            auth: {
              username: import.meta.env.VITE_CLIENT_ID,
              password: import.meta.env.VITE_CLIENT_SECRET,
            },
          }
        )

        try {
          const response = await realmsApi.getAllRealms({
            namespace: 'dynamic-classic-eu',
            locale: 'en_US',
            access_token: token.data.access_token,
          })
          realms.value = response.data.realms
        } catch (error) {
          console.log(error)
        }
      })

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
      return { realms }
    },
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
  <DropDownVue :realms="realms" />
  <AuctionData />
</template>

<style scoped></style>
