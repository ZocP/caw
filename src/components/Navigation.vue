<template>
  <div class="nav_container">
    <searchBar class="search_bar">

    </searchBar>
    <div class="list_container">
      <ul class="list">
        <li>Home</li>
        <li>About</li>
        <li>General College</li>
        <li>Extracurriculars</li>
        <li>Academics</li>
        <li>Additional Information and Resources</li>
      </ul>
    </div>
    <div class="media_icons">

    </div>
  </div>
</template>

<script>
import searchBar from "@/components/util/SearchBar";
export default {
  name: "Navigation",
  components:{
    searchBar,
  }
}
</script>

<style scoped>
.nav_container{
  position:sticky;
  top:0;
  z-index: 99;
  background-color: #D9D9D9;
  height: 106px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
}
.search_bar{
  width: 10%;
}
.list_container{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 60%;
}
.list{
  font-size: 12px;
  font-family: 'Inter';
  line-height: 15px;
  list-style-type: none;
}
ul{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0;
  height: 80%;
  padding: 0;
}
li{
  height: 50%;
  width: 30%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.media_icons{
  width: 10%;
  height: 100%;
}
@media width{

}
</style>