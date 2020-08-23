<template>
  <div>
    <BlogPostPreview
      v-for="post in postsGH"
      :key="post.sha"
      :size="post.size"
      :content="blogpost.createBlogPost(post).content"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BlogPostPreview from "@/components/blog/BlogPostPreview.vue";
import { GitHubResp, GHPostList, BlogPostFactory } from "@/props/Blog";
export default Vue.extend({
  name: "BlogPosts",
  data() {
    return {
      postsGH: Array<GitHubResp.RootObject>(),
      postlist: new GHPostList(),
      blogpost: new BlogPostFactory()
    };
  },
  components: {
    BlogPostPreview
  },
  methods: {
    async getPosts() {
      this.postlist.cachedList.then(postlist => {
        if (this.postsGH.length <= 0) {
          this.postsGH = this.postlist.sortPostsByNewest(postlist);
        }
      });
      this.postlist.list.then(postlist => {
        this.postsGH = this.postlist.sortPostsByNewest(postlist);
      });
    }
  },
  mounted() {
    this.getPosts();
  }
});
</script>

<style></style>
