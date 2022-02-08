<template>
  <div>
    <button class="btn btn-success" @click="isOpen = true">Open modal</button>
    <Teleport to="#modal">
      <div class="modal" v-if="isOpen">
        <div>
          <h2>Notification!</h2>
          <p>Some texts come here</p>
          <div class="text-center">
            <button class="btn btn-danger" @click="isOpen = false">Close</button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Teleport',
  setup () {
    const isOpen = ref(false)

    return { isOpen }
  }
}
</script>
