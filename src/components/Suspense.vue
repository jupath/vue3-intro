<template>
  <h1 class="pb-3">Suspense</h1>
  <Suspense>
    <template #default>
      <Books />
    </template>
    <template #fallback>
      Loading books...
    </template>
  </Suspense>
</template>

<script>
import Books from './SuspenseParts/Books.vue'

export default {
  name: 'Suspense',
  components: {
    Books
  }
}
</script>
