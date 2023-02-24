<template>

  <div class="blog_container">
    <div class="blog_head">
      <h1>Welcome To our blog!</h1>
      <h2>Read articles about college admissions written by our team</h2>
    </div>
    <div class="article_container">
      <div class="article_piece" v-for="data in articles" :key="data.name">
        <div class="article_cover_pic">
          <img :src="data.cover_pic" alt="N/A">
        </div>
        <div class="article_info">
          <div class="author_info">
            <img :src="data.user_profile_pic">
            <p class="author_name">{{data.author}}</p>
            <p class="date">{{data.date}}</p>
          </div>
          <div class="article_title">
            <p>{{data.title}}</p>
            <p>{{data.intro}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import article_pic from "../../assets/article_pic.png"
import profile_pic from "../../assets/user_profile_pic.png"
export default {

  name: "Blog",
  data: function(){
    return{
      articles:[
        {
          author:"Admin",
          date:"Nov 21, 2022",
          cover_pic:article_pic,
          title:"How to get into Harvard",
          intro:"This is the introduction to the article",
          user_profile_pic:profile_pic,
        },
        {
          author:"Admin",
          date:"Nov 21, 2022",
          cover_pic:article_pic,
          title:"How to get into Harvard",
          intro:"This is the introduction to the article",
          user_profile_pic:profile_pic,
        }
      ]
    }
  },
  computed:{

  }
}
</script>

<style scoped>
.blog_container{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.blog_head{
  width: 80%;
  text-align: left;
}
.article_info{
  width: 80%;
  text-align: left;
}
.article_container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 80%;
}

.article_piece{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #D9D9D9;
  width: 500px;
}
p{
  margin: 3px;
}

.article_cover_pic{
  overflow:hidden;
  width: 80%;
  height: 200px;
  background-color: #D9D9D9;
}

.article_cover_pic img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author_info img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
}



</style>