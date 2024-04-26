<template>
  <div class="post-content">
    <div class="title">
      <h2 class="text-center">張貼動態</h2>
      <div class="empty-bg"></div>
    </div>
    <div class="create">
      <p class="create-depiction">貼文內容</p>
      <textarea name="textarea-font" id="textarea" cols="30" rows="10" v-model="content"></textarea>
      <input
        type="file"
        name="file"
        class="d-none"
        id="fileInput"
        ref="file"
        @change="handleFileUpload"
      />
      <label for="fileInput" class="input-btn">選擇圖片</label>
      <img class="show-image w-100" :src="image" alt="要上傳的圖片" />
      <button type="button" class="create-post d-block text-center mx-auto" @click="pushArticle">
        送出貼文
      </button>
    </div>
  </div>
</template>

<script>
import statusStore from '@/stores/status.js'
import { mapState } from 'pinia'

export default {
  data () {
    return {
      image: '',
      content: '',
      file: ''
    }
  },
  computed: {
    ...mapState(statusStore, ['getUserState'])
  },
  methods: {
    // 獲得file選取的圖片資訊
    handleFileUpload () {
      this.file = this.$refs.file.files[0]
      const reader = new FileReader()
      reader.addEventListener('load', this.imageLoaded)
      reader.readAsDataURL(this.file)
    },
    // 預覽圖片
    imageLoaded (e) {
      this.image = e.target.result
    },
    async updateImage () {
      const formData = new FormData()
      formData.append('image', this.file)
      formData.append('album', import.meta.env.VITE_ALBUM)

      return await this.$http.post(import.meta.env.VITE_POSTIMGURAPI, formData, {
        headers: {
          Authorization: import.meta.env.VITE_AUTHORIZATION // postman 上的 "Access Token"，可能之後會過期
        }
      })
    },
    // 送出貼文
    async pushArticle () {
      // 檢查是否不完整
      if (this.image.trim() === '' || this.content.trim() === '') {
        alert('請填寫完整內文及圖片')
        return
      }
      try {
        const resultUpdateImage = await this.updateImage() // 上傳到Imgur
        const link = resultUpdateImage.data.data.link // 取圖片連結
        const newArticle = {
          image: link,
          content: this.content,
          user: this.getUserState._id
        }
        // 存入資料庫
        await this.$http.post(`${import.meta.env.VITE_SERVERAPI}/post`, newArticle)
        this.image = ''
        this.content = ''
        this.file = ''
        alert('新增成功')
        this.$router.push('/')
      } catch (error) {
        console.error(error)
        alert('新增失敗')
      }
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
      display: block;
      position: relative;
      height: 200px;
      margin-bottom: 32px;
      object-fit: contain;
      border: 2px solid #000400;
      border-radius: 8px;
      background: transparent;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg?w=826');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
      }
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
