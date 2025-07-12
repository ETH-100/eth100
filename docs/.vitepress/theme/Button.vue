<template>
  <a
    :href="props.disabled ? undefined : props.to"
    class="eth-btn"
    :class="{ disabled: props.disabled }"
    :aria-disabled="props.disabled"
    @click="handleClick"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{ to: string; disabled?: boolean }>()

function handleClick(event: MouseEvent) {
  if (props.disabled) {
    event.preventDefault()
  }
}
</script>

<style scoped>
.eth-btn {
  display: inline-block;
  max-width: 100%;
  padding: 0.5rem 1rem;
  background-color: var(--vp-c-brand-3);
  color: white;
  border-radius: 40px;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: background 0.2s ease;
}

.eth-btn:hover {
  background-color: var(--vp-c-brand-2);
}

/* disabled 状态样式 */
.eth-btn.disabled {
  background-color: #ccc;
  cursor: not-allowed;
  pointer-events: none;
  opacity: 0.6;
  text-shadow: none;
}
</style>