const pageuri = "http://localhost:8080";

interface ShareablePlattform {
  name: string;
  image?: string;
  icon?: string;
  share(title: string, id: string): number;
}

const socialFunctions = {
  clipboard(title: string, id: string): number {
    const tel = document.createElement("input");
    try {
      tel.type = "text";
      document.body.appendChild(tel);
      tel.value = `${pageuri}/read/${id}`;
      tel.select();
      const cr = document.execCommand("copy");
      document.body.removeChild(tel);
      return +cr;
    } catch (err) {
      document.body.removeChild(tel);
      console.error(err);
      return +false;
    }
  },
  email(title: string, id: string): number {
    const win = window.open(
      `mailto:?subject=${title}&body=${pageuri}/read/${id}`
    );
    win?.close();
    return win ? +true : +false;
  },
  diaspora(title: string, id: string): number {
    const win = window.open(
      `https://share.diasporafoundation.org?title=${encodeURIComponent(
        title
      )}&url=${encodeURIComponent(`${pageuri}/read/${id}`)}`,
      "_blank"
    );
    win?.focus();
    return win ? +true : +false;
  },
  hackernews(title: string, id: string): number {
    const win = window.open(
      `https://news.ycombinator.com/submitlink?t=${encodeURIComponent(
        title
      )}&u=${encodeURIComponent(`${pageuri}/read/${id}`)}`,
      "_blank"
    );
    win?.focus();
    return win ? +true : +false;
  },
  reddit(title: string, id: string): number {
    const win = window.open(
      `https://www.reddit.com/submit?title=${encodeURIComponent(
        title
      )}&url=${encodeURIComponent(`${pageuri}/read/${id}`)}`,
      "_blank"
    );
    win?.focus();
    return win ? +true : +false;
  },
  twitter(title: string, id: string): number {
    const win = window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        title
      )}&url=${encodeURIComponent(`${pageuri}/read/${id}`)}&via=sp1ritCS`,
      "_blank"
    );
    win?.focus();
    return win ? +true : +false;
  },
  linkedin(title: string, id: string): number {
    const win = window.open(
      `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
        `${pageuri}/read/${id}`
      )}&mini=true`,
      "_blank"
    );
    win?.focus();
    return win ? +true : +false;
  },
  xing(title: string, id: string): number {
    const win = window.open(
      `https://www.xing.com/app/user?op=share&title=${encodeURIComponent(
        title
      )}&url=${encodeURIComponent(`${pageuri}/read/${id}`)}`,
      "_blank"
    );
    win?.focus();
    return win ? +true : +false;
  },
  facebook(title: string, id: string): number {
    const win = window.open(
      `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
        `${pageuri}/read/${id}`
      )}`,
      "_blank"
    );
    win?.focus();
    return win ? +true : +false;
  }
};

export { ShareablePlattform, socialFunctions };
