<template>
  <div class="scroll">
    <div class="article-info" v-for="post in posts" :key="post.name">
      <div class="d-flex post-userInfo">
        <img class="post-userIcon" :src="post.icon" alt="發文者" />
        <div>
          <p class="post-name mb-0">{{ post.name }}</p>
          <p class="post-time mb-0">{{ post.time }}</p>
        </div>
      </div>
      <div class="post-main">{{ post.main }}</div>
      <img class="post-image" :src="post.image" alt="文章圖片" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      posts: [
        {
          name: '邊緣小杰',
          icon: 'images/user.jpg',
          time: '2022/01/10',
          main: '外面看起來就超冷.... 我決定回被窩繼續睡....>.<外面看起來就超冷.... 我決定回被窩繼續睡....>.<外面看起來就超冷.... 我決定回被窩繼續睡....>.<外面看起來就超冷.... 我決定回被窩繼續睡....>.<外面看起來就超冷.... 我決定回被窩繼續睡....>.<外面看起來就超冷.... 我決定回被窩繼續睡....>.<外面看起來就超冷.... 我決定回被窩繼續睡....>.<',
          image:
            'https://s.yimg.com/ny/api/res/1.2/v2ics1Z_DbOFT6wrjTaxGw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2022-06/3757bb00-eca8-11ec-bf3f-7c2b69f1b53a'
        },
        {
          name: '邊緣小杰',
          icon: 'images/user.jpg',
          time: '2022/01/10',
          main: '外面看起來就超冷.... 我決定回被窩繼續睡....>.<外面看起來就超冷.... 我決定回被窩繼續睡....>.<外面看起來就超冷.... 我決定回被窩繼續睡....>.<外面看起來就超冷.... 我決定回被窩繼續睡....>.<外面看起來就超冷.... 我決定回被窩繼續睡....>.<外面看起來就超冷.... 我決定回被窩繼續睡....>.<外面看起來就超冷.... 我決定回被窩繼續睡....>.<',
          image:
            'https://s.yimg.com/ny/api/res/1.2/v2ics1Z_DbOFT6wrjTaxGw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2022-06/3757bb00-eca8-11ec-bf3f-7c2b69f1b53a'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll {
  width: 100%;
  max-height: 700px;
  overflow-x: clip;
  overflow-y: scroll;
}

::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px #848991;
  -webkit-border-radius: 10px;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background: #848991;
  -webkit-box-shadow: inset 0 0 6px #dfdddd;
}

.article-info {
  padding: 25px;
  margin-bottom: 16px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 0px #000400;
  border: 2px solid #000400;
  border-radius: 8px;
  .post-userInfo {
    margin-bottom: 16px;
    .post-userIcon {
      width: 45px;
      height: 45px;
      margin-right: 16px;
      border-radius: 50%;
    }
    .post-name {
      font: normal normal bold 16px/24px Noto Sans TC;
      color: #000400;
    }
    .post-time {
      font: normal normal normal 12px/20px Baloo Da 2;
      color: #9b9893;
    }
  }
  .post-main {
    margin-bottom: 16px;
    font: normal normal normal 16px/24px Noto Sans TC;
    color: #000400;
  }
  .post-image {
    width: 100%;
    height: 157px;
    object-fit: cover;
    background: transparent url('img/image.png') 0% 0% no-repeat padding-box;
    border: 2px solid #000400;
    border-radius: 8px;
  }
}
</style>
