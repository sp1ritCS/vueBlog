<template>
  <div>
    <BlogPostContentComp
      v-for="post in postGH"
      :key="post.sha"
      :content="createBlogPost(post).content"
    />
  </div>
</template>

<script lang="ts">
import BlogPostContentComp from "@/components/blog/BlogPostContent.vue";

import { BlogPost, GitHubResp } from "@/props/Blog";
import showdown from "showdown";
import xssFilter from "showdown-xss-filter";
import Vue from "vue";
export default Vue.extend({
  name: "BlogPost",
  data() {
    return {
      postGH: Array,
      postcache: JSON.parse(localStorage.getItem("postcache") || "[]"),
      converter: new showdown.Converter({
        parseImgDimensions: true,
        simplifiedAutoLink: true,
        excludeTrailingPunctuationFromURLs: true,
        literalMidWordUnderscores: true,
        strikethrough: true,
        tables: true,
        tablesHeaderId: true,
        tasklists: true,
        ghMentions: true,
        smartIndentationFix: true,
        simpleLineBreaks: true,
        extensions: [xssFilter]
      })
    };
  },
  components: {
    BlogPostContentComp
  },
  props: {
    id: String
  },
  methods: {
    async getPosts() {
      const uri = "https://api.github.com/repos/sp1ritCS/blog/contents/content";
      const req = await fetch(uri);
      if (req.ok) {
        const postsGH = await req.json();
        const postGH: GitHubResp.RootObject = postsGH.find(
          post => post.sha == this.id
        );
        if (!postGH) {
          console.error("Blog entry not found");
        } else {
          // eslint-disable-next-line
            // @ts-ignore
          this.postGH = new Array<GitHubResp.RootObject>(postGH);
        }
      }
    },
    createBlogPost(post: GitHubResp.RootObject) {
      return new BlogPost(
        post.sha,
        post.name.split(".")[1],
        post.download_url,
        this.converter,
        this.postcache
      );
    }
  },
  mounted() {
    this.getPosts();
  }
});
</script>

<style lang="scss" scoped></style>
