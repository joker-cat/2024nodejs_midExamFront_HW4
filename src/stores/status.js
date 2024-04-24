import axios from 'axios'
import { defineStore } from 'pinia'

export default defineStore('status', {
  state: () => ({
    user: {}
  }),
  getters: {
    getUserState: ({ user }) => {
      return user
    }
  },
  actions: {
    getUserAPI (sort) {
      axios
        .get('http://localhost:3005/user')
        .then((res) => {
          this.user = res.data.data[0]
        })
        .catch((err) => console.error(err))
    }
  }
})
