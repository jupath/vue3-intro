<template>
  <TheNavigation />
  <div class="container py-5">
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation.vue'

export default {
  name: 'App',
  components: {
    TheNavigation
  }
}
</script>
