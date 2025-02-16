<script setup>
import { useBlogType, useBlogCategory } from "@vuepress/plugin-blog/client";
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
import ArticleList from "../components/ArticleList.vue";
import TagList from "../components/TagList.vue";
import { RouteLink, useRoute } from "vuepress/client";

const route = useRoute();
const articles = useBlogType("articles");
const tagMap = useBlogCategory("tags");
</script>

<template>
  <ParentLayout>
    <template #page>
      <main class="vp-page">
        <TagList :tags="tagMap.map" />
        <ArticleList :items="articles.items" />
      </main>
    </template>
  </ParentLayout>
</template>
