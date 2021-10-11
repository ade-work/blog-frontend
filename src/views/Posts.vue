<template>
  <div class="posts">
    <h1>Posts</h1>
    <post-list :posts="posts" />
  </div>
</template>
<script>
import PostList from "../components/PostList.vue";

export default {
  name: "Posts",
  components: {PostList},
  data: function () {
    return {}
  },
  computed: {
    posts(){
      return this.$store.getters["posts/allPosts"]
    }
  }
};

</script>

<style scoped>

</style>
