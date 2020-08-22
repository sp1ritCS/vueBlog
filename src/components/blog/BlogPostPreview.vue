<template>
  <div>
    <p class="softtitle">{{ content.title }}</p>
    <div v-html="body"></div>
    <v-skeleton-loader v-if="body == null" ref="skeleton" type="article" />
    <v-divider />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { BlogPostContent } from "@/props/Blog";
export default Vue.extend({
  name: "BlogEntry",
  data() {
    return {
      body: null as unknown
    };
  },
  props: {
    content: BlogPostContent
  },
  mounted() {
    this.content.body.then((body: any) => {
      let prev = body.substring(0, 256);
      if (prev !== body) prev += "...";
      this.body = prev;
    });
  }
});
</script>

<style lang="scss" scoped>
.softtitle {
  margin-top: 1rem;
}
</style>
