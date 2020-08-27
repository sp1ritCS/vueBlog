<template>
  <v-app>
    <Header />

    <v-main>
      <v-container>
        <router-view />
      </v-container>
      <Footer />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

import Header from "@/components/ui/Header.vue";
import Footer from "@/components/ui/Footer.vue";

export default Vue.extend({
  name: "App",

  components: {
    Header,
    Footer
  },

  methods: {},

  data: () => ({})
});
</script>
