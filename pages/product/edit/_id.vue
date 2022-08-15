<template>
  <div class="container mx-auto">
    <h1 class="text-2xl font-bold mb-3">Edit Product {{ id }}</h1>
    <div class="product-edit">
      <div className="my-2">
        <FormInput label="Title" v-model="title" />
      </div>
      <div className="my-2">
        <FormInput label="price" v-model="price" />
      </div>
      <div className="my-2">
        <FormTextarea label="description" v-model="description" />
      </div>

      <button class="bg-gray text white p-2" @click="handleSubmit()">
        Create
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      price: "",
      description: "",
    };
  },
  async asyncData({ params }) {
    console.log(params.id);
    const id = params.id;
    return { id };
  },
  methods: {
    async handleSubmit() {
      // const res = await this.$axios.$post("login-refresh-token", this.login);
      // Cookies.set("token", res.token);
      // Cookies.set("refresh_token", res.refresh_token);
      // this.$store.commit("auth/setLogin");
    },
  },
};
</script>
