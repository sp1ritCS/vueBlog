<template>
  <v-bottom-sheet v-model="shareSheet">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" text>
        Share
      </v-btn>
    </template>
    <v-dialog v-model="openMastoIQ">
      <v-card>
        <v-card-title>Enter your Mastodon instance:</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="mastoInstance"
            label="Instance URL"
            required
            autofocus
            v-on:keyup.enter="shareMasto()"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="blue darken-1" text @click="openMastoIQ = false"
            >Close</v-btn
          >
          <v-btn color="blue darken-1" text @click="shareMasto()">Share</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-list>
      <v-subheader>Share with</v-subheader>
      <v-list-item
        v-for="tile in tiles"
        :key="tile.name"
        @click="shareWith(tile.share)"
      >
        <v-list-item-avatar>
          <v-avatar size="32px" tile>
            <img v-if="tile.image" :src="`${tile.image}`" :alt="tile.name" />
            <v-icon v-if="tile.icon">{{ tile.icon }}</v-icon>
          </v-avatar>
        </v-list-item-avatar>
        <v-list-item-title>{{ tile.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-bottom-sheet>
</template>

<script lang="ts">
import Vue from "vue";
import { ShareablePlattform, socialFunctions } from "@/props/Share.ts";
import settings from "@/props/Settings.ts";
import { mdiContentCopy, mdiEmail } from "@mdi/js";
export default Vue.extend({
  name: "Share",
  data() {
    return {
      shareSheet: false,
      tiles: Array<ShareablePlattform>(
        {
          name: "Clipboard",
          icon: mdiContentCopy,
          share: socialFunctions.clipboard
        },
        {
          name: "Email",
          icon: mdiEmail,
          share: socialFunctions.email
        },
        {
          name: "Mastodon",
          image: require("@/assets/social/mastodon.png"),
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          share: function(title: string, id: string): number {
            return 2;
          }
        },
        {
          name: "Diaspora",
          image: require("@/assets/social/diaspora.svg"),
          share: socialFunctions.diaspora
        },
        {
          name: "Hackernews",
          image: require("@/assets/social/hackernews.svg"),
          share: socialFunctions.hackernews
        },
        {
          name: "Reddit",
          image: require("@/assets/social/reddit.svg"),
          share: socialFunctions.reddit
        },
        {
          name: "Twitter",
          image: require("@/assets/social/twitter.svg"),
          share: socialFunctions.twitter
        },
        {
          name: "LinkedIn",
          image: require("@/assets/social/linkedin.png"),
          share: socialFunctions.linkedin
        },
        {
          name: "XING",
          image: require("@/assets/social/xing.png"),
          share: socialFunctions.xing
        },
        {
          name: "Facebook",
          image: require("@/assets/social/facebook.svg"),
          share: socialFunctions.facebook
        }
      ),
      openMastoIQ: false,
      mastoInstance:
        localStorage.getItem("masto_instance") || settings.defaultMastoInstance
    };
  },
  props: {
    id: String,
    title: String
  },
  methods: {
    shareWith(func: Function) {
      switch (func(this.title, this.id)) {
        case 0:
          console.log("Error???");
          this.shareSheet = false;
          break;
        case 1:
          this.shareSheet = false;
          break;
        case 2:
          this.openMastoIQ = true;
          break;
        default:
      }
      //this.shareSheet = false;
    },
    shareMasto() {
      if (!this.mastoInstance.endsWith("/")) this.mastoInstance += "/";
      localStorage.setItem("masto_instance", this.mastoInstance);
      const url = `${this.mastoInstance}share?text=${encodeURIComponent(
        `${
          this.title
        }\n\n${`${settings.root}/read/${this.id}`}\n\nfrom @sp1rit@social.privacytools.io`
      )}`;
      const win = window.open(url, "_blank");
      if (win) {
        win.focus;
        this.shareSheet = false;
      }
    }
  }
});
</script>
