<template>
  <div v-for="realm in realRealms" :key="realm.id">{{ realm.name }}</div>
</template>

<script lang="ts">
  import { computed, defineComponent, PropType } from 'vue'
  import Realm from '@/types/Realm'

  export default defineComponent({
    props: {
      realms: {
        required: true,
        type: Array as PropType<Realm[]>,
      },
    },
    setup(props) {
      const realRealms = computed(() => {
        return [...props.realms]
          .filter((realm) => !String(realm.name).startsWith('EU'))
          .sort((a: Realm, b: Realm) => {
            return a.name > b.name ? 1 : -1
          })
      })
      return { realRealms }
    },
  })
</script>

<style scoped></style>
