<template>
  <div class="nav_container">
    <searchBar class="search_bar">

    </searchBar>
    <div class="list_container">

      <div class="nav_list">
        <div class="nav_item  " v-for="item in nav_list" :key="item.name" @click="routeTo(item.route)">{{ item.name }}
        </div>
      </div>
    </div>
    <div class="media_icons">

    </div>
  </div>
</template>

<script>
import searchBar from "@/components/util/SearchBar";

export default {
  name: "Navigation",
  components: {
    searchBar,
  },
  data() {
    return {
      nav_list: [
        {name: "Home", route: "/"},
        {name: "Blog", route: "/blog"},
        {name: "General College", route: "/general"},
        {name: "Extracurriculars", route: "/ecs"},
        {name: "Academics", route: "/academics"},
        {name: "Additional Information and Resources", route: "/resources"},
      ]
    }
  },
  methods: {
    routeTo(location) {
      this.$router.push(location);
    }

  }
}
</script>

<style scoped>
.nav_container {
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: #D9D9D9;
  height: 106px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.search_bar {
  width: 10%;
}

.list_container {
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  width: 60%;
}


.nav_list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0;
  height: 100%;
  padding: 0;
}

.nav_item {
  height: 100%;
  width: 20%;
  text-align: center;
  display: flex;
  align-items: center;
   justify-content: center;
  user-select:none;
}

.nav_item:hover {
  background-color: gray;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
  transform: scale(1.1);
  transition-duration: 0.2s;
  z-index: 1;
}

.media_icons {
  width: 10%;
  height: 100%;
}
</style>