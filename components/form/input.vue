<template>
  <div class="mb-5">
    <label>{{ label }}</label>
    <input
      class="border border-black p-2"
      type="text"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: ["label", "value"],
};
</script>

<style lang="scss" scoped></style>
