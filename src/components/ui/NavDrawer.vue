<template>
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
        <v-list-item link @click="goto('/about', 1)">
          <v-list-item-action>
            <v-icon>{{ icons[1] }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<style></style>

<script lang="ts">
import Vue from "vue";
import { mdiBookOpenBlankVariant, mdiRead } from "@mdi/js";
export default Vue.extend({
  name: "NavDrawer",
  props: {
    drawer: Boolean
  },
  data() {
    return {
      currentPage: 0,
      icons: [mdiBookOpenBlankVariant, mdiRead]
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
