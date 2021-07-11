<template>
	<div>
		<v-dialog v-model="ccDiag" width="444">
			<template v-slot:activator="{ on, attrs }">
				<v-navigation-drawer v-model="drawer" app clipped>
					<v-list dense :shaped="true" nav>
						<v-list-item-group
							v-model="currentPage"
							:mandatory="true"
							color="primary"
							subheader
						>
							<v-subheader inset>Navigation</v-subheader>
							<v-list-item link @click="goto('/', 0)">
								<v-list-item-action>
									<v-icon>{{ icons.read }}</v-icon>
								</v-list-item-action>
								<v-list-item-content>
									<v-list-item-title
										>Blog posts</v-list-item-title
									>
								</v-list-item-content>
							</v-list-item>
							<v-list-item link @click="goto('/me', 1)">
								<v-list-item-action>
									<v-icon>{{ icons.me }}</v-icon>
								</v-list-item-action>
								<v-list-item-content>
									<v-list-item-title
										>Contact Me</v-list-item-title
									>
								</v-list-item-content>
							</v-list-item>
						</v-list-item-group>
						<v-divider class="grp-divider" />
						<v-list-item-group subheader>
							<v-subheader inset>Settings</v-subheader>
							<v-list-item
								@click="
									$vuetify.theme.dark = !$vuetify.theme.dark
								"
							>
								<v-list-item-action>
									<v-icon>{{ icons.darkmode }}</v-icon>
								</v-list-item-action>
								<v-list-item-content>
									<v-list-item-title
										>Darkmode</v-list-item-title
									>
								</v-list-item-content>
								<v-list-item-action>
									<!--
			 							Tripple theme update: If a user clicks the button, not only will it's attached model change,
										but the @click action of the list item will be executed too. This means nothing will happen,
										as it is toggled by the button and by the @click action. To "prevent" this from happening,
										we'll add another @click action onto the switch.
									-->
									<v-switch
										@click="$vuetify.theme.dark = !$vuetify.theme.dark"
										v-model="$vuetify.theme.dark"
										hide-details
										inset
									></v-switch>
								</v-list-item-action>
							</v-list-item>
						</v-list-item-group>
						<v-list-item-group>
							<v-list-item
								color="error"
								class="v-list-item--active"
								v-bind="attrs"
								v-on="on"
							>
								<v-list-item-action>
									<v-icon>{{ icons.delete }}</v-icon>
								</v-list-item-action>
								<v-list-item-content>
									<v-list-item-title
										>Clear cache</v-list-item-title
									>
								</v-list-item-content>
							</v-list-item>
						</v-list-item-group>
					</v-list>
				</v-navigation-drawer>
				<v-bottom-navigation
					class="hidden-md-and-up"
					v-model="currentPage"
					grow
					color="primary"
					absolute
				>
					<v-btn @click="goto('/', 0)">
						<span>Blog posts</span>
						<v-icon>{{ icons.read }}</v-icon>
					</v-btn>
					<v-btn @click="goto('/me', 1)">
						<span>Contact me</span>
						<v-icon>{{ icons.me }}</v-icon>
					</v-btn>
					<v-dialog v-model="settingsDiag" width="500">
						<template v-slot:activator="{ on, attrs }">
							<v-btn v-bind="attrs" v-on="on">
								<span>Settings</span>
								<v-icon>{{ icons.cog }}</v-icon>
							</v-btn>
						</template>
						<v-card>
							<v-card-title class="headline primary white--text">
								Settings
							</v-card-title>
							<v-list>
								<v-list-item-group color="primary">
									<v-list-item v-model="$vuetify.theme.dark">
										<v-list-item-action>
											<v-icon>{{
												icons.darkmode
											}}</v-icon>
										</v-list-item-action>
										<v-list-item-content>
											<v-list-item-title
												>Darkmode</v-list-item-title
											>
										</v-list-item-content>
										<v-list-item-action>
											<v-switch
												v-model="$vuetify.theme.dark"
												hide-details
												inset
											></v-switch>
										</v-list-item-action>
									</v-list-item>
									<v-list-item
										color="error"
										class="v-list-item--active"
										v-bind="attrs"
										v-on="on"
									>
										<v-list-item-action>
											<v-icon>{{ icons.delete }}</v-icon>
										</v-list-item-action>
										<v-list-item-content>
											<v-list-item-title
												>Clear cache</v-list-item-title
											>
										</v-list-item-content>
									</v-list-item>
								</v-list-item-group>
							</v-list>

							<v-divider></v-divider>

							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn
									color="primary"
									text
									@click="closeSettings()"
								>
									Close
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-dialog>
				</v-bottom-navigation>
			</template>
			<v-card>
				<v-card-title class="headline warning lighten-2">
					Are you sure?
				</v-card-title>
				<br />
				<v-card-text>
					If you clear the cache, you need an Internet connection to
					read articles again.
				</v-card-text>

				<v-divider></v-divider>

				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="primary" text @click="ccDiag = false">
						Close
					</v-btn>
					<v-btn color="error" text @click="clearCache()">
						Clear cache
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
		<!-- <NavDrawer :drawer="drawer" /> -->
		<v-app-bar app color="primary" dark clipped-left>
			<v-app-bar-nav-icon
				@click.stop="drawer = !drawer"
				aria-label="Open Sidebar"
				class="hidden-sm-and-down"
			></v-app-bar-nav-icon>
			<div class="d-flex align-center" @click="goto('/', 0)">
				<v-img
					alt="sp1rit Logo"
					class="shrink mr-2"
					contain
					src="@/assets/logo.svg"
					transition="scale-transition"
					width="40"
				/>
				<h2 class="shrink mt-1 hidden-sm-and-down">sp1rit's Blog</h2>
			</div>

			<v-spacer></v-spacer>

			<v-btn :href="rssFeedLoc" rel="noreferrer" target="_blank" text>
				<span class="mr-2">RSS Feed</span>
				<v-icon>{{ icons.rss }}</v-icon>
			</v-btn>
		</v-app-bar>
	</div>
</template>

<style lang="scss" scoped>
.grp-divider {
	margin-top: 5px;
}
</style>

<script lang="ts">
import Vue from "vue";
import settings from "@/props/Settings.ts";
import {
	mdiRss,
	mdiBookOpenBlankVariant,
	mdiAccountCircleOutline,
	mdiEyeSettings,
	mdiDeleteOutline,
	mdiCogOutline,
} from "@mdi/js";

function hightlightActive(route) {
	switch (route) {
	case "Overview":
		return 0;
	case "Read Blogentry":
		return 0;
	case "Contact me":
		return 1;
	default:
		return -1;
	}
}

export default Vue.extend({
	name: "Header",
	data() {
		return {
			drawer: false,
			currentPage: hightlightActive(this.$route.name),
			rssFeedLoc: settings.rssFeedLoc,
			settingsDiag: false,
			settingsDiagMod: 1,
			ccDiag: false,
			icons: {
				rss: mdiRss,
				read: mdiBookOpenBlankVariant,
				me: mdiAccountCircleOutline,
				darkmode: mdiEyeSettings,
				delete: mdiDeleteOutline,
				cog: mdiCogOutline,
			},
		};
	},
	methods: {
		goto(path: string, pos: number) {
			this.$router.push(path, () => {
				this.currentPage = pos;
			});
		},
		closeSettings() {
			this.currentPage = hightlightActive(this.$route.name);
			this.settingsDiag = false;
		},
		clearCache() {
			localStorage.removeItem("postcache");
			localStorage.removeItem("postindexcache");
			this.ccDiag = false;
		},
	},
	mounted: function() {
		this.$watch(
			function() {
				return this.$route;
			},
			function(route) {
				this.currentPage = hightlightActive(route.name);
			}
		);
		this.$watch(
			function() {
				return this.settingsDiag;
			},
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			function(_state: boolean) {
				this.currentPage = hightlightActive(this.$route.name);
			}
		);
	},
});
</script>
