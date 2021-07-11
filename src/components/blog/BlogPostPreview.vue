<template>
	<v-card class="mx-auto previewCard" @click="gotoArtcl(content.id)">
		<v-card-text>
			<p class="softtitle">
				<span class="primary--text">{{ content.title }}</span> ({{
					humanSize
				}})
			</p>
			<v-container>
				<div v-html="body"></div>
				<v-skeleton-loader
					v-if="body == null"
					ref="skeleton"
					type="article"
				/>
			</v-container>
		</v-card-text>
	</v-card>
</template>

<script lang="ts">
import Vue from "vue";
import filesize from "filesize";
import { BlogPostContent } from "@/props/Blog";
export default Vue.extend({
	name: "BlogPostPreview",
	data() {
		return {
			body: null as unknown,
			humanSize: filesize(this.size),
		};
	},
	props: {
		size: Number,
		content: BlogPostContent,
	},
	methods: {
		gotoArtcl(id: string) {
			this.$router.push({ path: `read/${id}` });
		},
	},
	mounted() {
		this.content.body.then((body: any) => {
			let prev = body.substring(0, 256);
			if (prev !== body) prev += "...";
			this.body = prev;
		});
	},
});
</script>

<style lang="scss" scoped>
.softtitle {
	margin-top: 0.5rem;
}
.previewCard {
	margin-bottom: 1.5rem;
}
</style>
