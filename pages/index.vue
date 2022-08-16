<template>
  <Tutorial />
</template>

<script>
export default {
  name: "IndexPage",
  mounted() {
    this.$axios.$get("product").then((res) => {
      console.log(res);
    });
  },
};
</script>
