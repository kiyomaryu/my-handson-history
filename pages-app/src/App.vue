<template>
  <div id="app">
      <FieldView></FieldView>
      <PostView v-for="key in posts" :key="key"></PostView>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FieldView from "./components/FieldView.vue";
import PostView from "./components/PostView.vue";

export default defineComponent({
    name: 'App',
    components: {
        PostView,
        FieldView
    },
    data: () => {
        return {
            posts: [] as string[]
        }
    }
})
</script>

<style>
.row {
    margin-bottom: 0.75em;
}
</style>