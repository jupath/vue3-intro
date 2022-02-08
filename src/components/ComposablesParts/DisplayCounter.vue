<template>
  <div class="pt-3">
    <h3>Count: {{ count }} (next: {{ next }})</h3>
  </div>
</template>

<script>
import useCounter from '@/components/ComposablesParts/counter'

export default {
  name: 'DisplayCounter',
  setup () {
    const {
      count,
      next
    } = useCounter()
  
    return {
      count,
      next
    }
  }
}
</script>