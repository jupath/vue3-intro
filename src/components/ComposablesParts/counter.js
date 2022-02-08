import { computed, readonly, ref } from 'vue'

const count = ref(0)
const next = computed(() => count.value + 1)
const plusOne = () => { count.value += 1 }

export default () => {
  return {
    count: readonly(count),
    next,
    plusOne
  }
}
