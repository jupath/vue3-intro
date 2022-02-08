<template>
  <div>
      <h2>Ref</h2>
      <h3 ref="h3">Hi, my name is {{ name }} and my age is {{ age }}.</h3>
      <div class="py-3 d-flex">
        <div class="mx-2">
          <button @click="handleClick" class="btn btn-primary mr-3">Click me</button>
        </div>
        <div class="mx-2">
          <button @click="age++" class="btn btn-secondary">Add 1 to age</button>
        </div>
      </div>
      <h2>Reactive</h2>
      <h3> {{ userTwo.name }} - {{ userTwo.age }}</h3>
      <div class="mx-2">
        <button @click="handleClickTwo" class="btn btn-primary">Update age</button>
      </div>
      <div class="py-3">
        <div class="row">
          <div class="col-5">
            <input type="type" class="form-control" v-model="inputField">
            <div class="py-3">
              You are typing: {{ inputField }}
            </div>
          </div>
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
    const h3 = ref(null)

    // Not reactive variables
    // const name = 'Béla'
    // const age = 30

    // Reactive variables REF
    const name = ref('Béla')
    const age = ref(30)
    // const user = ref({ name: 'Béla', age: 30 })

    const inputField = ref(null)

    const handleClick = () => {
      // Template refs
      console.log(h3, h3.value)
      h3.value.classList.add('test')

      // Reactive variables REF
      name.value = 'Lajos'
      age.value = 100
      // With object
      //user.value.name = 'Lajos'
    }

    // Reactive variables Reactive
    const userTwo = reactive({ name: 'Lajos', age: 100 })

    const handleClickTwo = () => {
      userTwo.age = 20
    }

    return { name, age, handleClick, h3, inputField, userTwo, handleClickTwo }
  }
}
</script>