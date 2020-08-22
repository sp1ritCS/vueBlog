import showdown from "showdown";

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
    _links: Links;
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
    postcahe: Array<StoredPost>
  ) {
    const statePost = postcahe.find(post => post.id === id);
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
        .catch(err => reject(`Error while requesting Posts, HTTP ${err}`));
    });
  }
  async cachePost(id: string, post: string) {
    const sp: StoredPost = {
      id: id,
      body: post
    };
    /* store.dispatch("addPost", {
        post: sp
      }); */
    const lt: Array<StoredPost> = JSON.parse(
      localStorage.getItem("postcache") || "[]"
    );
    lt.push(sp);
    localStorage.setItem("postcache", JSON.stringify(lt));
    console.log("Stored");
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

export default BlogPost;
export { BlogPost, BlogPostContent, GitHubResp, StoredPost };
