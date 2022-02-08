<template>
  <div>
    <h1 class="pb-4">Multiple v-model</h1>
    <h3>MultipleVModel.vue component</h3>
    <p>Name: {{ user.name }}</p>
    <p>Town: {{ user.town }}</p>
    <p>Phone number: {{ user.phoneNumber }}</p>
    <hr>
    <h3>UserForm.vue component</h3>
    <UserForm 
      v-model:name="user.name"
      v-model:town="user.town"
      v-model:phoneNumber="user.phoneNumber"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import UserForm from './MultipleVModelParts/UserForm.vue'

export default {
  name: 'MultipleVModel',
  components: {
    UserForm
  },
  setup () {
    const user = ref({
      name: '',
      town: '',
      phoneNumber: ''
    })

    return { user }
  }
}
</script>