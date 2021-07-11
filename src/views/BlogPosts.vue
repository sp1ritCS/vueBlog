<template>
	<div>
		<!--<Search v-on:results="searchLimit = $event"/> Not good atm, GH Ratelimiting issues-->
		<BlogPostPreview
			v-for="post in postsGH.slice(10 * page - 10, 10 * page)"
			:key="post.sha"
			:size="post.size"
			:content="blogpost.createBlogPost(post).content"
		/>
		<div class="text-center">
			<v-pagination
				v-model="page"
				:length="Math.ceil(postsGH.length / 10)"
				:total-visible="7"
			></v-pagination>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import BlogPostPreview from "@/components/blog/BlogPostPreview.vue";
/* import Search from "@/components/ui/Search.vue"; */
import { GitHubResp, GHPostList, BlogPostFactory } from "@/props/Blog";
export default Vue.extend({
	name: "BlogPosts",
	data() {
		return {
			page: 1,
			searchLimit: Array<string>(),
			postsGH: Array<GitHubResp.RootObject>(),
			postlist: new GHPostList(),
			blogpost: new BlogPostFactory(),
		};
	},
	components: {
		BlogPostPreview,
		/* Search */
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
		},
		/* filterPosts(posts: Array<GitHubResp.RootObject>) {
      if (this.searchLimit.length > 0) {
        return posts.filter(post => this.searchLimit.includes(post.sha))
      } else if(this.searchLimit == null) {
        return [];
      } else {
        return posts;
      }
    } */
	},
	mounted() {
		document.title = "sp1rit's Blog"
		this.getPosts();
	},
});
</script>

<style></style>
