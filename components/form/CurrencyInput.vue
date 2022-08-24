<template>
  <div class="mb-5">
    <label v-if="label">{{ label }}</label>
    <input ref="inputRef" type="text" :value="value" />
  </div>
</template>

<script>
import { useCurrencyInput } from "vue-currency-input";

export default {
  name: "CurrencyInput",
  props: ["label", "value"],
  setup(props) {
    const { inputRef } = useCurrencyInput({
      currency: "USD",
    });

    return { inputRef };
  },
};
</script>
