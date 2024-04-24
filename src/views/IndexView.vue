<template>
  <div class="d-flex mx-0 justify-content-center">
    <router-view></router-view>
    <div class="user">
      <div class="user-control">
        <button type="button" class="post-btn w-100" @click="postArticle">{{ localRouter }}</button>
        <ul class="user-link p-0">
          <li class="d-flex align-items-center mb-4">
            <div>
              <img class="user-icon" :src="getUserState.photo" alt="" />
            </div>
            <span>{{ getUserState.name }}</span>
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
import statusStore from '@/stores/status.js'
import { mapActions, mapState } from 'pinia'
export default {
  data () {
    return {
      user: {}
    }
  },
  created () {
    this.getUserAPI()
  },
  methods: {
    ...mapActions(statusStore, ['getUserAPI']),
    postArticle () {
      this.$router.push(this.localRouter === '張貼動態' ? '/post' : '/')
    }
  },
  computed: {
    ...mapState(statusStore, ['getUserState']),
    localRouter () {
      return {
        '/': '張貼動態',
        '/post': '返回首頁'
      }[this.$route.path]
    }
  }
}
</script>

<style lang="scss" scoped>
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
      li {
        cursor: pointer;
      }
      .user-icon {
        width: 50px;
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
