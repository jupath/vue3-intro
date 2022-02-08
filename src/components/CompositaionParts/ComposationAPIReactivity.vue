<template>
  <div>
      <h2>Ref</h2>
      <h3 ref="h3">Hi, my name is {{ user.name }} and my age is {{ user.age }}.</h3>
      <div class="py-3 d-flex">
        <div class="mx-2">
          <button @click="handleClick" class="btn btn-primary mr-3">Click me</button>
        </div>
      </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'ComposationAPIReactivity',
  setup () {
    // this keyword doesn't work here
    // like this.$refs.h3

    // Template refs
    // const name = ref('Béla')
    // const age = ref(30)


    const user = reactive('Béla')

    const h3 = ref(null)

    const handleClick = () => {
      // Template refs
      console.log(h3, h3.value)
      h3.value.classList.add('test')

      // name.value = 'Lajos'
      user.age = 100
    }

    return { h3, handleClick, user }
  }
}
</script>