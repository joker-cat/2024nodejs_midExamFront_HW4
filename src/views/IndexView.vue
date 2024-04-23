<template>
  <div class="d-flex mx-0 justify-content-center">
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
        <ArticleComponent></ArticleComponent>
      </div>
    </div>
    <div class="user">
      <div class="user-control">
        <button type="button" class="post-btn w-100">張貼動態</button>
        <ul class="user-link p-0">
          <li class="d-flex align-items-center mb-4">
            <div>
              <img class="user-icon" src="/images/user.jpg" alt="" />
            </div>
            <span>邊緣小杰</span>
          </li>
          <li class="d-flex align-items-center mb-4">
            <div class="bg-icon">
              <i class="bi bi-bell"></i>
            </div>
            <span>追蹤名單</span>
          </li>
          <li class="d-flex align-items-center mb-4">
            <div class="bg-icon">
              <i class="bi bi-hand-thumbs-up"></i>
            </div>
            <span>我按讚的文章</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleComponent from '@/components/ArticleComponent.vue'

export default {
  data () {
    return {
      selectArray: ['最新貼文'],
      isSelected: '最新貼文'
    }
  },
  components: {
    ArticleComponent
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
  .search-icon{
    width: 46px;
    height: 46px;
    top: 0;
    right: 0;
    font-size: 20px;
    background-color: #03438D;
    color: #FFFFFF;
    i{
      line-height: 46px;
    }
  }
}
.user {
  width: 100%;
  max-width: 309px;
  .user-control {
    padding: 32px 24px 0 24px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 2px solid #000400;
    .post-btn {
      padding: 16px 0;
      margin: 0 auto;
      margin-bottom: 24px;
      background: #03438d 0% 0% no-repeat padding-box;
      box-shadow: -2px 2px 0px #000400;
      border: 2px solid #000400;
      border-radius: 8px;
      font: normal normal bold 16px/19px Azeret Mono;
      color: #ffffff;
    }
    .user-link {
      padding-left: 32px;
      list-style: none;
      font: normal normal bold 16px/24px Noto Sans TC;
      color: #000400;
      .user-icon {
        border-radius: 50%;
        margin-right: 16px;
      }
      .bg-icon {
        width: 50px;
        height: 50px;
        margin-right: 16px;
        text-align: center;
        background: #e2edfa 0% 0% no-repeat padding-box;
        border: 2px solid #000400;
        border-radius: 50%;
        i {
          width: 20px;
          font-size: 20px;
          line-height: 50px;
        }
      }
    }
  }
}
</style>
