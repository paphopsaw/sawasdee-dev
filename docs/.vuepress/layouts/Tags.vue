<script setup>
import { useBlogCategory } from "@vuepress/plugin-blog/client";
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
import ArticleList from "../components/ArticleList.vue";
import TagList from "../components/TagList.vue";

const tagMap = useBlogCategory("tags");
</script>

<template>
  <ParentLayout>
    <template #page>
      <main class="vp-page">
        <TagList :tags="tagMap.map" />
        <ArticleList :items="tagMap.currentItems ?? []" />
      </main>
    </template>
  </ParentLayout>
</template>
