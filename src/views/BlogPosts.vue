<template>
  <div>
    <BlogPostPreview
      v-for="post in postsGH"
      :key="post.sha"
      :content="createBlogPost(post).content"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BlogPostPreview from "@/components/blog/BlogPostPreview.vue";
import { BlogPost, GitHubResp } from "@/props/Blog";
import showdown from "showdown";
import xssFilter from "showdown-xss-filter";
export default Vue.extend({
  name: "BlogPosts",
  data() {
    return {
      postsGH: Array,
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
    BlogPostPreview
  },
  methods: {
    async getPosts() {
      const uri = "https://api.github.com/repos/sp1ritCS/blog/contents/content";
      const req = await fetch(uri);
      if (req.ok) {
        const postsGH = await req.json();
        postsGH.sort((a: GitHubResp.RootObject, b: GitHubResp.RootObject) => {
          return Number(b.name.split(".")[0]) - Number(a.name.split(".")[0]);
        });
        this.postsGH = postsGH;
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

<style></style>
