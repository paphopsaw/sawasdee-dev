<script setup>
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
</script>

<template>
  <ParentLayout>
    <template #page-content-top>
      <div>
        <h1>{{ $page.title }}</h1>
        <h2>{{ new Date($page.frontmatter.date).toLocaleDateString() }}</h2>
      </div>
    </template>
  </ParentLayout>
</template>
<style lange="scss" scoped>
h2 {
  font-size: 1em;
  border: none;
  padding-top: calc(var(--header-offset));
  font-weight: normal;
  font-style: italic;
}
</style>
