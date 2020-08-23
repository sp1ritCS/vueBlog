<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense :shaped="true" nav>
        <v-list-item-group
          v-model="currentPage"
          :mandatory="true"
          color="primary"
        >
          <v-list-item link @click="goto('/', 0)">
            <v-list-item-action>
              <v-icon>{{ icons[0] }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Blog posts</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link @click="goto('/me', 1)">
            <v-list-item-action>
              <v-icon>{{ icons[1] }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Contact Me</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <v-divider />
        <v-list-item-group>
          <v-list-item>
            <v-list-item-action>
              <v-icon>{{ icons[2] }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Clear cache</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!-- <NavDrawer :drawer="drawer" /> -->
    <v-app-bar app color="primary" dark clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo.svg"
          transition="scale-transition"
          width="40"
        />

        <!-- <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
        <h2 class="shrink mt-1 hidden-sm-and-down">sp1rit's Blog</h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {
  mdiBookOpenBlankVariant,
  mdiAccountCircleOutline,
  mdiDeleteOutline
} from "@mdi/js";
export default Vue.extend({
  name: "Header",
  data() {
    return {
      drawer: false,
      currentPage: 0,
      icons: [
        mdiBookOpenBlankVariant,
        mdiAccountCircleOutline,
        mdiDeleteOutline
      ]
    };
  },
  methods: {
    goto(path: string, pos: number) {
      this.$router.push(path, () => {
        this.currentPage = pos;
      });
    }
  }
});
</script>

<style></style>
