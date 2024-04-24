<template>
  <div class="navbar">
    <nav class="d-flex justify-content-between align-items-center mx-auto">
      <h1 class="title-font">MetaWall</h1>
      <div class="member-content">
        <img class="member-image" :src="getUserState.photo" alt="" />
        <button class="member-center" type="button">Member</button>
      </div>
    </nav>
  </div>
</template>

<script>
import statusStore from '@/stores/status.js'
import { mapState } from 'pinia'
export default {
  computed: {
    ...mapState(statusStore, ['getUserState'])
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
  margin-bottom: 50px;
  border-bottom: 3px solid #000;
  background: #ffffff 0% 0% no-repeat padding-box;
  nav {
    width: 870px;
    .title-font {
      cursor: pointer;
      font: normal normal normal 26px/36px Paytone One;
      color: #000400;
    }
    .member-content {
      display: flex;
      align-items: center;
      .member-image {
        width: 30px;
        height: 30px;
        margin-right: 10px;
        border-radius: 50%;
      }
      .member-center {
        font: normal normal bold 16px/19px Azeret Mono;
        letter-spacing: 0px;
        color: #000400;
        background-color: transparent;
        border: none;
        border-bottom: 3px solid black;
      }
    }
  }
}
</style>
