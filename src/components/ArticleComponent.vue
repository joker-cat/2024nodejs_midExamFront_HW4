<template>
  <div class="article-content">
    <div class="search-content d-flex justify-content-center">
      <select id="select" v-model="isSelected" class="w-25">
        <option v-for="item in selectArray" :key="item" :value="item">
          {{ item }}
        </option>
      </select>
      <div class="w-75 position-relative">
        <input
          type="text"
          class="input-search w-100"
          placeholder="搜尋貼文"
          v-model="userSearch"
          @input="inputChange"
        />
        <div class="position-absolute search-icon text-center">
          <i class="bi bi-search"></i>
        </div>
      </div>
    </div>
    <div>
      <div class="scroll" v-if="posts.length === 0">
        <div class="article-info-empty">
          <div style="height: 44px"></div>
          <p class="text-center">目前尚無動態，新增一則貼文吧！</p>
        </div>
      </div>
      <div class="scroll" v-else>
        <div class="article-info" v-for="post in posts" :key="post.name">
          <div class="d-flex post-userInfo">
            <img class="post-userIcon" :src="post.user.image" alt="發文者" />
            <div>
              <p class="post-name mb-0">{{ post.user.name }}</p>
              <p class="post-time mb-0">{{ post.createdAt }}</p>
            </div>
          </div>
          <div class="post-main">{{ post.content }}</div>
          <img class="post-image" :src="post.image" alt="文章圖片" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _lodash from 'lodash'
export default {
  data () {
    return {
      selectArray: ['最新貼文', '由舊至新'],
      isSelected: '最新貼文',
      userSearch: '',
      lodash: null,
      posts: []
    }
  },
  created () {
    this.getArticle()
  },
  methods: {
    getArticle () {
      this.$http
        .get(`${import.meta.env.VITE_SERVERAPI}/post?timeSort=${this.sortArray}&q=${this.userSearch.trim()}`)
        .then((res) => {
          this.posts = res.data.data
        })
        .catch((err) => console.error(err))
    },
    inputChange: _lodash.debounce(function () {
      // 防手抖1s
      this.getArticle()
    }, 1000)
  },
  computed: {
    sortArray () {
      return this.isSelected === '最新貼文' ? 'desc' : 'asc'
    }
  },
  watch: {
    sortArray () {
      this.getArticle()
    }
  }
}
</script>
overflow-x: clip; overflow-y: scroll;
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
  .scroll {
    width: 100%;
    max-height: 700px;
    overflow-x: clip;
    overflow-y: scroll;
    .article-info-empty {
      min-height: 132px;
      background: #ffffff 0% 0% no-repeat padding-box;
      box-shadow: 0px 3px 0px #000400;
      border: 2px solid #000400;
      border-radius: 8px;
      div {
        border-bottom: 2px solid #000400;
      }
      p {
        font: normal normal normal 16px/24px Noto Sans TC;
        color: #9b9893;
        padding: 32px;
        margin-bottom: 0;
      }
    }
    .article-info {
      max-height: 700px;
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
  }
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px #848991;
  -webkit-border-radius: 10px;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background: #848991;
  -webkit-box-shadow: inset 0 0 6px #dfdddd;
}
</style>
