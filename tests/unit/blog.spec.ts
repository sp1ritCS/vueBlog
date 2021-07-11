import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import BlogPostPrev from "@/components/blog/BlogPostPreview.vue";
import { BlogPostContent } from "@/props/Blog";

describe("BlogPostContent.vue", () => {
	it("shows the blogpost", () => {
		const pseudoContent: BlogPostContent = {
			id: "b6c417ae-31ab-47d8-bff5-d4fbfc4ea03a",
			title: "Psudo Blogpost",
			body: new Promise(resolve => {
				resolve(
					`"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ligula sem, vestibulum eget lobortis sit amet, vehicula eget lorem. Duis sodales est eget eleifend scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum arcu mauris, sollicitudin sit amet aliquam vel, efficitur sit amet turpis. Suspendisse ultrices facilisis vulputate. Integer laoreet accumsan nibh, laoreet volutpat augue iaculis faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec turpis orci. Vestibulum elementum eleifend enim at malesuada. In hac habitasse platea dictumst. Morbi ultricies purus tempus dolor porta dictum."`
				);
			}),
		};
		const wrapper = shallowMount(BlogPostPrev, {
			propsData: { size: 1337, content: pseudoContent },
		});
		expect(wrapper.text()).to.include(pseudoContent.title);
	});
});
