<template>
  <div>
    <div class="row">
        <div class="col-5">
            <input
                type="type"
                class="form-control mb-3"
                placeholder="Name"
                :value="name"
                @input="$emit('update:name', $event.target.value)"
            >
            <input
                type="type"
                class="form-control mb-3"
                placeholder="Town"
                :value="town"
                @input="$emit('update:town', $event.target.value)"
            >
            <input
                type="type"
                class="form-control mb-3"
                placeholder="Phone number"
                :value="phoneNumber"
                @input="$emit('update:phoneNumber', $event.target.value)"
            >
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserForm',
  props: {
    name: {
      type: String,
      default: ''
    },
    town: {
      type: String,
      default: ''
    },
    phoneNumber: {
      type: String,
      default: ''
    },
  }
}
</script>