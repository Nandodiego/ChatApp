import { defineStore } from 'pinia'

export default defineStore('profile', {
  state: () => ({
    id: 1,
    username: 'Diego Leyton',
    avatar: '/avatars/avatar.jpg',
    status: 'active'
  })
})