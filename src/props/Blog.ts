import showdown from "showdown";
import xssFilter from "showdown-xss-filter";

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace GitHubSearchResp {
	export interface Owner {
		login: string;
		id: number;
		node_id: string;
		avatar_url: string;
		gravatar_id: string;
		url: string;
		html_url: string;
		followers_url: string;
		following_url: string;
		gists_url: string;
		starred_url: string;
		subscriptions_url: string;
		organizations_url: string;
		repos_url: string;
		events_url: string;
		received_events_url: string;
		type: string;
		site_admin: boolean;
	}

	export interface Repository {
		id: number;
		node_id: string;
		name: string;
		full_name: string;
		private: boolean;
		owner: Owner;
		html_url: string;
		description?: any;
		fork: boolean;
		url: string;
		forks_url: string;
		keys_url: string;
		collaborators_url: string;
		teams_url: string;
		hooks_url: string;
		issue_events_url: string;
		events_url: string;
		assignees_url: string;
		branches_url: string;
		tags_url: string;
		blobs_url: string;
		git_tags_url: string;
		git_refs_url: string;
		trees_url: string;
		statuses_url: string;
		languages_url: string;
		stargazers_url: string;
		contributors_url: string;
		subscribers_url: string;
		subscription_url: string;
		commits_url: string;
		git_commits_url: string;
		comments_url: string;
		issue_comment_url: string;
		contents_url: string;
		compare_url: string;
		merges_url: string;
		archive_url: string;
		downloads_url: string;
		issues_url: string;
		pulls_url: string;
		milestones_url: string;
		notifications_url: string;
		labels_url: string;
		releases_url: string;
		deployments_url: string;
	}

	export interface Item {
		name: string;
		path: string;
		sha: string;
		url: string;
		git_url: string;
		html_url: string;
		repository: Repository;
		score: number;
	}

	export interface RootObject {
		total_count: number;
		incomplete_results: boolean;
		items: Item[];
	}
}

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace GitHubResp {
	export interface Links {
		self: string;
		git: string;
		html: string;
	}

	export interface RootObject {
		name: string;
		path: string;
		sha: string;
		size: number;
		url: string;
		html_url: string;
		git_url: string;
		download_url: string;
		type: string;
		_links?: Links;
	}
}

interface StoredPost {
	id: string;
	body: string;
}

class BlogPostContent {
	id: string;
	title: string;
	body: Promise<unknown>;
	constructor(id: string, title: string, body: Promise<unknown>) {
		this.id = id;
		this.title = title;
		this.body = body;
	}
}

class BlogPost {
	content: BlogPostContent;
	constructor(
		id: string,
		name: string,
		uri: string,
		converter: showdown.Converter,
		postcache: Array<StoredPost>
	) {
		const statePost = postcache.find(post => post.id === id);
		const body = statePost
			? this.toMarkdown(statePost, converter)
			: this.getContentViaReq(id, uri, converter);
		this.content = new BlogPostContent(id, name, body);
		//let content =
	}
	toMarkdown(statePost: StoredPost, converter: showdown.Converter) {
		return new Promise(resolve => {
			resolve(converter.makeHtml(statePost.body));
		});
	}
	getContentViaReq(id: string, uri: string, converter: showdown.Converter) {
		return new Promise((resolve, reject) => {
			this.fetchReq(uri)
				.then(post => {
					this.cachePost(id, post);
					resolve(converter.makeHtml(post));
				})
				.catch(err =>
					reject(`Error while requesting Posts, HTTP ${err}`)
				);
		});
	}
	async cachePost(id: string, post: string) {
		const sp: StoredPost = {
			id: id,
			body: post,
		};
		/* store.dispatch("addPost", {
			post: sp
		}); */
		const lt: Array<StoredPost> = JSON.parse(
			localStorage.getItem("postcache") || "[]"
		);
		lt.push(sp);
		localStorage.setItem("postcache", JSON.stringify(lt));
	}
	async fetchReq(uri: string) {
		const res = await fetch(uri);
		if (res.ok) {
			return await res.text();
		} else {
			throw res.status;
		}
	}
}

class GHPostList {
	list: Promise<Array<GitHubResp.RootObject>>;
	cachedList: Promise<Array<GitHubResp.RootObject>>;
	constructor() {
		const uri =
			"https://api.github.com/repos/sp1ritCS/blog/contents/content";
		this.cachedList = new Promise(resolve => {
			const cache = localStorage.getItem("postindexcache");
			if (cache) {
				resolve(JSON.parse(cache));
			}
		});
		this.list = new Promise((resolve, reject) => {
			this.queryGH(uri)
				.then(ghPosts => {
					resolve(ghPosts);
				})
				.catch(err => reject(`Error: HTTP ${err}`));
		});
	}
	async queryGH(uri: string) {
		const req = await fetch(uri);
		if (req.ok) {
			const parsed = await req.json();
			localStorage.setItem("postindexcache", JSON.stringify(parsed));
			return parsed;
		} else {
			throw req.status;
		}
	}
	getPostById(id: string, list: Array<GitHubResp.RootObject>) {
		return list.find(post => post.sha == id);
	}
	sortPostsByNewest(list: Array<GitHubResp.RootObject>) {
		list.sort((a: GitHubResp.RootObject, b: GitHubResp.RootObject) => {
			return Number(b.name.split(".")[0]) - Number(a.name.split(".")[0]);
		});
		return list;
	}
}

class BlogPostFactory {
	postcache: Array<StoredPost>;
	converter: showdown.Converter;
	constructor() {
		this.postcache = JSON.parse(localStorage.getItem("postcache") || "[]");

		this.converter = new showdown.Converter({
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
			extensions: [xssFilter],
		});
	}
	createBlogPost(post: GitHubResp.RootObject) {
		return new BlogPost(
			post.sha,
			post.name.split(".")[1],
			post.download_url,
			this.converter,
			this.postcache
		);
	}
}

export default BlogPost;
export {
	BlogPost,
	BlogPostContent,
	GitHubResp,
	GitHubSearchResp,
	StoredPost,
	GHPostList,
	BlogPostFactory,
};
