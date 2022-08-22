<template>
  <input ref="inputRef" type="text" :value="value" />
</template>

<script>
import { useCurrencyInput } from "vue-currency-input";

export default {
  name: "CurrencyInput",
  props: ["value"],
  setup(props) {
    const { inputRef } = useCurrencyInput({
      currency: "USD",
    });

    return { inputRef };
  },
};
</script>
