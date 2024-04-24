<template>
  <div class="post-content">
    <div class="title">
      <h2 class="text-center">張貼動態</h2>
      <div class="empty-bg"></div>
    </div>
    <div class="create">
      <p class="create-depiction">貼文內容</p>
      <textarea name="textarea-font" id="textarea" cols="30" rows="10"></textarea>
      <input type="text" value="上傳圖片" class="input-btn" @click="showAlert" />
      <img
        class="show-image"
        src="https://s.yimg.com/ny/api/res/1.2/v2ics1Z_DbOFT6wrjTaxGw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2022-06/3757bb00-eca8-11ec-bf3f-7c2b69f1b53a"
        alt="要上傳的圖片"
      />
      <button type="button" class="create-post d-block text-center mx-auto">送出貼文</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showAlert () {
      alert('圖片寫死了')
    }
  }
}
</script>

<style lang="scss" scoped>
.post-content {
  width: 100%;
  max-width: 533px;
  margin-right: 27px;
  .title {
    position: relative;
    margin-bottom: 16px;
    h2 {
      padding: 18px 0;
      position: relative;
      z-index: 2;
      font: normal normal bold 20px/24px Azeret Mono;
      color: #000400;
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 2px solid #000400;
    }
    .empty-bg {
      position: absolute;
      z-index: 1;
      top: 5px;
      left: -5px;
      width: 100%;
      height: 100%;
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 2px solid #000400;
    }
  }
  .create {
    padding: 32px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 0px #000400;
    border: 2px solid #000400;
    border-radius: 8px;
    .create-depiction {
      margin-bottom: 0;
      font: normal normal normal bold 16px/24px Noto Sans TC;
      color: #000400;
    }
    #textarea {
      width: 469px;
      max-height: 169px;
      min-height: 169px;
      margin-bottom: 16px;
      border: 2px solid #000400;
    }
    .input-btn {
      width: 128px;
      padding: 4px 0;
      margin-bottom: 16px;
      text-align: center;
      background: #000400 0% 0% no-repeat padding-box;
      border-radius: 4px;
      font: normal normal normal 16px/24px Noto Sans TC;
      color: #ffffff;
      cursor: default;
    }
    .show-image {
      width: 469px;
      height: 157px;
      margin-bottom: 32px;
      object-fit: cover;
      border: 2px solid #000400;
      border-radius: 8px;
    }
    .create-post {
      width: 323px;
      padding: 16px 0;
      background: #a8b0b9 0% 0% no-repeat padding-box;
      border: 2px solid #000400;
      border-radius: 8px;
      font: normal normal bold 16px/19px Azeret Mono;
      color: #000400;
    }
  }
}
</style>
