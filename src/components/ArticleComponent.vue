<template>
  <div class="article-content">
    <div class="search-content d-flex justify-content-center">
      <select id="select" v-model="isSelected" class="w-25">
        <option
          v-for="item in selectArray"
          :key="item"
          :value="item"
          :selected="isSelected === '最新貼文'"
        >
          {{ item }}
        </option>
      </select>
      <div class="w-75 position-relative">
        <input type="text" class="input-search w-100" placeholder="搜尋貼文" />
        <div class="position-absolute search-icon text-center">
          <i class="bi bi-search"></i>
        </div>
      </div>
    </div>
    <div>
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
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectArray: ['最新貼文'],
      isSelected: '最新貼文',
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
.article-content {
  width: 100%;
  max-width: 533px;
  margin-right: 27px;
  #select {
    height: 46px;
    width: 100%;
    padding: 12px 16px;
    margin: 0 12px 16px 0;
    option {
      height: 46px;
      padding: 10px;
    }
  }
  .input-search {
    height: 46px;
    padding: 12px 16px;
  }
  .search-icon {
    width: 46px;
    height: 46px;
    top: 0;
    right: 0;
    font-size: 20px;
    background-color: #03438d;
    color: #ffffff;
    i {
      line-height: 46px;
    }
  }
}

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
