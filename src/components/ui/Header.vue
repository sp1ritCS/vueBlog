<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense :shaped="true" nav>
        <v-list-item-group
          v-model="currentPage"
          :mandatory="true"
          color="primary"
          subheader
        >
          <v-subheader inset>Navigation</v-subheader>
          <v-list-item link @click="goto('/', 0)">
            <v-list-item-action>
              <v-icon>{{ icons.read }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Blog posts</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link @click="goto('/me', 1)">
            <v-list-item-action>
              <v-icon>{{ icons.me }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Contact Me</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <v-divider />
        <v-list-item-group subheader>
          <v-subheader inset>Settings</v-subheader>
          <v-list-item>
            <v-list-item-action>
              <v-icon>{{ icons.darkmode }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Darkmode</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-switch
                v-model="$vuetify.theme.dark"
                hide-details
                inset
              ></v-switch>
            </v-list-item-action>
          </v-list-item>
        </v-list-item-group>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-action>
              <v-icon>{{ icons.delete }}</v-icon>
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
          alt="sp1rit Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo.svg"
          transition="scale-transition"
          width="40"
        />
        <h2 class="shrink mt-1 hidden-sm-and-down">sp1rit's Blog</h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn :href="rssFeedLoc" target="_blank" text>
        <span class="mr-2">RSS Feed</span>
        <v-icon>{{ icons.rss }}</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import settings from "@/props/Settings.ts";
import {
  mdiRss,
  mdiBookOpenBlankVariant,
  mdiAccountCircleOutline,
  mdiEyeSettings,
  mdiDeleteOutline
} from "@mdi/js";

function hightlightActive(route) {
  switch (route) {
    case "Overview":
      return 0;
    case "Read Blogentry":
      return 0;
    case "Contact me":
      return 1;
    default:
      return -1;
  }
}

export default Vue.extend({
  name: "Header",
  data() {
    return {
      drawer: false,
      currentPage: hightlightActive(this.$route.name),
      rssFeedLoc: settings.rssFeedLoc,
      icons: {
        rss: mdiRss,
        read: mdiBookOpenBlankVariant,
        me: mdiAccountCircleOutline,
        darkmode: mdiEyeSettings,
        delete: mdiDeleteOutline
      }
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
