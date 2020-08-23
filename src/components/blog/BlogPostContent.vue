<template>
  <v-card class="mx-auto">
    <v-card-text>
      <v-breadcrumbs :items="crumbs">
        <template v-slot:divider>
          <v-icon>{{ icons[0] }}</v-icon>
        </template>
      </v-breadcrumbs>
      <v-container>
        <div v-html="body"></div>
        <v-skeleton-loader v-if="body == null" ref="skeleton" type="article" />
      </v-container>
    </v-card-text>
    <v-divider />
    <v-card-actions>
      <v-spacer></v-spacer>
      <Share :id="content.id" :title="content.title" />
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { BlogPostContent } from "@/props/Blog";
import Share from "@/components/Share.vue";
import { mdiChevronRight } from "@mdi/js";
export default Vue.extend({
  name: "BlogEntry",
  data() {
    return {
      body: null as unknown,
      crumbs: [
        {
          text: "Overview",
          disabled: false,
          to: {
            path: "/"
          }
        },
        {
          text: this.content.title,
          disabled: true,
          href: "#"
        }
      ],
      icons: [mdiChevronRight]
    };
  },
  components: {
    Share
  },
  props: {
    content: BlogPostContent
  },
  mounted() {
    this.content.body.then((body: any) => {
      this.body = body;
    });
  }
});
</script>

<style lang="scss" scoped></style>
