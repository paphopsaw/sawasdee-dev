import { defineClientConfig } from "vuepress/client";
import Post from "./layouts/Post.vue";
import Articles from "./layouts/Articles.vue";
import Tags from "./layouts/Tags.vue";

export default defineClientConfig({
  // we provide some blog layouts
  layouts: {
    Post,
    Articles,
    Tags,
  },
});
