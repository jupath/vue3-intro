<template>
  <div>
      <h2>Computed</h2>
      <div class="row pb-3">
        <div class="col-5">
          <input type="type" class="form-control" placeholder="Type search term..." v-model="search">
        </div>
      </div>
      <div v-for="(item, index) in matchingNames " :key="index">
        {{ item }}
      </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'ComposationAPIComputed',
  setup () {
    const search = ref('')
    const names = ref(['Attila', 'John', 'Max', 'Tom', 'Zeno'])

    const matchingNames = computed(() => {
      return names.value.filter(name => {
        const nameLower = name.toLowerCase()
        const termLower = search.value.toLowerCase()
        if (nameLower.includes(termLower)) {
          return name
        }
      })
    })

    return { search, names, matchingNames }
  }
}
</script>