<template lang="">
  <button class="bg-gray text white p-2" @click="handleAddToCart">
    <slot></slot>
  </button>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: ["id", "title", "price"],

  methods: {
    ...mapMutations({
      addProduct: "cart/addProduct",
    }),
    handleAddToCart: function (type) {
      console.log(this.id);
      this.addProduct({
        productId: this.id,
        title: this.title,
        price: this.price,
      });
    },
  },
};
</script>
