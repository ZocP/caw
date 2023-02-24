<template>
  <div id="app">
    <navi>
    </navi>
    <router-view>

    </router-view>
  </div>
</template>

<script>
import navigation from "@/components/util/Navigation";
export default {
  name: 'App',
  components: {
    "navi": navigation,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
html{
  overflow: hidden;
  overflow-y: scroll;
}
::-webkit-scrollbar {
  display: none;
}
</style>
