<script setup>
import { RouteLink, useRoute } from "vuepress/client";
const props = defineProps({
  /** Tag items */
  tags: {
    type: Object,
    required: true,
  },
});

const route = useRoute();
</script>

<template>
  <div class="tag-wrapper">
    <RouteLink
      v-for="({ items, path }, name) in tags"
      :key="name"
      :to="path"
      :active="route.path === path"
      class="tag"
    >
      {{ name }}
      <span class="tag-num">
        {{ items.length }}
      </span>
    </RouteLink>
  </div>
</template>

<style lang="scss" scoped>
.tag-wrapper {
  padding-top: 1rem;
  max-width: var(--content-width);
  margin: 0 auto;
  font-size: 0.8rem;

  a {
    color: inherit;
  }

  .tag {
    display: inline-block;
    vertical-align: middle;

    overflow: hidden;

    margin: 0.4rem;
    padding: 0.4rem 0.8rem;
    border-radius: 100vh;
    border: 1px solid;

    line-height: 0.8rem;

    cursor: pointer;

    transition: background 0.3s, color 0.3s;

    .tag-num {
      display: inline-block;

      border-radius: 0.6rem;

      text-align: center;
    }

    &.route-link-active {
      background: var(--vp-c-accent);
      color: var(--vp-c-bg);
    }

    &:hover:not(.route-link-active) {
      box-shadow: 0 0 0 1px var(--vp-c-border-hard);
    }
  }
}
</style>
