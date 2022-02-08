<template>
  <div>
    <h1>Composition API</h1>
    <div class="py-3">
      <ComposatitonAPIReactivity />
      <hr>
      <ComposatitonAPIComputed />
      <hr>
      <ComposationAPIWatch />
      <hr>
    </div>
  </div>
</template>

<script>
import ComposatitonAPIReactivity from './CompositaionParts/ComposationAPIReactivity.vue'
import ComposatitonAPIComputed from './CompositaionParts/ComposationAPIComputed.vue'
import ComposationAPIWatch from './CompositaionParts/ComposationAPIWatch.vue'

export default {
  name: 'ComposationAPI',
  components: {
    ComposatitonAPIReactivity,
    ComposatitonAPIComputed,
    ComposationAPIWatch
  }
}
</script>