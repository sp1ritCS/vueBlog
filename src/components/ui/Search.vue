<template>
	<v-text-field label="Search" v-model="searchReq">
		<v-icon slot="prepend">{{ icons.search }}</v-icon>
	</v-text-field>
</template>

<script lang="ts">
import Vue from "vue";
import { mdiCloudSearchOutline } from "@mdi/js";
import { GitHubSearchResp } from "@/props/Blog.ts";
export default Vue.extend({
	name: "Search",
	data() {
		return {
			searchReq: "",
			icons: {
				search: mdiCloudSearchOutline,
			},
		};
	},
	methods: {
		async searchGh(search: string) {
			const req = await fetch(
				`https://api.github.com/search/code?q=extension:md+repo:sp1ritCS/blog+${search}`
			);
			if (req.ok) {
				return await req.json();
			} else {
				throw req.status;
			}
		},
		async ghRes(res: GitHubSearchResp.RootObject) {
			const ids = Array<string>();
			res.items.forEach(item => {
				ids.push(item.sha);
			});
			this.$emit("results", ids.length > 0 ? ids : null);
		},
	},
	updated() {
		if (this.searchReq.length > 0) {
			this.searchGh(this.searchReq)
				.then(res => this.ghRes(res))
				.catch(err => console.error(err));
		} else {
			this.$emit("results", []);
		}
		console.log("Called");
	},
});
</script>
