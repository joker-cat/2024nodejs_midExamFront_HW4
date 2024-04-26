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
        .get(`${import.meta.env.VITE_SERVERAPI}/user`)
        .then((res) => {
          this.user = res.data.data[0]
        })
        .catch((err) => console.error(err))
    }
  }
})
