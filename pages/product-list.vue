<template>
  <div class="product-list container mx-auto">
    <div class="product-list__top m-5 flex flex-wrap">
      <div class="w-8/12">
        <h1 class="mb-4">Product List</h1>
        <div className="product-list__search flex flex-wrap"></div>
      </div>
      <div class="w-4/12">
        <CartTeaser />
        <div>
          <NuxtLink to="/product/edit/0"> Add new product </NuxtLink>
        </div>
      </div>
    </div>
    <div className="product-list__list m-5">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Updated At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.productId">
            <td>{{ item.productId }}</td>
            <td class="w-52">
              <img :src="`http://localhost:5000/${item.thumb}`" />
            </td>
            <td>
              <NuxtLink :to="`/product/${item.productId}`">
                {{ item.title }}
              </NuxtLink>
            </td>
            <td>{{ item.price | dollarFormat() }}</td>
            <td>{{ item.date | dateFormat() }}</td>
            <td>
              <CartButton
                :theme="`link`"
                :id="item.id"
                :title="item.title"
                :price="item.price"
              >
                <font-awesome-icon icon="fa-cart-plus" />
              </CartButton>

              <NuxtLink :to="`/product/edit/${item.productId}`">
                <font-awesome-icon icon="fa-pencil-alt" />
              </NuxtLink>
              <font-awesome-icon icon="fa-trash" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product List",
  data() {
    return {
      items: [],
    };
  },
  async fetch() {
    const query = {
      search: "",
      priceFrom: "",
      priceTo: "",
      orderBy: "",
      isAscending: "true",
      page: 1,
    };
    const result = "?" + new URLSearchParams(query).toString();
    const payload = await this.$axios.$get(`/product${result}`);
    this.items = payload.data;
    console.log(payload);
  },
};
</script>
