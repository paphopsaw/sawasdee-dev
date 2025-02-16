<script setup>
defineProps({
  /** Article items */
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="article-wrapper">
    <div v-if="!items.length">Nothing in here.</div>

    <article
      v-for="{ info, path } in items"
      :key="path"
      class="article"
      @click="$router.push(path)"
    >
      <header class="title">
        {{ info.title }}
      </header>

      <div class="article-info">
        <span v-if="info.date" class="date">{{
          new Date(info.date).toLocaleDateString()
        }}</span>

        <span v-if="info.tags" class="tag"
          >Tags: {{ info.tags.join(", ") }}</span
        >
      </div>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.article-wrapper {
  max-width: var(--content-width);
  margin: 0 auto;
  text-align: center;

  padding: 0.4rem;
}

.article {
  position: relative;

  box-sizing: border-box;

  width: 100%;
  margin: 0 auto 1.25rem;
  padding: 1rem 1.25rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 0.4rem;

  text-align: start;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 0 1px var(--vp-c-border-hard);
  }

  .title {
    position: relative;

    display: inline-block;

    font-size: 1.4rem;
    font-weight: bold;
    line-height: 2rem;

    a {
      color: inherit;
    }
  }

  .article-info {
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    color: var(--vp-c-text-subtle);

    > span {
      margin-inline-end: 0.5em;
      line-height: 1.8;
    }
  }
}
</style>
