<template>
  <div>
    <h1 class="pb-3">Composition API</h1>
    <button class="btn btn-primary" @click="plusOne">+1</button>
    <DisplayCounter />
  </div>
</template>

<script>
import useCounter from '@/components/ComposablesParts/counter'
import DisplayCounter from '@/components/ComposablesParts/DisplayCounter.vue'

export default {
  name: 'Composable',
  components: {
    DisplayCounter
  },
  setup () {
    const { plusOne } = useCounter()
  
    return {
      plusOne
    }
  }
}
</script>