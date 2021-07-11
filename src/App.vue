<template>
	<v-app>
		<Header />

		<v-main>
			<v-container>
				<router-view />
			</v-container>
			<div class="filler" />
			<Footer />
		</v-main>
	</v-app>
</template>

<script lang="ts">
import Vue from "vue";

import Header from "@/components/ui/Header.vue";
import Footer from "@/components/ui/Footer.vue";

export default Vue.extend({
	name: "App",

	components: {
		Header,
		Footer,
	},

	methods: {},

	mounted: function() {
		this.$vuetify.theme.dark = localStorage.getItem("dark") === "true";	
		this.$watch(
			function() {
				return this.$vuetify.theme.dark
			},
			function(state: boolean) {
				localStorage.setItem("dark", state.toString());
			}
		)
	},

	data: () => ({}),
});
</script>

<style lang="scss" scoped>
.filler {
	display: block;
	height: 56px;
}
</style>
