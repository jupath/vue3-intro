<template>
  <div>
      <h2>watch/watchEffect</h2>
      <div class="row">
        <div class="col-5">
          <input type="type" class="form-control" placeholder="Type search term..." v-model="search">
        </div>
      </div>
  </div>
</template>

<script>
import { ref, watch, watchEffect, onMounted } from 'vue'

export default {
  name: 'ComposationAPIComputed',
  setup () {
    const search = ref('')

    // Run when search changes
    watch(search, () => {
      console.log('Watch function ran')
    })

    // Run everytime something that is in use inside changes. And run when the component is mounted
    watchEffect(() => {
      console.log(`watchEffect function ran and the search term is ${search.value}`)
    })

    // Created lifecycle hook not needed anymore because setup() runs around that time. 
    onMounted(() => {
      console.log('Hello, component is mounted!')
    })

    return { search }
  }
}
</script>