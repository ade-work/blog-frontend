<template>
  <div class="container">
    <h1>{{ user.username }}</h1>
    <p>{{ user.description }}</p>
    <post-list :posts="userPost" title="Last Posts"/>
  </div>
</template>
<script>
import PostList from "../components/PostList.vue";

export default {
  components: {PostList},
  props: {
    userid: {type: String, default: ""}
  },
  data() {
    return {}
  },
  computed: {
    user() {
      return this.$store.getters["users/getUser"](this.userid)
    },

    userPost() {
      return this.$store.getters["posts/userPosts"](this.user.username);
    }
  }
};
</script>
