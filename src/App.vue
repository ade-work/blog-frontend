<template>
  <div id="app">
    <application-bar />
    <router-view class="content" />
  </div>
</template>


<script>
import ApplicationBar from "@/components/ui/ApplicationBar";


export default {
  components: {ApplicationBar}
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.content {
  padding-top: 5.5vh;
  padding-left: 10%;
}

</style>
