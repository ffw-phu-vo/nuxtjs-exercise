<template>
  <div class="page">
    <header>
      <template v-if="isLoggedIn == true">
        <button class="bg-gray text white p-2" @click="handleLogout()">
          Logout
        </button>
      </template>
    </header>
    <Nuxt />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Cookies from "js-cookie";

export default {
  methods: {
    handleLogout() {
      Cookies.remove("token");
      Cookies.remove("refresh_token");
      this.$store.commit("auth/setLogout");
    },
  },

  computed: {
    ...mapState({
      // arrow functions can make the code very succinct!
      isLoggedIn: (state) => state.auth.isLoggedIn,
    }),
  },
};
</script>
