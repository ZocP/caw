<template>
  <navi>
  </navi>
  <div class="home_container">
    <div class="inner_container">
      <div class="rotate_pic">
        <img :src=pic alt="cannot find the picture!">
      </div>
      <div class="addition_text">
        <p>{{addition_info}}</p>
      </div>
      <div class="info_section">
        <div class="info" v-for="data in sections" :key="data.name">
          {{data.name}}
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import picture from "../assets/main_rotate.png"
import Navigation from "@/components/Navigation";
export default {
  name: "Home",
  data(){
    return{
      pic:picture,
      addition_info:"Additional Information about the website and what we do",
      sections:[
        {name:"General", pic:""},
        {name:"Academics", pic:""},
        {name:"ECS", pic:""},
      ]
    }
  },
  components: {
    "navi": Navigation,
  }
}
</script>

<style scoped>
.inner_container{
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
}
.home_container{
  overflow: hidden;
  display: flex;
  justify-content: center;
  width: 100vw;
  align-items: center;
}
.rotate_pic{
  overflow: hidden;
}
.addition_text{
  height: 50px;
}
.info_section{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width:100%;
}
.info{
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: darkgray;
  width:25%;

}
</style>