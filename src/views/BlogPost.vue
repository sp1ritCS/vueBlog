<template>
	<div>
		<BlogPostContentComp
			v-for="post in postGH"
			:key="post.sha"
			:content="blogpost.createBlogPost(post).content"
		/>
	</div>
</template>

<script lang="ts">
import BlogPostContentComp from "@/components/blog/BlogPostContent.vue";

import { GitHubResp, GHPostList, BlogPostFactory } from "@/props/Blog";
import Vue from "vue";
export default Vue.extend({
	name: "BlogPost",
	data() {
		return {
			postGH: Array<GitHubResp.RootObject>(),
			postlist: new GHPostList(),
			blogpost: new BlogPostFactory(),
		};
	},
	components: {
		BlogPostContentComp,
	},
	props: {
		id: String,
	},
	methods: {
		async getPosts() {
			this.postlist.cachedList.then(postlist => {
				if (this.postGH.length <= 0) {
					this.postGH = Array(
						this.postlist.getPostById(this.id, postlist)!
					);
				}
			});
			this.postlist.list.then(postlist => {
				this.postGH = Array(
					this.postlist.getPostById(this.id, postlist)!
				);
			});
		},
	},
	mounted() {
		this.getPosts();
	},
});
</script>

<style lang="scss" scoped></style>
